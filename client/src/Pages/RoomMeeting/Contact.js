import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  Button,
  TextField,
  Link,
  TextareaAutosize,
  InputAdornment,
} from '@material-ui/core';

import {useTheme} from '@material-ui/core/styles';

import SocialIcon from '../../components/Footer/socialIcon'

const Contact = (props) => {
  const {classes, contactForm, onChangeContactInput} = props;

  const theme = useTheme();
  const {contactName, contactEmail, contactMessage} = contactForm;
  return (
    <Container maxWidth={'md'}>
      <Grid container justify={'center'} alignItems="center">
        <Grid item xs={12}>
          <Box my={3} mb={5} pb={2} textAlign="left">
            <Typography variant={'h2'}>Contact us</Typography>
            <Typography variant="subtitle1">
              We would love to hear from you. If you have suggestions, feedback
              or just wish to know more please contact us.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          display="flex"
          justify="space-between"
        >
          <Box
            display="flex"
            alignItems="center"
            className={classes.formBoxOuterWrapper}
          >
            <Box>
              <img
                src="/assets/fonts/svg/phone.svg"
                alt="PhoneBounce"
                className={classes.formBoxMainImage}
              />
            </Box>

            <Box component="span" className={classes.boxDecorate} />
            <Box>
              <List>
                <ListItem>
                  <Box display="flex" alignItems="center">
                    <img
                      src="/assets/images/meeting-room/US.png"
                      className={classes.formFlag}
                      alt="phone"
                    />
                    <Typography variant="subtitle2">(650) 446-6617</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display="flex" alignItems="center">
                    <img
                      src="/assets/images/meeting-room/GB.png"
                      alt="phone"
                      className={classes.formFlag}
                    />
                    <Typography variant="subtitle2">330 808 0886</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display="flex" alignItems="center">
                    <img
                      src="/assets/images/meeting-room/BR.png"
                      className={classes.formFlag}
                      alt="phone"
                    />
                    <Typography variant="subtitle2">11 3181 9849</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display="flex" alignItems="center">
                    <img
                      src="/assets/images/meeting-room/AU.png"
                      className={classes.formFlag}
                      alt="phone"
                    />
                    <Typography variant="subtitle2">(02) 9157 7017</Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          container
          display="flex"
          justify="space-between"
        >
          <Box
            display="flex"
            alignItems="center"
            className={classes.formBoxOuterWrapper}
          >
            <Box>
              <img
                src="/assets/fonts/svg/email.svg"
                className={classes.formBoxMainImage}
                alt="PhoneBounce"
              />
            </Box>
            <Box component="span" className={classes.boxDecorate} />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <List>
                <ListItem>
                  <Link
                    href="mailto:Support@PhoneBounce.com"
                    color="secondary"
                    className={classes.contactFormLinks}
                  >
                    Support@PhoneBounce.com
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="mailto:Enquiries@PhoneBounce.com"
                    color="secondary"
                    className={classes.contactFormLinks}
                  >
                    Enquiries@PhoneBounce.com
                  </Link>
                </ListItem>
                <ListItem>
                  <Box
                    display="flex"
                    justifyContent="center"
                    gridGap="10px"
                    mt={3}
                  >
                  <SocialIcon />
                    {/* <Link
                      className={classes.contactFormLinks}
                      target="_blank"
                      href="https://www.facebook.com/PhoneBounce/"
                    >
                      <i
                        className={`
                           ${classes.contactIcon}`}
                      >
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link
                      className={classes.contactFormLinks}
                      target="_blank"
                      href="https://twitter.com/phonebounce"
                    >
                      <i className={` ${classes.contactIcon}`}>
                        <FaTwitter />
                      </i>
                    </Link>
                    <Link
                      className={classes.contactFormLinks}
                      target="_blank"
                      href="https://instagram.com/phonebounce"
                    >
                      <i className={` ${classes.contactIcon}`}>
                        <FaInstagram />
                      </i>
                    </Link>
                    <Link
                      className={classes.contactFormLinks}
                      target="_blank"
                      href="https://www.linkedin.com/company/22319610/"
                    >
                      <i className={` ${classes.contactIcon}`}>
                        <FaLinkedin />
                      </i>
                    </Link>
                    <Link
                      className={classes.contactFormLinks}
                      target="_blank"
                      href="https://vimeo.com/phonebounce"
                    >
                      <i className={`${classes.contactIcon}`}>
                        <FaVimeo />
                      </i>
                    </Link> */}
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} item>
          <form>
            <Box my={3}>
              <TextField
                onChange={(value) => onChangeContactInput(value)}
                className={classes.contactInput}
                variant="outlined"
                value={contactName}
                name="contactName"
                placeholder="Name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-user-tie"></i>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box my={2}>
              <TextField
                onChange={(value) => onChangeContactInput(value)}
                className={classes.contactInput}
                variant="outlined"
                value={contactEmail}
                name="contactEmail"
                placeholder="Email Address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-envelope"></i>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box my={2} className={classes.contactTextAreaBox}>
              <TextareaAutosize
                onChange={(value) => onChangeContactInput(value)}
                className={classes.contactTextArea}
                variant="outlined"
                value={contactMessage}
                name="contactMessage"
                aria-label="minimum height"
                rowsMin={5}
                placeholder="Message..."
              />
            </Box>

            <Box my={2}>
              <Button type="submit" className={classes.phoneBounceButton}>
                Message Submitted!
              </Button>
              <Box component="span" m={1} />
              <Button
                type="button"
                color="secondary"
                style={{
                  background: '#fff',
                  color: theme.palette.secondary.main,
                }}
                className={classes.phoneBounceButton}
              >
                Reset
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
