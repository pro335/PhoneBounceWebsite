import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import {toast} from 'react-toastify';

export default function ChatInput(props) {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message) {
      // Get the LocalDataTrack that we published to the room.
      const [localDataTrackPublication] = props.room &&
        props.room.localParticipant && [
          ...Array.from(props.room.localParticipant.dataTracks.values()),
        ];
      console.log(props.participant ? props.participant.sid : 'All', 'sended');
      // Construct a message to send
      const fullMessage = {
        Event: `client-message`,
        Participant: props.participant ? props.participant.sid : 'All',
        RoomName: props.roomName ? '' : '',
        Message: `${
          props.room.localParticipant.identity.split('_')[0]
        }: ${message}`,
      };

      // Stringfying
      let convertToString = JSON.stringify(fullMessage);

      console.log(convertToString);
      // Send the message
      localDataTrackPublication &&
        localDataTrackPublication.track.send(convertToString);
      // Render the message locally so the local participant can see that their message was sent.

      let participantColor = null;
      if (props.room) {
        participantColor =
          '#' +
          props.room.localParticipant.identity.substr(
            props.room.localParticipant.identity.length - 6
          );
      }
      props.toAll &&
        toast.info(
          <div
            style={{
              background: participantColor,
              minHeight: '64px',
              padding: '3px 5px',
              wordBreak: 'break-word',
            }}
          >
            {fullMessage.Message}
          </div>,
          {autoClose: 15000}
        );

      // auto focus
      document.getElementById('chat-snack-input').focus();
      //Reset the text field
      // props.setIsOpen && props.setIsOpen(true);
      setMessage('');
    }
  };

  return (
    <form
      autoComplete="off"
      style={{display: 'flex', alignItems: 'center', zIndex: 9999999}}
      onSubmit={handleSubmit}
    >
      <FormControl color="secondary">
        <label
          htmlFor="chat-snack-input"
          style={{color: 'black', zIndex: 9999999}}
        >
          Say something:
        </label>
        <TextField
          value={message}
          autoFocus={true}
          onChange={handleChange}
          id="chat-snack-input"
          size="small"
        />
      </FormControl>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={handleSubmit}
        style={{marginLeft: '0.8em', zIndex: 9999999}}
      >
        Send
      </Button>
    </form>
  );
}
