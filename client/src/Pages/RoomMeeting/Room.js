import React, {useState, useEffect} from 'react';
import Video, {LocalVideoTrack, LocalDataTrack} from 'twilio-video';
import {
  Box,
  Grid,
  ListItemText,
  Drawer,
  List,
  CssBaseline,
  IconButton,
  Button,
  ListItem,
  ListItemIcon,
  Tooltip,
  withStyles,
  ClickAwayListener,
} from '@material-ui/core';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import Participant from './Participant';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';
import {EmailInvite, TelephoneInvite} from './Models';
import {ToastContainer, toast} from 'react-toastify';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LinkIcon from '@material-ui/icons/Link';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import CallEndIcon from '@material-ui/icons/CallEnd';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Chat from '@material-ui/icons/Chat';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import {findPhoneNumbersInText} from 'libphonenumber-js';
import queryString from 'query-string';
import ChatInput from './ChatInput';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CloseIcon from '@material-ui/icons/Close';
import {isMobile} from 'react-device-detect';

const Room = (props) => {
  const {
    roomName,
    token,
    setToken,
    classes,
    pinNumber,
    name,
    country,
    countries,
    setCountry,
    submitPrivateRoom,
    parentStatePrivateRoom,
    privateToken,
    mutePrivateAll,
    endPrivateCall,
    mutePrivateAudioButton,
    privateRoomLoadingState,
    roomInfo,
    open,
    setOpen,
  } = props;
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  // const [view, setView] = useState('Vertical View');
  const [view, setView] = useState('Grid');
  const [columns, setColumns] = useState(null);
  const [rows, setRows] = useState(null);
  const handle = useFullScreenHandle(false);
  const [email, setEmail] = useState('');
  const [emailOpen, setEmailOpen] = useState(false);
  const [phone, setPhone] = useState(null);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [muteall, setMuteAll] = useState(false);
  const [muteAudioButton, setMuteAudioButton] = useState(false);
  const [muteVideoButton, setMuteVideoButton] = useState(false);
  const theme = useTheme();
  const [screenShare, setScreenShare] = useState(null);
  const [screenTrack, setScreenTrack] = useState(null);
  const [verticalScrollHeight, setVerticalScrollHeight] = useState('');
  const [pinParticipant, setPinParticipant] = useState(null);
  const [gridWrapperClass, setGridWrapperClass] = useState(false);
  const [isCopyed, setIsCopyed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openPrivateRoomInfoModel, setOpenPrivateRoomInfoModel] = useState(
    false
  );
  const [refresh, setRefresh] = useState(false);
  const [stopJump, setStopJump] = useState(true);
  const [showOnlyVideo, setShowOnlyVideo] = useState(false);
  const [dominantSpeaker, setDominantSpeaker] = useState(null);
  const [isMobileWidth, setisMobileWidth] = React.useState(
    window.innerWidth <= 568
  );
  const [privateData, setPrivateData] = useState([]);
  const dataTrack = new LocalDataTrack();
  var videoTracks = [];
  var audioTracks = [];
  const [isGridFixed, setIsGridFixed] = useState('GRID');
  const [smothRendering, setSmothRendering] = useState(false);

  useEffect(async () => {
    try {
      if (roomName !== null) {
        var vid = await Video.createLocalVideoTrack().then((newTrack) => {
          videoTracks.push(newTrack);
          return newTrack;
        });
        var aud = await Video.createLocalAudioTrack({name: 'audio'}).then(
          (newTrack) => {
            audioTracks.push(newTrack);
            return newTrack;
          }
        );

        window.scroll({top: 0, left: 0, behavior: 'smooth'});
        const participantConnected = (participant) => {
          participant['audio_mute'] = false;
          participant['video_off'] = false;
          participant['pin'] = false;
          participant.state == 'connected' &&
            setParticipants((prevParticipants) => [
              ...prevParticipants,
              participant,
            ]);
        };

        const participantDisconnected = (participant) => {
          setRefresh(!refresh);
          setParticipants((prevParticipants) =>
            prevParticipants.filter((p) => p !== participant)
          );
        };

        const participantReconnecting = (participant) => {
          console.log('reconnecting');
          setRefresh(!refresh);
          setParticipants((prevParticipants) =>
            prevParticipants.filter((p) => p !== participant)
          );
        };

        Video.connect(token, {
          name: roomName,
          dominantSpeaker: true,
          tracks: [dataTrack, ...videoTracks, ...audioTracks],
          networkQuality: true,
          region: roomInfo.Region,
          video: {
            facingMode: 'user',
            height:
              roomInfo.minheight && roomInfo.maxheight
                ? {
                    min: parseInt(roomInfo.minheight),
                    max: parseInt(roomInfo.maxheight),
                  }
                : {min: 480, max: 720},
            frameRate: roomInfo.fps ? parseInt(roomInfo.fps) : 24,
            width:
              roomInfo.minwidth && roomInfo.maxwidth
                ? {
                    min: parseInt(roomInfo.minwidth),
                    max: parseInt(roomInfo.maxwidth),
                  }
                : {min: 640, max: 1280},
          },
          bandwidthProfile: {
            video: {
              // mode: 'grid',
              maxSubscriptionBitrate: roomInfo.maxSubscriptionBitrate
                ? parseInt(roomInfo.maxSubscriptionBitrate)
                : 2500000,
            },
          },
          maxAudioBitrate: roomInfo.maxAudioBitrate
            ? parseInt(roomInfo.maxAudioBitrate)
            : 16000,
          preferredVideoCodecs:
            roomInfo.VideoCodec && roomInfo.Simulcast
              ? [{codec: roomInfo.VideoCodec, simulcast: roomInfo.Simulcast}]
              : [{codec: 'VP8', simulcast: true}],
          // Screensharefps: Screensharefps,
        }).then((room) => {
          setRoom(room);
          room.on('dominantSpeakerChanged', (participant) => {
            setDominantSpeaker(participant);
          });
          room.on('participantConnected', participantConnected);
          room.on('participantReconnecting', participantReconnecting);
          room.on('participantDisconnected', participantDisconnected);

          room.participants.forEach(participantConnected);
          // room.localParticipant.setNetworkQualityConfiguration({
          //   local: 2
          // });
        });
        return () => {
          setRoom((currentRoom) => {
            if (currentRoom) {
              currentRoom.localParticipant.tracks.forEach(function (
                trackPublication
              ) {
                trackPublication.track.stop();
              });
              currentRoom.disconnect();
              window.location.reload();
              return currentRoom;
            } else {
              return currentRoom;
            }
          });
        };
      }
    } catch (error) {
      console.log(error, 'error occured in the room file');
    }
  }, [roomName, token]);

  useEffect(() => {
    setInterval(() => {
      let ele = document.getElementById('verticalScrollViewForLocal');
      let localVideo =
        ele && window.getComputedStyle(ele).getPropertyValue('height');
      let localVideoHeight = localVideo && localVideo;
      setVerticalScrollHeight(localVideoHeight);
      // let filtered_not_connected = participants.filter(part => part.state == 'reconnecting' || part.state == 'disconnected');
      // let filtered_connected = participants.filter(part => part.state == 'connected');

      // // console.log('filtered_not_connected:',filtered_not_connected,'filtered_connected:',filtered_connected)
      // if(filtered_not_connected.length > 0) {
      //   // setParticipants(filtered_connected);
      // }
    }, 1000);
  });

  useEffect(() => {
    setGridWrapperClass(false);
    if (participants.length === 0) {
      setColumns(1);
      setRows(1);
    } else if (participants.length === 1) {
      setColumns(2);
      setRows(1);
    } else if (participants.length === 2 || participants.length === 3) {
      setColumns(2);
      setGridWrapperClass(true);
      setRows(2);
    } else if (participants.length === 4 || participants.length === 5) {
      setColumns(3);
      setRows(2);
    } else if (
      participants.length === 6 ||
      participants.length === 7 ||
      participants.length === 8
    ) {
      setColumns(3);
      setRows(3);
    } else if (
      participants.length === 9 ||
      participants.length === 10 ||
      participants.length === 11
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(3);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(3);
      } else if (isMobileWidth) {
        setColumns(3);
        setRows(4);
      } else {
        setColumns(4);
        setRows(3);
      }
    } else if (
      participants.length === 12 ||
      participants.length === 13 ||
      participants.length === 14
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(4);
      } else if (isMobileWidth) {
        setColumns(3);
        setRows(5);
      } else {
        setColumns(5);
        setRows(3);
      }
    } else if (participants.length === 15) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(4);
      } else if (isMobileWidth) {
        setColumns(3);
        setRows(6);
      } else {
        setColumns(4);
        setRows(4);
      }
    } else if (
      participants.length === 16 ||
      participants.length === 17 ||
      participants.length === 18 ||
      participants.length === 19
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(5);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(5);
      } else {
        setColumns(5);
        setRows(4);
      }
    } else if (
      participants.length === 20 ||
      participants.length === 21 ||
      participants.length === 22 ||
      participants.length === 23 ||
      participants.length === 24
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(6);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(6);
      } else {
        setColumns(5);
        setRows(5);
      }
    } else if (
      participants.length === 25 ||
      participants.length === 26 ||
      participants.length === 27 ||
      participants.length === 28 ||
      participants.length === 29
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(8);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(8);
      } else {
        setColumns(6);
        setRows(5);
      }
    } else if (
      participants.length === 30 ||
      participants.length === 31 ||
      participants.length === 32 ||
      participants.length === 33 ||
      participants.length === 34 ||
      participants.length === 35
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(9);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(9);
      } else {
        setColumns(6);
        setRows(6);
      }
    } else if (
      participants.length === 36 ||
      participants.length === 37 ||
      participants.length === 38 ||
      participants.length === 39 ||
      participants.length === 40 ||
      participants.length === 41
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(10);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(10);
      } else {
        setColumns(7);
        setRows(6);
      }
    } else if (
      participants.length === 42 ||
      participants.length === 43 ||
      participants.length === 44 ||
      participants.length === 45 ||
      participants.length === 46 ||
      participants.length === 47
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(11);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(12);
      } else {
        setColumns(8);
        setRows(6);
      }
    } else if (participants.length === 48) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(12);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(12);
      } else {
        setColumns(7);
        setRows(7);
      }
    } else if (
      participants.length === 49 ||
      participants.length === 50 ||
      participants.length === 51 ||
      participants.length === 52 ||
      participants.length === 53 ||
      participants.length === 54 ||
      participants.length === 55
    ) {
      if (isGridFixed === 'Fixed Grid') {
        setColumns(4);
        setRows(false);
      } else if (!isMobileWidth && isMobile) {
        setColumns(4);
        setRows(13);
      } else if (isMobileWidth) {
        setColumns(4);
        setRows(13);
      } else {
        setColumns(8);
        setRows(7);
      }
    }
  }, [refresh, participants, room]);

  const muteLocalVideo = (participant) => {
    if (muteVideoButton) {
      setMuteVideoButton(false);
      let localParticipant = room.localParticipant;
      localParticipant.videoTracks.forEach(function (videoTracks) {
        videoTracks.track.enable();
      });
    } else {
      setMuteVideoButton(true);

      let localParticipant = room.localParticipant;
      localParticipant.videoTracks.forEach(function (videoTracks) {
        videoTracks.track.disable();
      });
    }
  };
  const muteLocalAudio = (participant, forcedUnmute) => {
    console.log(muteAudioButton, 'muteAudioButton');
    if (!forcedUnmute) {
      if (muteAudioButton) {
        setMuteAudioButton(() => false);
        let localParticipant = room.localParticipant;
        localParticipant.audioTracks.forEach(function (audioTracks) {
          audioTracks.track && audioTracks.track.enable();
        });
      } else {
        setMuteAudioButton(() => true);
        var localParticipant = room.localParticipant;
        localParticipant.audioTracks.forEach(function (audioTracks) {
          audioTracks.track && audioTracks.track.disable();
        });
      }
    } else {
      setMuteAudioButton(() => false);
      let localParticipant = room.localParticipant;
      localParticipant.audioTracks.forEach(function (audioTracks) {
        audioTracks.track && audioTracks.track.enable();
      });
    }
  };
  const muteAudio = (participant) => {
    if (participant['audio_mute']) {
      participant.audioTracks.forEach(function (audioTracks) {
        audioTracks.track && audioTracks.track.attach();
      });
    } else {
      participant.audioTracks.forEach(function (audioTracks) {
        audioTracks.track && audioTracks.track.detach();
      });
    }
    participant['audio_mute'] = !participant['audio_mute'];
    let new_participants = participants.map((p) =>
      p.sid === participant.sid ? (p = participant) : p
    );
    setParticipants(new_participants);
  };
  const muteVideo = (participant) => {
    participant['video_off'] = !participant['video_off'];
    let new_participants = participants.map((p) =>
      p.sid === participant.sid ? (p = participant) : p
    );
    setParticipants(new_participants);
  };

  const muteAll = (forceMute) => {
    let new_participants = participants;
    for (let i = 0; i < participants.length; i++) {
      if (forceMute) {
        setMuteAll(true);
        new_participants[i].audio_mute = true;
        new_participants[i].audioTracks &&
          new_participants[i].audioTracks.forEach(function (audioTracks) {
            audioTracks.track && audioTracks.track.detach();
          });
      } else {
        // if (muteall) {
        //   new_participants[i].audio_mute = false;
        //   new_participants[i].audioTracks &&
        //     new_participants[i].audioTracks.forEach(function (audioTracks) {
        //       audioTracks.track && audioTracks.track.attach();
        //     });
        // } else {

        setMuteAll(false);
        new_participants[i].audio_mute = false;
        new_participants[i].audioTracks &&
          new_participants[i].audioTracks.forEach(function (audioTracks) {
            audioTracks.track && audioTracks.track.attach();
          });
        // }
      }
    }
    // let new_participants = participants.map((par) => {
    //   if (forceMute) {
    //     par.audio_mute = true;
    //     par &&
    //       par.audioTracks &&
    //       par.audioTracks.forEach(function (audioTracks) {
    //         audioTracks.track && audioTracks.track.detach();
    //       });
    //   } else {
    //     if (muteall) {
    //       par.audio_mute = false;
    //       par.audioTracks &&
    //         par.audioTracks.forEach(function (audioTracks) {
    //           audioTracks.track && audioTracks.track.attach();
    //         });
    //     } else {
    //       par.audio_mute = true;
    //       par.audioTracks &&
    //         par.audioTracks.forEach(function (audioTracks) {
    //           audioTracks.track && audioTracks.track.detach();
    //         });
    //     }
    //     return par;
    //   }
    // });
    // if (forceMute) {
    //   setMuteAll(true);
    // } else setMuteAll(!muteall);
    setParticipants(() => new_participants);
  };

  const endCall = async () => {
    room && room.disconnect();
    setRoom((currentRoom) => {
      currentRoom.disconnect();
      currentRoom.localParticipant.tracks.forEach(function (trackPublication) {
        trackPublication.track.stop();
        trackPublication.unpublish();
        trackPublication.track.mediaStreamTrack.stop();
        props.history.push('/meeting-room');
      });

      return currentRoom;
    });
    setToken(null);
    props.history.push('/meeting-room');
    window.location.reload();
    toast.success('Successfully left room');
  };

  const shareScreenHandler = () => {
    let new_room = room;
    if (!screenShare) {
      navigator.mediaDevices
        .getDisplayMedia({
          video: {
            mediaSource: 'screen',
          },
          audio: false,
        })
        .then((stream) => {
          let tracks = LocalVideoTrack(stream.getTracks()[0]);
          setScreenTrack(tracks);
          let screen_track = tracks;
          new_room.localParticipant.publishTrack(screen_track);

          setScreenShare(true);
          new_room['screenShared'] = true;
          setRoom(() => new_room);
          screen_track.mediaStreamTrack.onended = () => {
            new_room.localParticipant.unpublishTrack(screen_track);
            screen_track.stop();
            new_room['screenShared'] = false;
            setSmothRendering(false);
            setScreenShare(false);
            setRoom(() => new_room);
          };
        });
    } else {
      new_room.localParticipant.unpublishTrack(screenTrack);
      screenTrack.stop();
      new_room['screenShared'] = false;
      setRoom(() => new_room);
      setScreenShare(false);
      setSmothRendering(false);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e, value) => {
    setCountry(value.countryCode);
    setPhone(e);
  };
  const onSubmitPhoneInvite = async (e) => {
    e.preventDefault();
    let phone_number = phone;
    let phoneNumber = findPhoneNumbersInText(
      `${phone_number} phone number`,
      country.toUpperCase()
    );
    phone_number =
      phoneNumber && phoneNumber[0] && phoneNumber[0].number.number;
    phone_number =
      phone_number && phone_number[0] === '+'
        ? phone_number.slice(1)
        : phone_number;
    let phoneNo = phone_number ? phone_number : room;
    let localName = (room?.localParticipant?.identity.split('_'))[0];
    let pin = pinNumber ? pinNumber : '0000';
    var url = `https://api.phonebounce.com/api/V1/PhoneBounceNumbers/MeetingInviteTelephoneNumber/${localName}/${pin}/${phoneNo}`;
    if (phoneNo !== '') {
      let el = document.querySelector('#copy').innerHTML;
      await axios
        .post(url, {
          data: {
            Participant: localName,
            MeetingLink: el,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((res) => {
          if (res.data[0].Result === 'success') {
            toast.success(res.data[0].Message);

            setPhoneOpen(false);
          } else {
            toast.error(res.data[0].Message);
          }
        });
    } else {
      toast.warning('Please Enter The Fields Value');
    }
  };
  const onSubmitEmailInvite = async (e) => {
    e.preventDefault();
    if (email !== '' && room !== '') {
      if (email.includes('@')) {
        var el = document.querySelector('#copy').innerHTML;
        let localName = (room?.localParticipant?.identity.split('_'))[0];
        let pin = pinNumber ? pinNumber : '0000';
        var url = `https://api.phonebounce.com/api/V1/PhoneBounceNumbers/MeetingInviteEmail/${localName}/${pin}/${email}`;

        await axios
          .post(url, {
            data: {
              Participant: localName,
              MeetingLink: el,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          .then((res) => {
            if (res.data[0].Result === 'success') {
              toast.success(res.data[0].Message);
              setEmailOpen(false);
            } else {
              toast.error(res.data[0].Message);
            }
          });
      } else {
        toast.warning('Please Enter a Valid Email');
      }
    } else {
      toast.warning('Please Enter The Fields Value');
    }
  };

  const swaping = (participantToMain, i) => {
    let new_arr = [...participants];
    pinParticipant
      ? new_arr.splice(i, 1, pinParticipant)
      : new_arr.splice(i, 1, room.localParticipant);
    setParticipants(new_arr);
    setPinParticipant(participantToMain);
  };

  const renderThumbVid = (participant) => {
    let arr = participant.videoTracks;
    return (
      arr.size > 1 && (
        <Box className={classes.thumbVid}>
          <Participant
            room={room}
            roomName={roomName}
            submitPrivateRoom={submitPrivateRoom}
            setSmothRendering={setSmothRendering}
            smothRendering={smothRendering}
            setRoom={setRoom}
            showOnlyVideo={showOnlyVideo}
            view={view}
            privateRoomLoadingState={privateRoomLoadingState}
            roomInfo={roomInfo}
            setPrivateData={setPrivateData}
            privateData={privateData}
            privateToken={privateToken}
            setOpenPrivateRoomInfoModel={setOpenPrivateRoomInfoModel}
            mute_all_audio={muteall}
            setMuteAll={setMuteAll}
            roomName={roomName}
            muteAll={muteAll}
            muteLocalAudio={muteLocalAudio}
            isThumb={true}
            key={participant.sid}
            participant={participant}
            classes={classes}
            screenShare={screenShare}
            parentStatePrivateRoom={parentStatePrivateRoom}
            endPrivateCall={endPrivateCall}
            mutePrivateAll={mutePrivateAll}
            mutePrivateAudioButton={mutePrivateAudioButton}
          ></Participant>
        </Box>
      )
    );
  };

  const remoteParticipants = participants.map((participant, i) => {
    return (
      participant.state === 'connected' && (
        <Box
          key={i}
          className={classNames({
            [classes.remoteParticipantsWrapper]: view === 'Vertical View',
            [classes.remoteParticipantsHorizontalWrapper]:
              view === 'Horizontal View',
            [classes.remoteParticipantsGridWrapper]: view === 'Grid',
          })}
        >
          {renderThumbVid(participant)}
          {participant.videoTracks ? (
            <Participant
              onClick={() => view !== 'Grid' && swaping(participant, i)}
              room={room}
              screenShare={screenShare}
              key={participant.sid}
              participant={participant}
              roomName={roomName}
              pinParticipant={pinParticipant}
              classes={classes}
              submitPrivateRoom={submitPrivateRoom}
              setSmothRendering={setSmothRendering}
              smothRendering={smothRendering}
              setRoom={setRoom}
              showOnlyVideo={showOnlyVideo}
              view={view}
              dominantSpeaker={dominantSpeaker}
              privateRoomLoadingState={privateRoomLoadingState}
              roomInfo={roomInfo}
              setPrivateData={setPrivateData}
              privateData={privateData}
              privateToken={privateToken}
              setOpenPrivateRoomInfoModel={setOpenPrivateRoomInfoModel}
              mute_all_audio={muteall}
              setMuteAll={setMuteAll}
              roomName={roomName}
              muteAll={muteAll}
              muteLocalAudio={muteLocalAudio}
              parentStatePrivateRoom={parentStatePrivateRoom}
              endPrivateCall={endPrivateCall}
              mutePrivateAll={mutePrivateAll}
              mutePrivateAudioButton={mutePrivateAudioButton}
              muteVideo={
                participant && participant.sid === room.localParticipant.sid
                  ? muteLocalVideo
                  : muteVideo
              }
              muteAudio={muteAudio}
            ></Participant>
          ) : (
            <Loader type="Bars" color={'#fff'} height={30} width={30} />
          )}
        </Box>
      )
    );
  });

  const handleChangeView = () => {
    if (view === 'Fixed Grid') {
      setView('Vertical View');
    } else if (view === 'Vertical View') {
      setView('Horizontal View');
    } else if (view === 'Horizontal View') {
      setIsGridFixed(false);
      setView('Grid');
    } else if (view === 'Grid') {
      setView('Fixed Grid');
      setIsGridFixed('Fixed Grid');
    }
  };

  // DRAWER
  const handleToggleDrawer = () => {
    if (open === 'closed') {
      setOpen(true);
      setTimeout(() => {
        setStopJump(true);
      }, 200);
    } else if (open) {
      setOpen(false);
    } else if (open === false) {
      setOpen('closed');
      setStopJump(false);
    }
  };

  const renderView = () => {
    let layout = null;
    switch (true) {
      case view === 'Vertical View':
        layout = (
          <Box className={classes.verticleView}>
            {participants.length !== 0 && (
              <Box
                // id="verticalScrollMedia"
                id={'remoteWrapper'}
                style={{
                  height: verticalScrollHeight,
                }}
                className={classNames({[classes.verticalScroll]: true})}
              >
                {remoteParticipants}
              </Box>
            )}
            <Box
              className={classNames({
                [classes.localParticipantWrapper]: true,
                [classes.verticalScrollViewForLocal]: true,
              })}
            >
              {pinParticipant && renderThumbVid(pinParticipant)}
              {room ? (
                <Participant
                  room={room}
                  id="verticalScrollViewForLocal"
                  classes={classes}
                  submitPrivateRoom={submitPrivateRoom}
                  setSmothRendering={setSmothRendering}
                  smothRendering={smothRendering}
                  setRoom={setRoom}
                  showOnlyVideo={showOnlyVideo}
                  view={view}
                  privateRoomLoadingState={privateRoomLoadingState}
                  roomInfo={roomInfo}
                  setPrivateData={setPrivateData}
                  privateData={privateData}
                  privateToken={privateToken}
                  setOpenPrivateRoomInfoModel={setOpenPrivateRoomInfoModel}
                  mute_all_audio={muteall}
                  setMuteAll={setMuteAll}
                  roomName={roomName}
                  muteAll={muteAll}
                  muteLocalAudio={muteLocalAudio}
                  dominantSpeaker={dominantSpeaker}
                  parentStatePrivateRoom={parentStatePrivateRoom}
                  endPrivateCall={endPrivateCall}
                  mutePrivateAll={mutePrivateAll}
                  mutePrivateAudioButton={mutePrivateAudioButton}
                  key={
                    pinParticipant
                      ? pinParticipant.sid
                      : room.localParticipant.sid
                  }
                  pinParticipant={pinParticipant}
                  participant={
                    pinParticipant ? pinParticipant : room.localParticipant
                  }
                  roomName={roomName}
                  screenShare={screenShare}
                  muteVideo={
                    !pinParticipant ||
                    pinParticipant.sid === room.localParticipant.sid
                      ? muteLocalVideo
                      : muteVideo
                  }
                  muteAudio={
                    !pinParticipant ||
                    pinParticipant.sid === room.localParticipant.sid
                      ? muteLocalAudio
                      : muteAudio
                  }
                  muteAudioButton={muteAudioButton}
                  muteVideoButton={muteVideoButton}
                  isLocal={
                    !pinParticipant ||
                    pinParticipant.sid === room.localParticipant.sid
                  }
                ></Participant>
              ) : (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.loaderWrapper}
                >
                  <Loader type="Bars" color={'#fff'} height={30} width={30} />
                </Box>
              )}
            </Box>
          </Box>
        );
        break;
      case view === 'Horizontal View':
        layout = (
          <Box className={classes.horizontalView} id={'horizontalView'}>
            {!isMobile && (
              <Box className={classes.horizontalScroll}>
                {remoteParticipants}
              </Box>
            )}
            <Box
              className={classNames({
                [classes.horizontalScrollViewForLocal]:
                  view === 'Horizontal View',
              })}
            >
              {pinParticipant && renderThumbVid(pinParticipant)}
              {room ? (
                <Participant
                  room={room}
                  roomName={roomName}
                  classes={classes}
                  submitPrivateRoom={submitPrivateRoom}
                  setSmothRendering={setSmothRendering}
                  smothRendering={smothRendering}
                  setRoom={setRoom}
                  showOnlyVideo={showOnlyVideo}
                  view={view}
                  privateRoomLoadingState={privateRoomLoadingState}
                  roomInfo={roomInfo}
                  setPrivateData={setPrivateData}
                  privateData={privateData}
                  privateToken={privateToken}
                  setOpenPrivateRoomInfoModel={setOpenPrivateRoomInfoModel}
                  mute_all_audio={muteall}
                  setMuteAll={setMuteAll}
                  roomName={roomName}
                  muteAll={muteAll}
                  muteLocalAudio={muteLocalAudio}
                  dominantSpeaker={dominantSpeaker}
                  parentStatePrivateRoom={parentStatePrivateRoom}
                  endPrivateCall={endPrivateCall}
                  mutePrivateAll={mutePrivateAll}
                  mutePrivateAudioButton={mutePrivateAudioButton}
                  key={
                    pinParticipant
                      ? pinParticipant.sid
                      : room.localParticipant.sid
                  }
                  participant={
                    pinParticipant ? pinParticipant : room.localParticipant
                  }
                  pinParticipant={pinParticipant}
                  screenShare={screenShare}
                  muteVideo={
                    !pinParticipant ||
                    pinParticipant.sid === room.localParticipant.sid
                      ? muteLocalVideo
                      : muteVideo
                  }
                  muteAudio={
                    !pinParticipant ||
                    pinParticipant.sid === room.localParticipant.sid
                      ? muteLocalAudio
                      : muteAudio
                  }
                  muteAudioButton={muteAudioButton}
                  muteVideoButton={muteVideoButton}
                  isLocal={
                    !pinParticipant ||
                    pinParticipant.sid === room.localParticipant.sid
                      ? true
                      : false
                  }
                ></Participant>
              ) : (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.loaderWrapper}
                >
                  <Loader type="Bars" color={'#fff'} height={30} width={30} />
                </Box>
              )}
            </Box>

            {isMobile && (
              <Box className={classes.horizontalScroll}>
                {remoteParticipants}
              </Box>
            )}
          </Box>
        );
        break;
      case view === 'Grid' || view === 'Fixed Grid':
        layout = (
          <Box className={classes.gridView}>
            <Box
              style={{
                gridTemplateColumns: `repeat(${columns ? columns : 1}, 1fr)`,
                gridTemplateRows: `repeat(${rows ? rows : 1}, 1fr)`,
              }}
              id={gridWrapperClass ? 'gridContainer' : ''}
              className={classNames({
                [classes.gridContainer]: true,
                [classes.fixedGrid]: !rows && view === 'Fixed Grid',
              })}
            >
              <Box className={classes.remoteParticipantsGridWrapper}>
                {pinParticipant && renderThumbVid(pinParticipant)}
                {room ? (
                  <Participant
                    room={room}
                    id="verticalScrollViewForLocal"
                    classes={classes}
                    submitPrivateRoom={submitPrivateRoom}
                    setSmothRendering={setSmothRendering}
                    smothRendering={smothRendering}
                    setRoom={setRoom}
                    showOnlyVideo={showOnlyVideo}
                    view={view}
                    privateRoomLoadingState={privateRoomLoadingState}
                    roomInfo={roomInfo}
                    setPrivateData={setPrivateData}
                    privateData={privateData}
                    privateToken={privateToken}
                    setOpenPrivateRoomInfoModel={setOpenPrivateRoomInfoModel}
                    mute_all_audio={muteall}
                    setMuteAll={setMuteAll}
                    roomName={roomName}
                    muteAll={muteAll}
                    muteLocalAudio={muteLocalAudio}
                    dominantSpeaker={dominantSpeaker}
                    parentStatePrivateRoom={parentStatePrivateRoom}
                    endPrivateCall={endPrivateCall}
                    mutePrivateAll={mutePrivateAll}
                    mutePrivateAudioButton={mutePrivateAudioButton}
                    key={
                      pinParticipant
                        ? pinParticipant.sid
                        : room.localParticipant.sid
                    }
                    pinParticipant={pinParticipant}
                    participant={
                      pinParticipant ? pinParticipant : room.localParticipant
                    }
                    roomName={roomName}
                    screenShare={screenShare}
                    muteVideo={
                      !pinParticipant ||
                      pinParticipant.sid === room.localParticipant.sid
                        ? muteLocalVideo
                        : muteVideo
                    }
                    muteAudio={
                      !pinParticipant ||
                      pinParticipant.sid === room.localParticipant.sid
                        ? muteLocalAudio
                        : muteAudio
                    }
                    muteAudioButton={muteAudioButton}
                    muteVideoButton={muteVideoButton}
                    isLocal={
                      !pinParticipant ||
                      pinParticipant.sid === room.localParticipant.sid
                    }
                  ></Participant>
                ) : (
                  <Box
                    display="flex"
                    mb={5}
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{height: 'calc(100vh - 60px)'}}
                    className={classes.loaderWrapper}
                  >
                    <Loader type="Bars" color={'#fff'} height={30} width={30} />
                  </Box>
                )}
              </Box>
              {remoteParticipants}
            </Box>
          </Box>
        );
        break;
      default:
        layout = <Box></Box>;
    }
    return layout;
  };

  const copy = () => {
    try {
      setIsCopyed(true);
      setTimeout(() => {
        setIsCopyed(false);
      }, 3000);
      const el = document.querySelector('#copy').innerHTML;
      return navigator.clipboard.writeText(el);
    } catch (err) {
      console.log(err);
    }
  };

  const openInvitePhoneModel = (value) => {
    setEmailOpen(false);
    setPhoneOpen(value);
  };
  const openInviteEmailModel = (value) => {
    setPhoneOpen(false);
    setEmailOpen(value);
  };
  const toggleChatModel = () => {
    setIsOpen(!isOpen);
  };
  // *******************
  return (
    <FullScreen handle={handle}>
      <div className={classes.root}>
        <CssBaseline />

        {handle.active && <ToastContainer position={'bottom-left'} />}
        <main
          className={classes.content}
          style={{paddingRight: open === 'closed' && 0}}
        >
          <Box
            // id="roomWrapperMedia"
            className={classNames({
              [classes.roomWrapper]: true,
              [classes.roomWrapperForVerticleView]: view === 'Vertical View',
              [classes.fullHeight]: handle.active,
              [classes.sidebarClosed]: open === 'closed',
            })}
          >
            <Grid container>
              <Grid item xs={12}>
                {renderView()}
              </Grid>
            </Grid>
            {/* Call Models */}
            <EmailInvite
              email={email}
              onChange={onChangeEmail}
              onSubmit={onSubmitEmailInvite}
              open={emailOpen}
              onClose={setEmailOpen}
              classes={classes}
            />

            <TelephoneInvite
              phone={phone}
              country={country}
              countries={countries}
              onChange={onChangePhone}
              onSubmit={(e) => onSubmitPhoneInvite(e)}
              open={phoneOpen}
              onClose={setPhoneOpen}
              classes={classes}
            />
          </Box>
        </main>
        <Drawer
          anchor="right"
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.drawerClosed]: open === 'closed',
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              [classes.drawerClosed]: open === 'closed',
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton
              onClick={handleToggleDrawer}
              className={classes.chevrenIcon}
            >
              {open === 'closed' ? (
                <ChevronLeftIcon />
              ) : open ? (
                <ChevronRightIcon />
              ) : (
                <CloseIcon />
              )}
            </IconButton>
          </div>
          <List
            className={clsx({
              [classes.linksList]: true,
              [classes.drawerList]: !open,
            })}
          >
            {open && open !== 'closed' && (
              <ListItem
                button
                className={classes.drawerListItem}
                onClick={() => copy()}
                style={{
                  display: 'flex',
                  transition: '.5s',
                  justifyContent: 'center',
                }}
              >
                {stopJump && (
                  <IconButton
                    className={classes.phoneBounceButton}
                    onClick={() => copy()}
                  >
                    {isCopyed ? (
                      <AssignmentTurnedInIcon
                        className={classes.drawerListIcon}
                        style={{fontSize: '20px', marginRight: '10px'}}
                      />
                    ) : (
                      <AssignmentIcon
                        className={classes.drawerListIcon}
                        style={{fontSize: '20px', marginRight: '10px'}}
                      />
                    )}
                    MEETING LINK
                    {/* {isCopyed ? (
                    <span className={classes.copyStyles}>copied</span>
                  ) : (
                    <span className={classes.copyStyles}>copy</span>
                  )} */}
                  </IconButton>
                )}
                <span id="copy" style={{opacity: 0, position: 'absolute'}}>
                  {window.location.href}
                </span>
              </ListItem>
            )}
            <ListItem
              button
              onClick={() => openInviteEmailModel(true)}
              className={classes.drawerListItem}
              style={{marginTop: open === 'closed' && '28px'}}
            >
              <ListItemIcon>
                <MailIcon className={classes.drawerListIcon} />
              </ListItemIcon>
              <ListItemText className={classes.drawerItemText}>
                Invite via Email
              </ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => openInvitePhoneModel(true)}
              className={classes.drawerListItem}
            >
              <ListItemIcon>
                <PhoneIcon className={classes.drawerListIcon} />
              </ListItemIcon>
              <ListItemText className={classes.drawerItemText}>
                Invite via Phone
              </ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={shareScreenHandler}
              className={classes.drawerListItem}
            >
              <ListItemIcon>
                {!screenShare ? (
                  <ScreenShareIcon className={classes.drawerListIcon} />
                ) : (
                  <StopScreenShareIcon className={classes.drawerListIcon} />
                )}
              </ListItemIcon>
              <ListItemText className={classes.drawerItemText}>
                Share Screen
              </ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() =>
                privateToken !== null
                  ? setOpenPrivateRoomInfoModel(!openPrivateRoomInfoModel)
                  : muteall
                  ? muteAll(false)
                  : muteAll(true)
              }
              className={classes.drawerListItem}
              style={{position: 'relative'}}
            >
              {privateToken !== null && openPrivateRoomInfoModel && (
                <Box
                  className={classNames({
                    [classes.privateRoomInfoModelBoxWrapper]: true,
                    [classes.drawerCloseChatBoxWrapper]: !open,
                    // [classes.sidebarChatBoxWrapper]: true,
                  })}
                >
                  <p style={{textAlign: 'center'}}>
                    Please exit the private call before <br /> Unmuting the main
                    conference
                  </p>
                  <Box
                    className={classNames({
                      [classes.openPrivateRoomInfoModelBoxDeco]: true,
                      [classes.drawerClosechatBoxDeco]: !open,
                    })}
                  />
                </Box>
              )}
              <ListItemIcon>
                <button
                  className={classNames({
                    [classes.transparentBtn]: true,
                    [classes.textDisabled]: privateToken !== null,
                  })}
                  disabled={privateToken !== null}
                >
                  {muteall ? (
                    <MicOffIcon
                      className={classNames({
                        [classes.drawerListIcon]: true,
                        [classes.textDisabled]: privateToken !== null,
                      })}
                    />
                  ) : (
                    <MicIcon
                      className={classNames({
                        [classes.drawerListIcon]: true,
                        [classes.textDisabled]: privateToken !== null,
                      })}
                    />
                  )}
                </button>
              </ListItemIcon>
              <ListItemText className={classes.drawerItemText}>
                <span
                  disabled={privateToken !== null}
                  // onClick={() =>
                  //   privateToken !== null
                  //     ? setOpenPrivateRoomInfoModel(!openPrivateRoomInfoModel)
                  //     : muteAll()
                  // }
                  className={classNames({
                    [classes.transparentBtn]: true,
                    [classes.textDisabled]: privateToken !== null,
                  })}
                >
                  {muteall ? 'Unmute  All' : 'Mute All'}
                </span>
              </ListItemText>
            </ListItem>

            {/* {room && (
              <ListItem
                button
                onClick={(e) => submitPrivateRoom(e)}
                className={classes.drawerListItem}
              >
                <ListItemIcon>
                  <LockIcon
                    className={classNames({[classes.drawerListIcon]: true})}
                  />
                </ListItemIcon>
                <ListItemText className={classes.drawerItemText}>Create Private Room</ListItemText>
              </ListItem>
            )} */}
            {room && (
              <ListItem
                button
                className={classes.drawerListItem}
                style={{position: 'relative'}}
              >
                {isOpen && (
                  <Box
                    className={classNames({
                      [classes.drawerCloseChatBoxWrapper]: !open,
                      [classes.chatBoxWrapper]: true,
                      [classes.sidebarChatBoxWrapper]: true,
                    })}
                  >
                    <ChatInput
                      room={room}
                      dataTrack={{}}
                      toAll={true}
                      setIsOpen={toggleChatModel}
                    />
                    <Box
                      className={classNames({
                        [classes.chatBoxDeco]: true,
                        [classes.drawerClosechatBoxDeco]: !open,
                      })}
                    />
                  </Box>
                )}
                <ListItemIcon onClick={() => setIsOpen((isOpen) => !isOpen)}>
                  <Chat className={classes.drawerListIcon} />
                </ListItemIcon>
                <ListItemText
                  className={classes.drawerItemText}
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  Broadcast
                </ListItemText>
              </ListItem>
            )}
            <ListItem
              button
              onClick={!handle.active ? handle.enter : handle.exit}
              className={classes.drawerListItem}
              style={{paddingBottom: 0}}
            >
              <ListItemIcon>
                {handle.active ? (
                  <FullscreenExitIcon className={classes.drawerListIcon} />
                ) : (
                  <FullscreenIcon className={classes.drawerListIcon} />
                )}
              </ListItemIcon>
              <ListItemText className={classes.drawerItemText}>
                Full Screen
              </ListItemText>
            </ListItem>

            <ListItem
              button
              onClick={() => setShowOnlyVideo(!showOnlyVideo)}
              className={classes.drawerListItem}
            >
              <ListItemIcon>
                <MenuIcon className={classes.drawerListIcon} />
              </ListItemIcon>
              <ListItemText className={classes.drawerItemText}>
                Toolbar
              </ListItemText>
            </ListItem>

            {open && open !== 'closed' && (
              <ListItem
                className={classes.drawerListItem}
                style={{paddingTop: 0}}
              >
                <ListItemText className={classes.drawerItemText}>
                  {/* <select
                    value={view}
                    onChange={handleChangeView}
                    label="View"
                  >
                    <option value={'Vertical View'}>Vertical View</option>
                    <option value={'Horizontal View'}>Horizontal View</option>
                    <option value={'Grid'}>Grid</option>
                  </select> */}
                  <button
                    className={classes.viewDopdown}
                    onClick={() => handleChangeView()}
                  >
                    {view}
                  </button>
                </ListItemText>
              </ListItem>
            )}
            {room && (
              <ListItem
                button
                onClick={endCall}
                className={classes.drawerListItem}
              >
                <ListItemIcon>
                  <CallEndIcon
                    className={classNames({[classes.drawerListIcon]: true})}
                  />
                </ListItemIcon>
                <ListItemText className={classes.drawerItemText}>
                  Leave Room
                </ListItemText>
              </ListItem>
            )}
          </List>
        </Drawer>
      </div>
    </FullScreen>
    // *******************
  );
};

export default withRouter(Room);
