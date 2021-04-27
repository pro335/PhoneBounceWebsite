import React from 'react';
import {Container, Typography, Box, Grid} from '@material-ui/core';

const WelcomeSection = (props) => {
  return (
    <Container maxWidth={'md'}>
      <Grid container justify={'center'} alignItems="center">
        <Grid item xs={12}>
          <Box my={3} mb={5} pb={2} textAlign="center">
            <Typography variant={'h2'}>Welcome to Meeting Rooms</Typography>
            <Typography>
              Meeting rooms allow you to join video meetings with friends and
              family around the world.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box>
            <Box mb={2}>
              <Typography variant="h4">Instant Rooms</Typography>
            </Box>
            <Typography variant="subtitle2">
              From 2 - 10 people these are encrypted and fully secure. Simply
              enter your mobile number as the room name. Your name so people can
              see who they are talking to and optionaly a pin to stop others
              joining.
              <br /> This type of room is free.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box>
            <Box mb={2}>
              <Typography variant="h4">Pre Booked Rooms.</Typography>
            </Box>
            <Typography variant="subtitle2">
              From 2 - 50 people (Video and Voice). Organised through the
              PhoneBounce app These type of rooms allow you to define the number
              of people and if you wish to record the meeting. They offers a
              higher quality of service, are always private and costs start at
              1p per person per minute.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box my={4}>
            <Box mb={2}>
              <Typography variant="h4">Screen Sharing</Typography>
            </Box>
            <Typography variant="subtitle2">
              When connected through the desktop you are able to share your
              screen with the group. Show documents, other windows and work in a
              collaberative fashion. Using the latest Chrome or Firefox browsers
              there is no need to download any extensions or plugins.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box my={4}>
            <Box mb={2}>
              <Typography variant="h4">
                Live Transcription (Coming Soon)
              </Typography>
            </Box>
            <Typography variant="subtitle2">
              Provide subtitles for your conversation in real time. Need them in
              another language? Simply set the desired language and we will
              translate in real time. Costs start at 3p per minute. Turn on and
              off instantly. This option is only available on group rooms.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomeSection;
