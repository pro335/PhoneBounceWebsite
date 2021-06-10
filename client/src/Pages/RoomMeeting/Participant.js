import React, {useState, useEffect, useRef, useMemo} from 'react';

import {
  Box,
  Typography,
  Button,
  withStyles,
  ClickAwayListener,
  Tooltip,
} from '@material-ui/core';

import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import {toast} from 'react-toastify';
import LockIcon from '@material-ui/icons/Lock';
import ChatIcon from '@material-ui/icons/CommentOutlined';
import hexToRgba from 'hex-to-rgba';
import classNames from 'classnames';
import ChatInput from './ChatInput';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';
import Loader from 'react-loader-spinner';
// import SignalWifi0BarIcon from '@material-ui/icons/SignalWifi0Bar';
// import SignalWifi1BarIcon from '@material-ui/icons/SignalWifi1Bar';
// import SignalWifi2BarIcon from '@material-ui/icons/SignalWifi2Bar';
// import SignalWifi3BarIcon from '@material-ui/icons/SignalWifi3Bar';
// import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';
import Signal1 from '../../assets/images/signals/1sig.png';
import Signal2 from '../../assets/images/signals/2sig.png';
import Signal3 from '../../assets/images/signals/3sig.png';
import Signal4 from '../../assets/images/signals/4sig.png';
import Signal5 from '../../assets/images/signals/sig5.png';
import RefreshIcon from '@material-ui/icons/Refresh';
// import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import {LocalVideoTrack, createLocalVideoTrack} from 'twilio-video';

