import React, {useState, useEffect} from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
  Link,
  Grid,
  Divider,
  List,
  ListItem,
  Container,
} from '@material-ui/core';
import axios from 'axios';
import classNames from 'classnames';
import 'react-phone-input-2/lib/style.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {Room} from 'twilio-video';

const CreateRoomFormSection = (props) => {
  const {
    classes,
    createRoomForm,
    onChange,
    onChangePhone,
    onSubmitCreateRoom,
    country,
    setCountry,
    countries,
    setIsRecording,
    isRecording,
  } = props;

  const {alert, name, room, pin} = createRoomForm;
  useEffect(() => {
    let fieldInput = document.querySelector('#roomField');
    if (fieldInput) {
      let len = room.length;
      fieldInput.focus();
      fieldInput.setSelectionRange(len, len);
    }
  },[room]);

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.homeHeroSection}
      ></Box>
      <Grid
        container
        className={classes.homeHeroSectionWrapper}
        spacing={5}
        justify="center"
      >
        <Grid item sm={12} md={6}>
          <Box className={classes.headContentWrapper}>
            <Typography variant="h1">Meeting Rooms</Typography>
            <Box className={classes.headIconList}>
              <List>
                <ListItem>
                  <Typography variant="subtitle1">
                    <CheckCircleIcon className="icon-primary" /> Instant room up
                    to 50 people
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    <CheckCircleIcon className="icon-primary" /> Record your
                    Meetings
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    <CheckCircleIcon className="icon-primary" /> Phone and Video
                    participants
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    <CheckCircleIcon className="icon-primary" /> Share your
                    screen
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Divider className={classes.divider} />
            <Box my={3}>
              <Typography>
                To use Meetings you must be verified member of PhoneBounce
              </Typography>
              <br></br>
              <Typography>
                Enter your number and we will send you a passcode to verify
              </Typography>
              <br></br>
              <Typography>
                Download the app for other great features. Free on Android and
                IOS.
              </Typography>
            </Box>

            <Box display="flex" gridGap="5px" justifyContent="center" my={3}>
              <a
                href="https://play.google.com/store/apps/details?id=com.phonebounce"
                target="_blank"
              >
                <img
                  src="/assets/images/header/play-store.png"
                  className={classes.appStoreLogo}
                  alt="android app link"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/phonebounce/id1468937598"
                target="_blank"
              >
                <img
                  src="/assets/images/header/app-store.png"
                  className={classes.appStoreLogo}
                  alt="apple app link"
                />
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box className={classes.formWrapper}>
            <img
              id="roomImg"
              src="assets/images/meeting-room/formLogo.png"
              alt="LOgo"
            />
            <form
              className={classes.createRoomForm}
              onSubmit={(e) => onSubmitCreateRoom(e, name, room, pin)}
            >
              <Typography
                className={classNames({
                  [classes.info]: alert === 'info',
                  [classes.error]: alert === 'error',
                  [classes.warning]: alert === 'warning',
                })}
              >
                Please enter your number, name and pin number (optional)
              </Typography>
              <Box my={2}>
                <Typography className={classes.createRoomFormInputLabel}>
                  Mobile Telephone Number
                </Typography>
                {/* <PhoneInput
                  country={country}
                  onlyCountries={countries}
                  specialLabel="Room"
                  enableSearch
                  autocompleteSearch
                  autoFormat
                  placeholder="0301 2345678"
                  // alwaysDefaultMask
                  value={room}
                  inputClassName={classes.phoneInput}
                  dropdownClassName={classes.phoneInput}
                  onChange={(phone) => onChangePhone(phone)}
                /> */}

                <IntlTelInput
                  defaultCountry={country}
                  onlyCountries={countries}
                  inputClassName={classes.phoneInput}
                  autoComplete={'on'}
                  style={{width: '100%'}}
                  value={room}
                  nationalMode={true}
                  autoHideDialCode
                  fieldName={'room'}
                  fieldId={'roomField'}
                  onPhoneNumberFocus={null}
                  onPhoneNumberChange={(ele, value) => onChangePhone(value)}
                  // autoFocus
                  onSelectFlag={(value, flag) => setCountry(flag.iso2)}
                />
              </Box>
              <Box my={2}>
                <TextField
                  className={classes.createRoomInput}
                  placeholder="John Doe"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(value) => onChange(value)}
                />
              </Box>
              <Box mt={2} mb={1}>
                <TextField
                  className={classes.createRoomInput}
                  placeholder="1234"
                  label="Pin"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 4);
                  }}
                  name="pin"
                  type="number"
                  value={pin}
                  onChange={(value) => onChange(value)}
                />
              </Box>
              <Box textAlign="left" pl={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isRecording}
                      className={classes.isRecordingCheckbox}
                      onChange={() => setIsRecording(!isRecording)}
                      name="recording"
                    />
                  }
                  label="Record your meeting"
                  className={classes.recordingCheckboxWrapper}
                />
              </Box>

              <Box mb={2}>
                <Button type="submit" className={classes.phoneBounceButton}>
                  Join Now
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateRoomFormSection;
