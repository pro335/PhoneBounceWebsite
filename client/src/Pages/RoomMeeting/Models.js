import React from 'react';
import Button from '@material-ui/core/Button';
import {TextField, Box, ClickAwayListener} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Typography} from '@material-ui/core';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
const EmailInvite = ({open, onClose, email, onSubmit, onChange, classes}) => {
  return (
    <Box
      // open={open}
      // onClose={() => onClose(false)}
      className={classNames({
        [classes.dailogWrapper]: true,
        [classes.openInviteModel]: open,
      })}
    >
      <Box className={classes.modelBody}>
        <form id="email_invite">
          <Box id="form-dialog-title" className={classes.modelTitle} mb={1}>
            <Typography color="secondary" variant="h6">
              Invite Via Email
            </Typography>
            <Box mt={1}>
              <Typography variant="subtitle1">
                Please Enter the Participant Email
              </Typography>
            </Box>
          </Box>
          <Box className={classes.modelContent}>
            <Box>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                value={email}
                onChange={onChange}
                fullWidth
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" gridGap="10px" pr={1}>
              <Button
                onClick={() => onClose(false)}
                color="primary"
                className={classes.phoneBounceButton}
                style={{width: '10em'}}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={onSubmit}
                color="primary"
                style={{width: '10em'}}
                className={classes.phoneBounceButton}
              >
                Send
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

const TelephoneInvite = ({
  open,
  onClose,
  email,
  onChange,
  onSubmit,
  classes,
  country,
  countries,
}) => {
  return (
    <Box
      className={classNames({
        [classes.dailogWrapper]: true,
        [classes.openInviteModel]: open,
      })}
    >
      <Box className={classes.modelBody}>
        <form>
          <Box id="form-dialog-title" className={classes.modelTitle} mb={1}>
            <Typography color="secondary" variant="h6">
              Invite Via Telephone
            </Typography>
            <Box mt={1}>
              <Typography variant="subtitle1">
                Please Enter the Participant Telephone
              </Typography>
            </Box>
          </Box>
          <Box className={classes.modelContent} mt={2} mb={1}>
            <PhoneInput
              country={country}
              onlyCountries={countries}
              specialLabel="Room"
              enableSearch
              autocompleteSearch
              autoFormat
              placeholder="0301 2345678"
              value={email}
              inputStyle={{minWidth: '100%'}}
              inputClassName={classes.phoneInput}
              dropdownClassName={classes.phoneInput}
              onChange={(phone, value) => onChange(phone, value)}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" gridGap="10px">
            <Button
              color="primary"
              onClick={() => onClose(false)}
              className={classes.phoneBounceButton}
              style={{width: '10em'}}
            >
              Cancel
            </Button>
            <Button
              onClick={onSubmit}
              color="primary"
              type="submit"
              className={classes.phoneBounceButton}
              style={{width: '10em'}}
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

const InvitedParticipantName = ({
  open,
  invitedBy,
  invited_p_name,
  onChange,
  onSubmit,
  classes,
}) => {
  let showValidation = false;
  return (
    <Dialog open={open} className={classes.dailog}>
      <Box className={classes.modelBody}>
        <Box id="form-dialog-title" className={classes.modelTitle}>
          <Typography color="secondary" variant="h6">
            You are invited by{' '}
            <span style={{textTransform: 'capitalize'}}>
              {invitedBy && invitedBy.split('_')[0]}
            </span>
          </Typography>
          <Box mt={1}>
            <Typography variant="subtitle1">
              Please Enter your Name (This will be visible to all)
            </Typography>
          </Box>
        </Box>
        <form>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Your Name"
              name="name"
              value={invited_p_name}
              onChange={(value) => onChange(value)}
              fullWidth
            />
            {showValidation && (
              <Typography color="secondary">
                {!invited_p_name && 'Please Enter your Name'}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={invited_p_name ? onSubmit : (showValidation = true)}
              color="primary"
              type="submit"
              className={classes.phoneBounceButton}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
};

const RegisterUser = ({
  open,
  passcode,
  roomInfo,
  onChange,
  onSubmit,
  resendPasscode,
  setOpenRegisterModel,
  classes,
}) => {
  let showValidation = false;
  console.log(roomInfo, 'roomInfo');
  return (
    <Dialog
      open={open}
      className={classes.dailog}
    >
      <Box style={{position: 'absolute', right: '10px', top: '3px'}}>
        <CloseIcon
          onClick={() => setOpenRegisterModel(false)}
          style={{
            cursor: 'pointer',
            fontSize: '23px',
            color: '#fff',
            background: '#e00653',
            borderRadius: '3px',
            padding: '5px',
          }}
        />
      </Box>
      <Box className={classes.modelBody}>
        <Box id="form-dialog-title" className={classes.modelTitle} mr={3}>
          <Typography color="secondary" variant="h6">
            {roomInfo.NewUserMessage}
          </Typography>
          {/* <Box mt={1}>
            <Typography variant="subtitle1">
              
            </Typography>
          </Box> */}
        </Box>
        <form>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Your Passcode"
              name="passcode"
              value={passcode}
              onChange={(value) => onChange(value)}
              fullWidth
            />
            {showValidation && (
              <Typography color="secondary">
                {!passcode && 'Please enter passcode'}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              onClick={resendPasscode}
              className={classes.phoneBounceButton}
              style={{minWidth: '10em'}}
            >
              Resend
            </Button>

            <Button
              onClick={passcode ? onSubmit : (showValidation = true)}
              color="primary"
              type="submit"
              className={classes.phoneBounceButton}
              style={{minWidth: '10em'}}
            >
              VERIFY
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
};

export {TelephoneInvite, EmailInvite, InvitedParticipantName, RegisterUser};
