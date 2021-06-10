import React from 'react';
import {Container, Typography, Box, Grid, Link,} from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import StarRateIcon from '@material-ui/icons/StarRate';
const Sliders = (props) => {
  const {classes} = props;
  return (
    <Container maxWidth={'md'}>
      <Grid container alignItems="center" justify="center">
        <Grid item sm={12} md={6} className={classes.carouselWrapper}>
          <Box
            display="flex"
            justifyContent="center"
            className={classes.slideWrapper}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.phonebounce"
              target="Android"
              className={classes.sliderImageLink}
            >
              <img
                src="/assets/images/meeting-room/android-app-icon.png"
                className={classes.sliderImage}
                alt="android-app-icon"
              />
            </Link>
          </Box>
          <AliceCarousel
            mouseTracking
            itemsToShow={1}
            autoPlay
            animationDuration={3000}
            infinite
            speed={200}
            disableButtonsControls
            disableDotsControls
            items={[
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5">Mike Ne-yo hay</Typography>
                <Box my={1}>
                  <Typography variant="h6">
                    I got many things from this app! its greatest app ever! I
                    have seen!! call and text is best! video its very nice
                    images and very good sound! every body need this app to call
                    every where around the world! and I think you can call to
                    another planet if you have friend there!!
                  </Typography>
                </Box>
              </Box>,
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5">Jessie Jeff</Typography>
                <Box my={1}>
                  <Typography variant="h6">
                    phone bounce is the best virtual phone number app, the
                    customer care is 100%, services are 100% and it works with
                    anything
                  </Typography>
                </Box>
              </Box>,
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5">Abdulrahman Saad</Typography>
                <Box my={1}>
                  <Typography variant="h6">wow it amazing.</Typography>
                </Box>
              </Box>,
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5">johnbosco chukwuemeka</Typography>
                <Box my={1}>
                  <Typography variant="h6">
                    This app is more than 5 star{' '}
                    
                    <StarRateIcon className="rating text-center " /> , For me i give it 800
                    star 
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> , this app is
                    fantastic,.{' '}
                  </Typography>
                </Box>
              </Box>,
            ]}
          />
        </Grid>
        <Grid item sm={12} md={6} className={classes.carouselWrapper}>
          <Box
            display="flex"
            justifyContent="center"
            className={classes.slideWrapper}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.phonebounce"
              target="Android"
              className={classes.sliderImageLink}
            >
              <img
                src="/assets/images/meeting-room/apple-app-icon.svg"
                className={classes.sliderImage}
                alt="android-app-icon"
              />
            </Link>
          </Box>
          <AliceCarousel
            controlsStrategy="responsive"
            mouseTracking
            itemsToShow={1}
            autoPlay
            animationDuration={2600}
            infinite
            speed={200}
            disableButtonsControls
            disableDotsControls
            items={[
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5">johnbosco chukwuemeka</Typography>
                <Box my={1}>
                  <Typography variant="h6">
                    This app is more than 5 star{' '}
                     
                    <StarRateIcon className="rating text-center " />, this app is
                    fantastic,. , For me i give it 800 star{' '}
                    
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> , this app is
                    fantastic,.
                     
                    <StarRateIcon className="rating text-center " />, this app is
                    fantastic,.
                  </Typography>
                </Box>
              </Box>,
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5"> Rob Lee</Typography>
                <Box my={1}>
                  <Typography variant="h6">
                    This application is a game changer have been waiting for
                    something like this for ages.
                  </Typography>
                </Box>
              </Box>,
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5"> Abdulrahman Saad</Typography>
                <Box my={1}>
                  <Typography variant="h6">wow it amazing.</Typography>
                </Box>
              </Box>,
              <Box className={classes.slide}>
                <Box display="flex" gridGap="5px">
                  <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                    <StarRateIcon className="rating text-center " /> 
                </Box>
                <Typography variant="h5">Jessie Jeff</Typography>
                <Box my={1}>
                  <Typography variant="h6">
                    phone bounce is the best virtual phone number app, the
                    customer care is 100%, services are 100% and it works with
                    anything
                  </Typography>
                </Box>
              </Box>,
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sliders;
