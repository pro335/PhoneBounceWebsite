import React, {useState, useEffect} from 'react';
import {Container, Box} from '@material-ui/core';

import {ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import Themes from './themes';
// import {SnackbarProvider} from 'notistack';
import Loader from 'react-loader-spinner';
import CreateRoomFormSection from './CreateRoomFormSection';
import Contact from './Contact';
import Sliders from './Sliders';
import WelcomeSection from './WelcomeSection';
import Room from './Room';
import NewHeader from '../../components/NewHeader';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './styles';
import {InvitedParticipantName, RegisterUser} from './Models';
import queryString from 'query-string';
import axios from 'axios';
import {findPhoneNumbersInText} from 'libphonenumber-js';
import {encode, decode} from 'js-base64';
import './global.css';
import PrivateRoom from './PrivateRoom';
import {isMobileOnly} from 'react-device-detect';
export default function RoomMeeting(props) {
  const classes = useStyles();
  const [createRoomForm, setCreateRoomForm] = useState({
    room: '',
    name: '',
    pin: '',
    alert: '',
  });

  const [contactForm, setContactForm] = useState({
    contactName: '',
    contactEmail: '',
    contactMessage: '',
  });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [privateToken, setPrivateToken] = useState(null);
  const [invited_p_name_open, set_invited_p_name_open] = useState(false);
  let parsedData = queryString.parse(props.history.location.search);
  const [country, setCountry] = useState('');
  const [trueRoomName, setTrueRoomName] = useState(null);
  const [truePrivateRoomName, setTruePrivateRoomName] = useState('');
  const [countries, setCountries] = useState([]);
  const [geoData, setGeoData] = useState({});
  const [parentStatePrivateRoom, setParentStatePrivateRoom] = useState(null);
  const [
    parentStatePrivateParticipants,
    setParentStatePrivateParticipants,
  ] = useState([]);
  const [open, setOpen] = React.useState(window.innerWidth > 600);
  const [roomInfo, setRoomInfo] = useState({});
  const [mutePrivateAudioButton, setMutePrivateAudioButton] = useState(false);
  const [end_private_room_also, set_end_private_room_also] = useState(false);
  const [privateRoomLoadingState, setPrivateRoomLoadingState] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [passcode, setPassCode] = useState('');
  const [openRegisterModel, setOpenRegisterModel] = useState(false);
  const [currentRoomNumer, setCurrentRoomNumer] = useState(null);
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);
  useEffect(() => {
    let decoded;
    if (parsedData.roomName) {
    } else {
      decoded = decode(props.history.location.search);
      parsedData = queryString.parse(decoded);
    }
    if (parsedData.roomName) {
      setCreateRoomForm((a) => {
        return {
          ...a,
          room: parsedData.roomName,
          pin: parsedData.pin,
        };
      });
      set_invited_p_name_open(true);
    }
    // document.querySelector('[type=tel]').addEventListener('change', (e) =>
    //   setCreateRoomForm((c) => {
    //     return {
    //       ...c,
    //       room: e.target.value,
    //     };
    //   })
    // );
  }, []);

  useEffect(() => {
    getGeoInfo();
  }, []);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    var url =
      'https://api.phonebounce.com/api/V1/PhoneBounceNumbers/Countries/false/true/false';
    await axios(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      let newArr = [];
      res.data[0].Data.map((country) => {
        newArr.push(country.CountryISO.toLowerCase());
        setCountries(newArr);
        return country;
      });
    });
  };

  const getGeoInfo = () => {
    fetch(`https:////api.ipify.org?format=json`, {
      method: 'GET',
    })
      .then(function (response) {
        response.json().then((jsonData) => {
          fetch(
            `https://api.ipstack.com/${jsonData.ip}?access_key=df6892d9e5d70f474d9c8f6e5de0f75e`
          )
            .then(function (res) {
              res.json().then((geo_data) => {
                let data = geo_data;
                setGeoData(data);
                // onChangePhone(data.country_calling_code);
                setCountry(data.country_code.toLowerCase());
                // data.location.calling_code
                setCreateRoomForm({
                  ...createRoomForm,
                  room: '+' + data.location.calling_code,
                });
                
                // fieldInput.focus().val('').blur().focus().val(tmp);
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = (event) => {
    console.log(event, 'called');
    // if (event.target.name === 'pin' && createRoomForm.pin.length !== 4) {
    setCreateRoomForm({
      ...createRoomForm,
      [event.target.name]: event.target.value,
      alert: '',
    });
    // }
  };

  const onChangePasscode = (event) => {
    setPassCode(event.target.value);
  };

  const onChangePhone = (event) => {
    setCreateRoomForm({
      ...createRoomForm,
      room: event,
      alert: '',
    });
  };

  const onChangeContactInput = (event) => {
    setContactForm({
      ...contactForm,
      [event.target.name]: event.target.value,
    });
  };

  const {name, room, pin} = createRoomForm;
  const onSubmitCreateRoom = async (event) => {
    event.preventDefault();
    set_invited_p_name_open(false);

    let room_val = room;
    let phoneNumber = findPhoneNumbersInText(
      `${room_val} phone number`,
      country.toUpperCase()
    );

    room_val = phoneNumber && phoneNumber[0] && phoneNumber[0].number.number;
    room_val = room_val && room_val[0] === '+' ? room_val.slice(1) : room_val;
    let dec = decode(props.history.location.search);
    let pData = queryString.parse(dec);
    console.log(room_val, pData, phoneNumber, country, 'phoneNumber');
    let roomName = pData.roomName ? pData.roomName : room_val ? room_val : room;
    let roomCreator = name;
    let roomPin = pin.toString();

    setLoading(true);
    if (roomCreator !== '' && roomName !== null) {
      let participant_name = roomCreator + '_' + Math.floor(Date.now() / 1000);
      const url = `https://api.phonebounce.com/api/V1/PhoneBounceAccount/AccessVideo/${roomName}/${participant_name}/${
        geoData.longitude ? geoData.longitude : '0.00000'
      }/${
        geoData.latitude ? geoData.latitude : '0.00000'
      }/${isRecording}/${isMobileOnly}/${roomPin}`;
      console.log(isMobileOnly, 'isMobileOnly');
      await axios(url, {
        method: 'POST',
        body: JSON.stringify({
          roomName,
          participant_name,
          roomPin,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => {
          if (data.data[0].Result === 'success') {
            setCurrentRoomNumer(roomName);
            if (data.data[0].Data.IsNewUser) {
              setRoomInfo(data.data[0].Data);
              setLoading(false);
              set_invited_p_name_open(false);
              setOpenRegisterModel(true);
            } else {
              setLoading(false);
              set_invited_p_name_open(false);
              toast.success('Successfully joined room');
              setToken(data.data[0].Data.tokenjwt);

              setCreateRoomForm({...createRoomForm, room: '+' + roomName});
              let url_ = `roomName=${roomName}&invitedBy=${participant_name}&pin=${roomPin}`;
              props.history.push({
                pathname: '/meeting-room',
                search: `?${encode(url_)}`,
              });
              setRoomInfo(data.data[0].Data);
              setTrueRoomName(data.data[0].Data.RoomName);
            }
          } else {
            setLoading(false);
            set_invited_p_name_open(false);
            toast.error(data.data[0].Message);
          }
        })
        .catch((err) => {
          setLoading(false);
          queryString.parse(decode(props.history.location.search)).roomName &&
            set_invited_p_name_open(true);
          toast.error('Some thing is Wrong With Your Network Connection!');
        });
    } else {
      toast.info(
        'Please enter your mobile number, name and pin number (optional)'
      );
      setLoading(false);
      setCreateRoomForm({
        ...createRoomForm,
        alert: 'error',
      });
    }
  };

  const registerSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setOpenRegisterModel(false);

    let newUserUrl = `https://api.PhoneBounce.com/api/V1/PhoneBounceAccount/RegistrationVerification/${currentRoomNumer}/${passcode}`;
    await axios(newUserUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        if (data.data[0].Result === 'success') {
          setLoading(false);
          toast.success(data.data[0].Message);
          setOpenRegisterModel(false);

          setCreateRoomForm({...createRoomForm, room: '+' + currentRoomNumer});
        } else {
          setLoading(false);
          setOpenRegisterModel(true);
          toast.error(data.data[0].Message);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error('Some thing is Wrong With Your Network Connection!');
        setOpenRegisterModel(true);
      });
  };

  const resendPasscode = async () => {
    setLoading(true);
    setOpenRegisterModel(false);
    let myIp = geoData.ip.replaceAll('.', '');
    let newUserUrl = `https://api.PhoneBounce.com/api/V1/PhoneBounceAccount/ResendCode//${currentRoomNumer}/${myIp}`;
    await axios(newUserUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        if (data.data[0].Result === 'success') {
          toast.success(data.data[0].Message);
          setLoading(false);
          // setOpenRegisterModel(false);
          setCreateRoomForm({...createRoomForm, room: '+' + currentRoomNumer});
        } else {
          setLoading(false);
          setOpenRegisterModel(true);
          toast.success(data.data[0].Message);
        }
      })
      .catch((err) => {
        console.log('room creat failed', err);
        setLoading(false);
        toast.error('Some thing is Wrong With Your Network Connection!');
        setOpenRegisterModel(true);
      });
  };

  const submitPrivateRoom = async (
    event,
    participant,
    room,
    room_name,
    private_pin
  ) => {
    event && event.preventDefault();
    setPrivateRoomLoadingState(true);
    let roomname = room_name
      ? room_name
      : trueRoomName + '_' + Math.floor(Date.now() / 1000);
    setPrivateToken(() => token);
    setTruePrivateRoomName(() => roomname);
    console.log(roomname, 'roomname from root file');

    if (!room_name) {
      const [localDataTrackPublication] = room &&
        room.localParticipant.dataTracks && [
          ...Array.from(room.localParticipant.dataTracks.values()),
        ];
      // Construct a message to send
      const fullMessage = {
        Event: `client-private-start`,
        From: room && room.localParticipant.sid,
        Participant: participant ? participant.sid : 'All',
        RoomName: roomname ? roomname : '',
        Message: 'Private audio chat is started',
        Pin: '',
      };

      // Stringfying
      let convertToString = JSON.stringify(fullMessage);
      // Send the message
      localDataTrackPublication &&
        localDataTrackPublication.track.send(convertToString);
    }
  };

  const renderConditionally = () => {
    if (loading) {
      return (
        <Container>
          <Box
            display="flex"
            mb={5}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{height: 'calc(100vh - 60px)'}}
          >
            <Loader type="Bars" color={'#f50057'} height={100} width={100} />
          </Box>
        </Container>
      );
    } else if (token && trueRoomName !== null) {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
      {
        console.log(trueRoomName, 'trueRoomName');
      }
      return (
        <>
          <Room
            classes={classes}
            roomName={trueRoomName}
            // roomName={"RM923115416143_923115416143_1234"}
            parentStatePrivateRoom={parentStatePrivateRoom}
            token={token}
            submitPrivateRoom={submitPrivateRoom}
            endPrivateCall={endPrivateCall}
            mutePrivateAll={mutePrivateAll}
            mutePrivateAudioButton={mutePrivateAudioButton}
            countries={countries}
            country={country}
            roomInfo={roomInfo}
            setToken={setToken}
            privateToken={privateToken}
            privateRoomLoadingState={privateRoomLoadingState}
            pinNumber={
              queryString.parse(decode(props.history.location.search)).pin
            }
            setCountry={setCountry}
            open={open}
            setOpen={setOpen}
          />
          {privateToken && truePrivateRoomName !== null && (
            <PrivateRoom
              classes={classes}
              setPrivateRoomLoadingState={setPrivateRoomLoadingState}
              roomName={truePrivateRoomName}
              setParentStatePrivateRoom={setParentStatePrivateRoom}
              participants={parentStatePrivateParticipants}
              setParticipants={setParentStatePrivateParticipants}
              room={parentStatePrivateRoom}
              token={privateToken}
              countries={countries}
              endPrivateCall={endPrivateCall}
              country={country}
              end_private_room_also={end_private_room_also}
              set_end_private_room_also={set_end_private_room_also}
              setToken={setPrivateToken}
              setParentStatePrivateRoom={setParentStatePrivateRoom}
              pinNumber={
                queryString.parse(decode(props.history.location.search)).pin
              }
              setCountry={setCountry}
            />
          )}
        </>
      );
    } else if (!token) {
      return (
        <CreateRoomFormSection
          createRoomForm={createRoomForm}
          countries={countries}
          classes={classes}
          onChangePhone={onChangePhone}
          onChange={onChange}
          onSubmitCreateRoom={onSubmitCreateRoom}
          country={country}
          setCountry={setCountry}
          setIsRecording={setIsRecording}
          isRecording={isRecording}
        />
      );
    }
  };

  const mutePrivateAll = () => {
    mutePrivateLocalAudio();
    let private_participants = parentStatePrivateParticipants;
    for (let i = 0; i < private_participants.length; i++) {
      if (private_participants[i].audio_mute) {
        private_participants[i] &&
          private_participants[i].audioTracks.forEach(function (audioTracks) {
            audioTracks.track && audioTracks.track.attach();
          });
      } else {
        private_participants[i] &&
          private_participants[i].audioTracks.forEach(function (audioTracks) {
            audioTracks.track && audioTracks.track.detach();
          });
      }
      private_participants[i].audio_mute = !private_participants[i].audio_mute;
    }
    setParentStatePrivateParticipants(private_participants);
  };

  const mutePrivateLocalAudio = () => {
    if (mutePrivateAudioButton) {
      setMutePrivateAudioButton(false);
      let localParticipant =
        parentStatePrivateRoom && parentStatePrivateRoom.localParticipant;
      localParticipant &&
        localParticipant.audioTracks.forEach(function (audioTracks) {
          audioTracks.track.enable();
        });
    } else {
      setMutePrivateAudioButton(true);
      var localParticipant =
        parentStatePrivateRoom && parentStatePrivateRoom.localParticipant;
      localParticipant &&
        localParticipant.audioTracks.forEach(function (audioTracks) {
          audioTracks.track.disable();
        });
    }
  };

  const endPrivateCall = async (
    participant,
    room,
    privateRoom,
    end_private_room_also
  ) => {
    if (!participant && privateRoom) {
      privateRoom.localParticipant.audioTracks.forEach(function (audioTracks) {
        audioTracks.track.disable();
      });
      const url =
        'https://api.PhoneBounce.com/api/V1/PhoneBounceAccount/CompletePrivateRoom/' +
        privateRoom.sid;
      await axios(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((data) => {
        console.log('Private Room is ended');
      });
    }
    privateRoom && privateRoom.disconnect();
    participant && sendMessage(participant, room);
    privateRoom &&
      setParentStatePrivateRoom((currentRoom) => {
        currentRoom.disconnect();
        console.log('important - client disconnected');
        currentRoom.localParticipant.tracks.forEach(function (
          trackPublication
        ) {
          trackPublication.track.stop();
          console.log('important - client stopped');
          trackPublication.unpublish();
          console.log('important - client unpublished');
          trackPublication.track.mediaStreamTrack.stop();
          console.log('important - client stopped mediaStreamTrack');
        });
        return currentRoom;
      });
    if (end_private_room_also) {
      setPrivateToken(() => null);
      setParentStatePrivateRoom(() => null);
    } else {
      set_end_private_room_also(true);
    }
  };

  const sendMessage = (participant, room) => {
    const [localDataTrackPublication] = room &&
      room.localParticipant.dataTracks && [
        ...Array.from(room.localParticipant.dataTracks.values()),
      ];
    // Construct a message to send
    const fullMessage = {
      Event: `client-private-end`,
      From: room && room.localParticipant.sid,
      Participant: participant ? participant.sid : 'All',
      RoomName: '',
      Message: 'Private audio is switched off',
    };

    // Stringfying
    let convertToString = JSON.stringify(fullMessage);
    // Send the message
    localDataTrackPublication &&
      localDataTrackPublication.track.send(convertToString);
  };

  console.log(parentStatePrivateRoom, 'parentStatePrivateRoom');
  return (
    <Box className={classes.wrapper_all}>
      <NewHeader />
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <ToastContainer position={'bottom-left'} />
        {/* Hero Section */}
        <Box className={classes.room_wrap}>
          {renderConditionally()}

          {/* Well Come To Room Content */}
          <Box
            className={classes.welcomeToRoomContent}
            style={{marginRight: open === 'closed' && 0}}
          >
            <Box className={classes.outerWrapper}>
              <Container className={classes.innerWrapper}>
                <WelcomeSection />
              </Container>
            </Box>

            {/* Contact us Form JSX */}
            <Box className={classes.outerWrapper}>
              <Container className={classes.innerWrapper}>
                <Contact
                  contactForm={contactForm}
                  classes={classes}
                  onChangeContactInput={onChangeContactInput}
                />
              </Container>
            </Box>

            {/* Sliders JSX */}
            <Box className={classes.outerWrapper}>
              <Container className={classes.innerWrapper}>
                <Sliders classes={classes} />
              </Container>
            </Box>
          </Box>

          {/* InvitedParticipantName Model */}
          <InvitedParticipantName
            open={invited_p_name_open}
            onChange={onChange}
            onSubmit={onSubmitCreateRoom}
            invited_p_name={createRoomForm.name.split('_')[0]}
            classes={classes}
            invitedBy={
              queryString.parse(decode(props.history.location.search)).invitedBy
            }
          />

          {/* Register Model */}
          <RegisterUser
            passcode={passcode}
            open={openRegisterModel}
            onChange={onChangePasscode}
            onSubmit={registerSubmit}
            resendPasscode={resendPasscode}
            classes={classes}
            roomInfo={roomInfo}
            setOpenRegisterModel={setOpenRegisterModel}
          />
        </Box>
      </ThemeProvider>
    </Box>
  );
}