import {isMobile} from 'react-device-detect';
const Participant = ({
  participant,
  classes,
  room,
  roomName,
  muteAudio,
  muteVideo,
  muteAudioButton,
  muteVideoButton,
  screenShare,
  onClick,
  isThumb,
  isLocal,
  pinParticipant,
  id,
  submitPrivateRoom,
  privateToken,
  parentStatePrivateRoom,
  mutePrivateAll,
  endPrivateCall,
  mutePrivateAudioButton,
  muteAll,
  mute_all_audio,
  set_mute_all_audio,
  privateData,
  setPrivateData,
  muteLocalAudio,
  privateRoomLoadingState,
  roomInfo,
  showOnlyVideo,
  dominantSpeaker,
  setRoom,
  smothRendering,
  setSmothRendering,
  view,
}) => {
  const handle = useFullScreenHandle(false);
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [dataTracks, setDataTracks] = useState([]);
  const [isOpenPrivatePopup, setIsOpenPrivatePopup] = useState(false);
  const [isInPrivateChatStart, setIsInPrivateChatStart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMode, setisMobileMode] = React.useState(
    window.innerWidth > 600
  );
  const [openPrivateRoomInfoModel, setOpenPrivateRoomInfoModel] = useState(
    false
  );

  const [mediaAllDivices, setMediaAllDevices] = useState([]);
  const [selectedCam, setSelectedCam] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [privateDataInfo, setPrivateDataInfo] = useState(false);
  const [localNetworkQuality, setLocalNetworkQuality] = useState(null);
  const videoRef = useRef();
  const audioRef = useRef();
  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));
    // setDataTracks(trackpubsToTracks(participant.dataTracks));
    console.log('tracktrack');
    const trackSubscribed = (track) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else if (track.kind === 'audio') {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      } else if (track.kind === 'data') {
        track.on('message', (data) => {
          // Parsing
          let convertToString = JSON.parse(data);
          if (
            convertToString.Participant === room.localParticipant.sid &&
            convertToString.Event === 'client-private-end'
          ) {
            muteLocalAudio(participant, true);
            endPrivateCall(false, room, parentStatePrivateRoom, false);
            muteAll(false);
            setIsInPrivateChatStart(() => false);
          } else if (
            convertToString.Participant === room.localParticipant.sid &&
            convertToString.Event === 'client-private-start'
          ) {
            submitPrivateRoom(
              '',
              participant,
              room,
              convertToString.RoomName,
              convertToString.Pin
            );
            muteAll(true);
            if (!muteAudioButton) muteLocalAudio(participant);
            setIsInPrivateChatStart(() => true);
          } else if (
            convertToString.Participant === room.localParticipant.sid &&
            convertToString.Event === 'client-message'
          ) {
            setDataTracks((dataTracks) => [...dataTracks, convertToString]);
          } else if (
            convertToString.Participant === 'All' &&
            convertToString.Event === 'client-message'
          ) {
            setDataTracks((dataTracks) => [...dataTracks, convertToString]);
          } else if (
            convertToString.Participant !== room.localParticipant.sid &&
            convertToString.Event === 'client-private-start'
          ) {
            if (parentStatePrivateRoom) {
              setPrivateData((prevsData) => [
                ...prevsData,
                convertToString.Participant,
                parentStatePrivateRoom.localParticipant.sid,
              ]);
            } else
              setPrivateData((prevsData) => [
                ...prevsData,
                convertToString.Participant,
                convertToString.From,
              ]);
          } else if (
            convertToString.Participant !== room.localParticipant.sid &&
            convertToString.Event === 'client-private-end'
          ) {
            setPrivateData([]);
          }
        });
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else if (track.kind === 'audio') {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    const printNetworkQualityStats = (
      networkQualityLevel,
      networkQualityStats
    ) => {
      // Print in console the networkQualityLevel using bars
      console.log(
        {
          1: '▃',
          2: '▃▄',
          3: '▃▄▅',
          4: '▃▄▅▆',
          5: '▃▄▅▆▇',
        }[networkQualityLevel] || ''
      );
      setLocalNetworkQuality(networkQualityLevel);
      // if (networkQualityStats) {
      //   // Print in console the networkQualityStats, which is non-null only if Network Quality
      //   // verbosity is 2 (moderate) or greater
      //   console.log('Network Quality statistics:', networkQualityStats);
      // }
    };

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    // Print the initial Network Quality Level and statistics
    printNetworkQualityStats(
      participant.networkQualityLevel,
      participant.networkQualityStats
    );

    // Print changes to Network Quality Level and statistics
    participant.on('networkQualityLevelChanged', printNetworkQualityStats);
    console.log('rendered  useeffect subscribe tracks', videoTracks);
    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      setDataTracks([]);
      participant.removeAllListeners();
    };
  }, [
    refresh,
    mediaAllDivices,
    participant,
    room,
    isThumb,
    screenShare,
    pinParticipant,
    smothRendering
  ]);

  useEffect(() => {
    let videoTrack =
      isThumb && videoTracks.length > 1
        ? videoTracks[0]
        : videoTracks[videoTracks.length - 1];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
    console.log('rendered  useeffect for attacgh vid track');
  }, [
    refresh,
    videoTracks,
    mediaAllDivices,
    room,
    participant,
    screenShare,
    isThumb,
    pinParticipant,
  ]);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
  }, [
    participant,
    refresh,
    mediaAllDivices,
    room,
    screenShare,
    pinParticipant,
  ]);

  useEffect(() => {
    let participantColor =
      '#' + participant.identity.substr(participant.identity.length - 6);
    dataTracks[dataTracks.length - 1] &&
      toast.info(
        <div
          style={{
            background: participantColor,
            minHeight: '64px',
            padding: '3px 5px',
            wordBreak: 'break-word',
          }}
        >
          {dataTracks[dataTracks.length - 1].Message}
        </div>,
        {
          autoClose: 15000,
        }
      );
    // toast.info(dataTracks[dataTracks.length - 1].Message, {
    //   className: 'black-background',
    //   bodyClassName: 'black-background',
    // });
    // toast.info(, );
  }, [dataTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [refresh, audioTracks, screenShare, pinParticipant]);
  useEffect(() => {
    if(screenShare && !smothRendering){
    setTimeout(() => {
      setSmothRendering(!smothRendering);
    }, 1500);
  }
  },[screenShare]);
  const toggleChatModel = () => {
    setIsOpen(!isOpen);
  };

  const requestToJoinPrivateRoom = (e, participant, room) => {
    muteAll(true);
    muteLocalAudio(participant);
    setOpenPrivateRoomInfoModel(false);
    setIsInPrivateChatStart(() => true);
    submitPrivateRoom(e, participant, room, false, false);
  };
  const disconnectPrivateRoom = (participant, room) => {
    endPrivateCall(participant, room, parentStatePrivateRoom, true);
    muteAll(false);
    muteLocalAudio(participant);
    setIsInPrivateChatStart(() => false);
  };

  const mutePrivateAllAndUnmutePublic = () => {
    mutePrivateAll();
    // muteAll(true);
  };

  const renderNetworkQualityIcons = () => {
    let icon = null;
    // return localNetworkQuality && <img src={`/assets/signal.png`} alt={`s_${localNetworkQuality}`} className={classes.networkQualityIcon} />
    switch (localNetworkQuality) {
      case 0 || 1:
        {
          // icon = <SignalWifi1BarIcon className={classes.networkQualityIcon} />;
          icon = (
            <img
              src={Signal1}
              alt={`{localNetworkQuality}`}
              className={classes.networkQualityIcon}
            />
          );
        }
        break;
      case 2:
        {
          // icon = <SignalWifi1BarIcon className={classes.networkQualityIcon} />;
          icon = (
            <img
              src={Signal2}
              alt={`{localNetworkQuality}`}
              className={classes.networkQualityIcon}
            />
          );
        }
        break;

      case 3:
        {
          // icon = <SignalWifi1BarIcon className={classes.networkQualityIcon} />;
          icon = (
            <img
              src={Signal3}
              alt={`{localNetworkQuality}`}
              className={classes.networkQualityIcon}
            />
          );
        }
        break;
      case 4:
        {
          // icon = <SignalWifi1BarIcon className={classes.networkQualityIcon} />;
          icon = (
            <img
              src={Signal4}
              alt={`{localNetworkQuality}`}
              className={classes.networkQualityIcon}
            />
          );
        }
        break;
      case 5:
        {
          // icon = <SignalWifi1BarIcon className={classes.networkQualityIcon} />;
          icon = (
            <img
              src={Signal5}
              alt={`{localNetworkQuality}`}
              className={classes.networkQualityIcon}
            />
          );
        }
        break;
      default: {
        icon = (
          <img
            src={Signal1}
            alt={`{localNetworkQuality}`}
            className={classes.networkQualityIcon}
          />
        );
      }
    }

    return icon;
  };
  const [currentStream, setCurrentStream] = useState(null);

  const stopMediaTracks = (stream) => {
    console.log('stopMedia', stream);
    stream.getTracks().forEach((track) => {
      track.stop();
    });
    setVideoTracks([]);
  };

  function gotDevices(mediaDevices, isUpdateRequired) {
    mediaDevices.forEach((mediaDevice) => {
      if (mediaDevice.kind === 'videoinput') {
        if (!mediaAllDivices || mediaAllDivices.label !== mediaDevice.label) {
          setMediaAllDevices(mediaDevice);
        }
      }
    });
  }

  const testFunc = (value, isUpdateRequired) => {
    if (currentStream !== null) {
      stopMediaTracks(currentStream);
    }
    let videoConstraints = {};
    videoConstraints = {...videoConstraints, deviceId: {exact: value}};

    const constraints = {
      video: videoConstraints,
      audio: false,
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        // alert('function called after getting navigator mediaDevices');
        let new_room = room;

        let new_cam_tracks = LocalVideoTrack(stream.getTracks()[0]);
        const tracks = Array.from(
          room.localParticipant.videoTracks.values()
        ).map((publication) => publication.track);
        new_room.localParticipant.unpublishTracks(tracks);
        new_room.localParticipant.publishTrack(new_cam_tracks);
        // setRoom(new_room);
        // setVideoTracks([new_cam_tracks]);
        new_cam_tracks.attach(videoRef.current);
        // video.srcObject = stream;
        setCurrentStream(stream);
        return navigator.mediaDevices.enumerateDevices();
      })
      .then((stream) => gotDevices(stream, isUpdateRequired))
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(gotDevices);
  }, []);

  const onChangeSelectCam = async (value, l) => {
    //     // setSelectedCam(value.target.label);
    testFunc(mediaAllDivices.deviceId, true);
  };

  let participantColor =
    '#' + participant.identity.substr(participant.identity.length - 6);
  participantColor = hexToRgba(participantColor, 0.8);

  console.log('rendered  useeffect subscribe tracks', videoTracks);
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      id={'__p_wrapper'}
      className={classes.localVideoInnerWrapper}
      style={{
        border:
          dominantSpeaker?.sid === participant.sid && '2.5px solid #f50057',
      }}
    >
      <FullScreen handle={handle} style={{position: 'relative'}}>
        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          className={classes.video}
          id={id ? id : 'localVid'}
          onClick={onClick}
        ></video>
        {/* <Box
          style={{
            position: 'absolute',
            top: '45%',
            left: 0,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography>
            Please click on the refresh icon to <br />
            get back video
          </Typography>
        </Box> */}
        {!isThumb && participant.video_off && (
          <Box className={classes.videoOffWrapper}>
            <VideocamOffIcon fontSize="large" />
            {<Typography>Video is turned off</Typography>}
          </Box>
        )}
        {!showOnlyVideo && (
          <Box className={classes.topIconsWrapper}>
            {!handle.active ? (
              <Button onClick={handle.enter} className={classes.fullscreenIcon}>
                <Tooltip
                  title="Click for full screen"
                  placement="left"
                  arrow
                  classes={classes.tooltip}
                  id="tooltip_"
                >
                  <FullscreenIcon className={classes.topIcon} />
                </Tooltip>
              </Button>
            ) : (
              <Button
                onClick={() => handle.exit()}
                className={classes.fullscreenIcon}
              >
                <Tooltip
                  title="Click for exit full screen"
                  placement="left"
                  arrow
                  classes={classes.tooltip}
                  id="tooltip_"
                >
                  <FullscreenExitIcon className={classes.topIcon} />
                </Tooltip>
              </Button>
            )}
            <Button
              onClick={() => setRefresh(!refresh)}
              className={classes.fullscreenIcon}
            >
              <Tooltip
                title="Click to refresh"
                placement="left"
                arrow
                classes={classes.tooltip}
                id="tooltip_"
              >
                <RefreshIcon className={classes.topIcon} />
              </Tooltip>
            </Button>

            {room.localParticipant.sid === participant.sid && (
              <Button
                onClick={() => onChangeSelectCam(selectedCam)}
                className={classes.fullscreenIcon}
              >
                {/* <FlipCameraIosIcon className={classes.topIcon} /> */}
                <Tooltip
                  title="Switch camera"
                  placement="left"
                  arrow
                  classes={classes.tooltip}
                  id="tooltip_"
                >
                  <FlipCameraAndroidIcon className={classes.topIcon} />
                </Tooltip>
              </Button>
            )}
          </Box>
        )}

        {/* <audio
        ref={!mute_all_audio ? audioRef:{}}
        autoPlay={!mute_all_audio}
        muted={
          mute_all_audio
          // ? true
          // : participant.audio_mute
          // ? participant.audio_mute
          // : false
        }
        className={classes.video}
     
        /> */}
        {!isThumb && !showOnlyVideo && (
          <>
            <Box
              className={classes.participantDetailWrapper}
              display="flex"
              flexDirection={!isMobileMode && 'column'}
              justifyContent="space-between"
            >
              {!isMobileMode && (
                <Typography style={{marginLeft: '15px'}}>
                  {participant.identity.split('_')[0]}
                </Typography>
              )}
              <Box
                className={classes.participantNameWrapper}
                style={{background: `${participantColor}`}}
              >
                <Box
                  display="flex"
                  gridGap="4px"
                  alignItems="center"
                  style={{position: 'relative'}}
                >
                  {isOpenPrivatePopup && (
                    <Box
                      className={classes.chatBoxWrapper}
                      style={{
                        left: roomInfo.Secure ? '-5%' : '-3%',
                        top: roomInfo.Secure ? '-55px' : '-75px',
                        background: '#f50057',
                      }}
                    >
                      <Typography>
                        {roomInfo.Secure ? (
                          'This meeting is encrypted'
                        ) : (
                          <>
                            This is a group room and not encrypted like peer to
                            peer
                          </>
                        )}
                      </Typography>
                      <Box
                        className={classes.chatBoxDeco}
                        style={{left: '10%', background: '#f50057'}}
                      />
                    </Box>
                  )}
                  <Box display="flex" gridGap="8px" alignItems="center">
                    <i
                      className={classNames({
                        [classes.iconDisabled]: !roomInfo.Secure,
                      })}
                      onClick={() => setIsOpenPrivatePopup(!isOpenPrivatePopup)}
                    >
                      <LockIcon></LockIcon>
                    </i>

                    <i
                      // className={
                      //   muteVideoButton ? 'fas fa-video-slash' : 'fas fa-video'
                      // }
                      onClick={() => muteVideo && muteVideo(participant)}
                    >
                      {isLocal ? (
                        muteVideoButton ? (
                          <VideocamOffIcon />
                        ) : (
                          <VideocamIcon />
                        )
                      ) : participant.video_off ? (
                        <VideocamOffIcon />
                      ) : (
                        <VideocamIcon />
                      )}
                    </i>
                    {openPrivateRoomInfoModel && privateToken !== null && (
                      <Box
                        className={classes.chatBoxWrapper}
                        style={{
                          left: '41%',
                          top: '-80px',
                          background: '#f50057',
                        }}
                      >
                        <Typography>
                          Please exit the private call before <br /> Unmuting
                          the main conference
                        </Typography>
                        <Box
                          className={classes.chatBoxDeco}
                          style={{left: '10%', background: '#f50057'}}
                        />
                      </Box>
                    )}
                    <i
                      className={classNames({
                        [classes.iconDisabled]: privateToken !== null,
                      })}
                      onClick={() =>
                        privateToken !== null
                          ? setOpenPrivateRoomInfoModel(
                              !openPrivateRoomInfoModel
                            )
                          : muteAudio(participant)
                      }
                    >
                      {isLocal ? (
                        privateToken !== null ? (
                          <MicOffIcon />
                        ) : muteAudioButton ? (
                          <MicOffIcon />
                        ) : (
                          <MicIcon />
                        )
                      ) : participant.audio_mute ? (
                        <MicOffIcon />
                      ) : (
                        <MicIcon />
                      )}
                    </i>
                  </Box>
                  {isMobileMode && (
                    <Typography style={{marginLeft: '15px'}}>
                      {participant.identity.split('_')[0]}
                    </Typography>
                  )}
                </Box>
                {room && room.localParticipant.sid !== participant.sid && (
                  <Box display="flex" gridGap="8px" alignItems="center">
                    <Box style={{position: 'relative'}}>
                      {isOpen && (
                        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                          <Box className={classes.chatBoxWrapper}>
                            <ChatInput
                              room={room}
                              dataTrack={{}}
                              roomName={roomName}
                              participant={participant}
                              setIsOpen={toggleChatModel}
                            />
                            <Box className={classes.chatBoxDeco} />
                          </Box>
                        </ClickAwayListener>
                      )}
                      <Button
                        className={classes.smallBtn}
                        onClick={() => toggleChatModel()}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<ChatIcon />}
                        style={{color: '#fff'}}
                      >
                        Chat
                      </Button>
                    </Box>
                    <Box>
                      {privateDataInfo &&
                        privateData.includes(participant.sid) && (
                          <Box
                            className={classes.chatBoxWrapper}
                            style={{
                              left: '23%',
                              top: '-80px',
                              background: '#f50057',
                            }}
                          >
                            <Typography>
                              {participant.identity.split('_')[0]} is already in
                              private <br />
                              chat with someone else
                            </Typography>
                            <Box
                              className={classes.chatBoxDeco}
                              style={{left: '75%', background: '#f50057'}}
                            />
                          </Box>
                        )}
                      <Button
                        variant="contained"
                        color="secondary"
                        // disabled={privateData.includes(participant.sid)}
                        className={classNames({
                          [classes.smallBtn]: true,
                          [classes.btnDisabled]: privateData.includes(
                            participant.sid
                          ),
                          [classes.privateChatButton]: isInPrivateChatStart,
                        })}
                        size={'small'}
                        onClick={(e) =>
                          privateData.includes(participant.sid)
                            ? setPrivateDataInfo(!privateDataInfo)
                            : isInPrivateChatStart
                            ? disconnectPrivateRoom(participant, room)
                            : requestToJoinPrivateRoom(e, participant, room)
                        }
                      >
                        {privateRoomLoadingState ? (
                          <Loader
                            type="Oval"
                            color={'#e00653'}
                            height={10}
                            width={10}
                          />
                        ) : (
                          'Private'
                        )}
                      </Button>
                    </Box>
                    <Box style={{minWidth: '37px'}}>
                      {isInPrivateChatStart && (
                        <i
                          style={{fontSize: '20px'}}
                          onClick={() => mutePrivateAllAndUnmutePublic()}
                        >
                          {mutePrivateAudioButton ? (
                            <MicOffIcon />
                          ) : (
                            <MicIcon />
                          )}
                        </i>
                      )}
                    </Box>
                  </Box>
                )}
                {room.localParticipant.sid === participant.sid &&
                  !roomInfo.Secure && <Box>{renderNetworkQualityIcons()}</Box>}
              </Box>
            </Box>
          </>
        )}
      </FullScreen>
    </Box>
  );
};

export default Participant;
