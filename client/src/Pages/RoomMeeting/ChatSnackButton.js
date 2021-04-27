import React, { useState } from 'react';

import ChatIcon from '@material-ui/icons/CommentOutlined';
import Tooltip from '@material-ui/core/Tooltip';

import ChatInput from './ChatInput';
import { Button, ClickAwayListener, withStyles } from '@material-ui/core';

const LightTooltip = withStyles({
  tooltip: {
    backgroundColor: 'white',
  },
  arrow: {
    color: 'white',
  },
})(Tooltip);

export default function ChatSnackButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <LightTooltip title={<ChatInput room={props.room} dataTrack={props.dataTrack}/>} interactive placement="top" arrow={true} open={isOpen}>
        <Button onClick={() => setIsOpen(isOpen => !isOpen)} color="secondary" startIcon={<ChatIcon />} style={{color:'#fff'}}>
          Snack Chat
        </Button>
      </LightTooltip>
    </ClickAwayListener>
  );
}