import React, {useState, useEffect, useRef} from 'react';

import {Box, Typography} from '@material-ui/core';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
const PrivateParticipant = ({
  participant,
  classes,
  room,
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
}) => {
  const [audioTracks, setAudioTracks] = useState([]);

  const audioRef = useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setAudioTracks(trackpubsToTracks(participant.audioTracks));
    const trackSubscribed = (track) => {
      if (track.kind === 'audio') {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === 'audio') {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    return () => {
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant, isThumb, room, screenShare, pinParticipant]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks, screenShare, pinParticipant]);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      // className={classes.localVideoInnerWrapper}
    >
      <audio
        ref={audioRef}
        autoPlay={true}
        muted={participant.audio_mute ? participant.audio_mute : false}
        className={classes.video}
      />
      {/* {participant.identity} */}
      {/* <Box component="span" m={1} /> */}
      {/* <i
      style={{fontSize:'20px',color:'#fff'}}
        className={
          isLocal
            ? muteAudioButton
              ? 'fas fa-microphone-slash'
              : 'fas fa-microphone'
            : participant.audio_mute
            ? 'fas fa-microphone-slash'
            : 'fas fa-microphone'
        }
        onClick={() => muteAudio(participant)}
      >
        {isLocal ? (
                muteAudioButton ? (
                  <MicOffIcon />
                ) : (
                  <MicIcon />
                )
              ) : participant.audio_mute ? (
                <MicOffIcon />
              ) : (
        <MicIcon />
        )}
      </i> */}
    </Box>
  );
};

export default PrivateParticipant;
