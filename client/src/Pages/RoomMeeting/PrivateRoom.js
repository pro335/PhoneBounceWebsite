import React, {useState, useEffect} from 'react';
import Video, {LocalDataTrack} from 'twilio-video';
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
} from '@material-ui/core';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import PrivateParticipant from './PrivateParticipant';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';
import {EmailInvite, TelephoneInvite} from './Models';
import {toast} from 'react-toastify';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LinkIcon from '@material-ui/icons/Link';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import CallEndIcon from '@material-ui/icons/CallEnd';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import {findPhoneNumbersInText} from 'libphonenumber-js';
import queryString from 'query-string';
const PrivateRoom = (props) => {
  const {
    roomName,
    token,
    classes,
    setParentStatePrivateRoom,
    room,
    participants,
    setParticipants,
    endPrivateCall,
    end_private_room_also,
    set_end_private_room_also,
    setPrivateRoomLoadingState
  } = props;
  // const [view, setView] = useState('Vertical View');
  const [view, setView] = useState('Grid');
  const handle = useFullScreenHandle();
  const [mute_all_audio, set_mute_all_audio] = useState(false);
  const [muteAudioButton, setMuteAudioButton] = useState(false);
  const [muteVideoButton, setMuteVideoButton] = useState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(window.innerWidth > 600);
  const [screenShare, setScreenShare] = useState(null);
  const [pinParticipant, setPinParticipant] = useState(null);
  const [gridWrapperClass, setGridWrapperClass] = useState(false);

  const dataTrack = new LocalDataTrack();
  var videoTracks = [];
  var audioTracks = [];

  useEffect(() => {
    return () => {
      // setParentStatePrivateRoom(() => null);
      return room && setParentStatePrivateRoom((currentRoom) => {
          currentRoom.disconnect();
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
            trackPublication.unpublish();
            trackPublication.track.mediaStreamTrack.stop();
          });

          return currentRoom;
        });
    };
  }, []);

  useEffect(() =>{
    if(end_private_room_also){
      endPrivateCall(false,false,room,true);
      set_end_private_room_also(() => false);
    }
  },[end_private_room_also])
  useEffect(async () => {
    var vid = await Video.createLocalVideoTrack({name: 'video'}).then(
      (newTrack) => {
        videoTracks.push(newTrack);
        return newTrack;
      }
    );
    var aud = await Video.createLocalAudioTrack({name: 'audio'}).then(
      (newTrack) => {
        audioTracks.push(newTrack);
        return newTrack;
      }
    );

    window.scroll({top: 0, left: 0, behavior: 'smooth'});
    const participantConnected = (participant) => {
      setPrivateRoomLoadingState(() => false);
      participant['audio_mute'] = false;
      participant['pin'] = false;
      participant.state == 'connected' &&
        setParticipants((prevParticipants) => [
          // ...prevParticipants,
          participant,
        ]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    const participantReconnecting = (participant) => {
      console.log('reconnecting');
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName,
      dominantSpeaker: true,
      tracks: [...audioTracks],
    }).then((room) => {
      // debugger;
      setParentStatePrivateRoom(() => room);

      room.on('dominantSpeakerChanged', (participant) => {
        console.log('The new dominant speaker in the Room is:', participant);
      });
      room.on('participantConnected', participantConnected);
      // room.on('participantReconnecting', participantReconnecting);
      room.on('participantDisconnected', participantDisconnected);

      room.participants.forEach(participantConnected);
    });
    return () => {
      setParentStatePrivateRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return currentRoom;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);
  const muteLocalAudio = (participant) => {
    if (muteAudioButton) {
      setMuteAudioButton(false);
      let localParticipant = room.localParticipant;
      localParticipant.audioTracks.forEach(function (audioTracks) {
        audioTracks.track.enable();
      });
    } else {
      setMuteAudioButton(true);
      var localParticipant = room.localParticipant;
      localParticipant.audioTracks.forEach(function (audioTracks) {
        audioTracks.track.disable();
      });
    }
  };

  const muteAudio = (participant) => {
    participant['audio_mute'] = !participant['audio_mute'];
    let new_participants = participants.map((p) =>
      p.sid === participant.sid ? (p = participant) : p
    );
    setParticipants(new_participants);
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
          {participant.videoTracks ? (
            <PrivateParticipant
              //   onClick={() => view !== 'Grid' && swaping(participant, i)}
              room={room}
              screenShare={screenShare}
              key={participant.sid}
              participant={participant}
              pinParticipant={pinParticipant}
              classes={classes}
              //   muteVideo={
              //     participant && participant.sid === room.localParticipant.sid
              //       ? muteLocalVideo
              //       : () => {}
              //   }
              muteAudio={muteAudio}
              mute_all_audio={mute_all_audio}
            ></PrivateParticipant>
          ) : (
            <Loader type="Bars" color={'#fff'} height={30} width={30} />
          )}
        </Box>
      )
    );
  });
  console.log(room,participants, 'private room');
  const renderView = () => {
    return (
      <Box className={classes.gridView}>
        <Box
          id={gridWrapperClass ? 'gridContainer' : ''}
          className={classes.gridContainer}
        >
          <Box className={classes.remoteParticipantsGridWrapper}>
            {room && (
              <PrivateParticipant
                room={room}
                classes={classes}
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
                // muteVideo={
                //   !pinParticipant ||
                //   pinParticipant.sid === room.localParticipant.sid
                //     ? muteLocalVideo
                //     : () => {}
                // }
                muteAudio={
                  !pinParticipant ||
                  pinParticipant.sid === room.localParticipant.sid
                    ? muteLocalAudio
                    : muteAudio
                }
                isLocal={
                  !pinParticipant ||
                  pinParticipant.sid === room.localParticipant.sid
                }
              ></PrivateParticipant>
            )}
          </Box>
          {remoteParticipants}
        </Box>
      </Box>
    );
  };

  // *******************
  return (
    <Grid container>
      <Grid item xs={12}>
        {renderView()}
      </Grid>
    </Grid>
    // *******************
  );
};

export default withRouter(PrivateRoom);
