import React from 'react'
import GoToTop from './goToTop'
import SocialIcon from './socialIcon'
import { makeStyles } from '@material-ui/core/styles';
import FooterCallBack from './footerCallBack'
import { FaPhone } from 'react-icons/fa';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import {Box, Container, Grid, Modal, Button} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './index.css'
import { isMobile  } from "react-device-detect";


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
        minHeight:"calc(60vh - 60px)",
        display:'flex',
        flexDirection:'column',
        borderRadius:'15px',
        justifyContent:'center',
        backgroundColor: '#fff',   
        width:'auto',  
        boxShadow: theme.shadows[5],
      
    },
   
  }));




const Footer = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [phone, setPhone] = React.useState('');
    const [callMessage, setCallMessage] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const callHandler = (e) => {
        setCallMessage("")
        // let phoneNumber = phone;
        console.log("phone Number =>", phone)
        let url = `https://api.phonebounce.com/api/V1/PhoneBounceNumbers/Call/SAZJU0MWI5MTK3ZDC3YJ/16504466617/${phone}`
        // let urlPhone = url + phoneNumber
        axios.post(url, phone,{responseType: 'json'})
        .then(res=>{
          console.log("Data =>>" , res.data[0].Message)
          setCallMessage(res.data[0].Message)
        }) 
        .catch(error=>{
          console.log("Error => ", error.data[0].Message)
          setCallMessage(error.data[0].Message)
      });
        

      }
    return (
        <div>
            <Box className={isMobile ? "contact_services pt-5 px-2" : "contact_services pt-5 px-5" }>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                     <FooterCallBack svg={
                         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/phone.svg" alt="phone">
                         <title>phone</title>
                         <path fill="#5e686b" d="M27.063 5.162c-2.6-2.6-6.050-4.2-9.706-4.5-0.238-0.019-0.438 0.156-0.456 0.387s0.156 0.438 0.387 0.456c3.456 0.281 6.719 1.794 9.175 4.256 5.737 5.738 5.737 15.069 0 20.806s-15.069 5.738-20.806 0c-2.775-2.775-4.306-6.469-4.306-10.4s1.531-7.625 4.306-10.4c2.469-2.469 5.738-3.981 9.206-4.256 0.231-0.019 0.406-0.219 0.387-0.456-0.019-0.231-0.213-0.406-0.456-0.387-3.669 0.294-7.125 1.888-9.738 4.5-2.938 2.938-4.556 6.844-4.556 11s1.619 8.063 4.556 11c3.031 3.031 7.019 4.55 11 4.55s7.969-1.519 11-4.55c6.069-6.069 6.069-15.938 0.006-22.006z"></path>
                         <path id="svg-ico" fill="#ee5586" d="M17.563 16.262c-1.969 1.969-2.756 2.212-2.944 2.238l-0.113-0.113c-0.575-0.581-1.169-1.181-2.138-1.181-0.738 0-1.556 0.381-2.575 1.194-0.894 0.719-1.344 1.45-1.375 2.225-0.025 0.563 0.175 1.044 0.463 1.469-0.637 0.406-1.731 1.262-2.175 2.606-0.075 0.219 0.044 0.462 0.269 0.538 0.044 0.012 0.088 0.019 0.131 0.019 0.175 0 0.344-0.113 0.4-0.288 0.388-1.163 1.394-1.9 1.919-2.219 0.162 0.169 0.325 0.319 0.469 0.462l0.3 0.288c0.425 0.425 1.075 0.65 1.881 0.65 1.1 0 2.5-0.419 3.925-1.169 1.594-0.825 3.231-2.056 4.725-3.556 1.944-1.944 3.431-4.119 4.181-6.119 0.344-0.912 0.525-1.769 0.531-2.487 0.006-0.831-0.219-1.5-0.644-1.931-0.087-0.088-0.181-0.188-0.281-0.294-0.594-0.625-1.4-1.481-2.5-1.481-0.813 0-1.569 0.45-2.319 1.381-0.931 1.162-1.294 2.044-1.175 2.875 0.113 0.8 0.644 1.325 1.163 1.838l0.119 0.119c-0.012 0.1-0.094 0.35-0.363 0.762-0.369 0.569-1 1.306-1.875 2.175zM20.456 12.775l-0.181-0.181c-0.45-0.444-0.844-0.831-0.919-1.35-0.081-0.575 0.225-1.262 1-2.225 0.575-0.713 1.119-1.063 1.656-1.063 0.731 0 1.344 0.644 1.881 1.213 0.1 0.113 0.2 0.213 0.3 0.313 0.269 0.269 0.406 0.725 0.4 1.325-0.006 0.619-0.169 1.381-0.481 2.2-0.712 1.894-2.131 3.962-3.988 5.819-1.438 1.438-3 2.613-4.525 3.406-1.313 0.694-2.563 1.075-3.531 1.075-0.569 0-1.025-0.144-1.281-0.4l-0.313-0.3c-0.581-0.556-1.244-1.181-1.213-1.944 0.019-0.525 0.369-1.050 1.056-1.606 0.85-0.681 1.519-1.012 2.044-1.012 0.619 0 1.019 0.413 1.588 0.988 0.044 0.044 0.088 0.087 0.119 0.119 0.588 0.587 1.962-0.169 4.081-2.294 0.913-0.912 1.581-1.694 1.988-2.325 0.556-0.825 0.656-1.419 0.319-1.756z"></path>
                         </svg>
                     }
                     onClick={handleOpen}
                    //  to='/call-back'
                     title="Call Back" />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                        <FooterCallBack
                        svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/question.svg" alt="question">
                        <title>question</title>
                        <path id="svg-ico" fill="#ee5586" d="M16.113 25.962c-1.2 0-2.175-0.975-2.175-2.175s0.975-2.175 2.175-2.175 2.175 0.975 2.175 2.175-0.975 2.175-2.175 2.175zM16.113 22.488c-0.719 0-1.306 0.587-1.306 1.306s0.588 1.306 1.306 1.306c0.719 0 1.306-0.587 1.306-1.306-0.006-0.725-0.587-1.306-1.306-1.306z"></path>
                        <path fill="#5e686b" d="M16.106 31.594c-8.631 0-15.656-7.025-15.656-15.656s7.025-15.656 15.656-15.656c7.969 0 14.656 5.963 15.556 13.869 0.025 0.238-0.144 0.456-0.381 0.481-0.238 0.019-0.456-0.144-0.481-0.381-0.85-7.463-7.162-13.094-14.688-13.094-8.162-0.006-14.794 6.631-14.794 14.781s6.631 14.788 14.788 14.788c7.525 0 13.837-5.631 14.688-13.094 0.025-0.238 0.244-0.406 0.481-0.381s0.413 0.244 0.381 0.481c-0.894 7.9-7.581 13.863-15.55 13.863z"></path>
                        <path id="svg-ico" fill="#ee5586" d="M16.206 18.1c-0.238 0-0.438-0.194-0.438-0.438v-1.175c0-0.675 0.213-1.281 0.625-1.794 0.363-0.456 0.762-0.906 1.194-1.35 0.413-0.425 0.788-0.881 1.119-1.35 0.3-0.425 0.45-0.925 0.45-1.525 0-0.444-0.069-0.9-0.206-1.344-0.131-0.425-0.344-0.806-0.619-1.125s-0.65-0.581-1.119-0.787c-0.469-0.206-1.050-0.313-1.719-0.313-0.544 0-1.050 0.106-1.512 0.313s-0.869 0.494-1.2 0.863c-0.338 0.375-0.613 0.838-0.819 1.363-0.206 0.537-0.319 1.137-0.331 1.781-0.006 0.238-0.2 0.425-0.438 0.425 0 0-0.006 0-0.012 0-0.238-0.006-0.431-0.206-0.425-0.444 0.019-0.75 0.15-1.45 0.387-2.075 0.244-0.631 0.569-1.181 0.981-1.631 0.412-0.456 0.912-0.819 1.488-1.075 0.569-0.256 1.2-0.388 1.869-0.388 0.794 0 1.488 0.131 2.069 0.388s1.063 0.594 1.425 1.013c0.356 0.412 0.625 0.894 0.794 1.438 0.163 0.531 0.25 1.069 0.25 1.6 0 0.775-0.206 1.456-0.606 2.025-0.356 0.506-0.762 0.994-1.2 1.456-0.413 0.425-0.794 0.856-1.137 1.287-0.288 0.363-0.431 0.775-0.431 1.25v1.175c0 0.244-0.2 0.438-0.438 0.438z"></path>
                        </svg>}
                        to='/faq'
                        title="FAQ" />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                     <FooterCallBack
                     svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/blog.svg" alt="blog">
                     <title>blog</title>
                     <path fill="#5e686c" d="M21.175 31.563h-10.119c-0.019 0-0.037 0-0.056-0.006-5.888-0.063-10.488-4.669-10.488-10.506v-10.069c0-5.769 4.725-10.494 10.544-10.531h4.425c0.025-0.006 0.056-0.006 0.075-0.006 5.644 0.037 10.081 4.344 10.375 10.031 0.012 0.044 0.025 0.088 0.025 0.137 0 0.031 0 0.056-0.006 0.088 0.137 0.381 0.569 1.137 1.738 1.137h1.387c1.363 0 2.563 1.125 2.563 2.412v6.806c0 6.031-5.45 10.356-10.369 10.5-0.038 0-0.069 0.006-0.094 0.006zM11.106 30.712h9.988c0.019-0.006 0.044-0.006 0.069-0.006 4.55-0.094 9.619-4.081 9.619-9.656v-6.8c0-0.806-0.831-1.569-1.719-1.569h-1.387c-1.769 0-2.494-1.319-2.625-2.019-0.019-0.081-0.006-0.169 0.025-0.244-0.313-5.162-4.338-9.063-9.456-9.131-0.025 0.006-0.044 0.006-0.069 0.006h-4.494c-5.438 0.038-9.7 4.294-9.7 9.688v10.069c0 5.387 4.263 9.625 9.706 9.663 0.012 0 0.025 0 0.044 0z"></path>
                     <path id="svg-ico" fill="#ee5586" d="M22.688 22.038h-14.287c-0.231 0-0.425-0.188-0.425-0.425 0-0.231 0.188-0.425 0.425-0.425h14.287c0.231 0 0.425 0.188 0.425 0.425-0.006 0.231-0.194 0.425-0.425 0.425z"></path>
                     <path id="svg-ico" fill="#ee5586" d="M17.95 12.681h-9.55c-0.231 0-0.425-0.188-0.425-0.425s0.187-0.425 0.425-0.425h9.55c0.231 0 0.425 0.188 0.425 0.425s-0.188 0.425-0.425 0.425z"></path>
                     </svg>}
                     to='/blog'
                     title="Blog" />
                </Grid>

                {/* /modal  */}
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="modal-wrapper">
            <div className='modal-head'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/phone.svg" alt="phone">
                <title>phone</title>
                <path fill="#5e686b" d="M27.063 5.162c-2.6-2.6-6.050-4.2-9.706-4.5-0.238-0.019-0.438 0.156-0.456 0.387s0.156 0.438 0.387 0.456c3.456 0.281 6.719 1.794 9.175 4.256 5.737 5.738 5.737 15.069 0 20.806s-15.069 5.738-20.806 0c-2.775-2.775-4.306-6.469-4.306-10.4s1.531-7.625 4.306-10.4c2.469-2.469 5.738-3.981 9.206-4.256 0.231-0.019 0.406-0.219 0.387-0.456-0.019-0.231-0.213-0.406-0.456-0.387-3.669 0.294-7.125 1.888-9.738 4.5-2.938 2.938-4.556 6.844-4.556 11s1.619 8.063 4.556 11c3.031 3.031 7.019 4.55 11 4.55s7.969-1.519 11-4.55c6.069-6.069 6.069-15.938 0.006-22.006z"></path>
                <path id="svg-ico" fill="#ee5586" d="M17.563 16.262c-1.969 1.969-2.756 2.212-2.944 2.238l-0.113-0.113c-0.575-0.581-1.169-1.181-2.138-1.181-0.738 0-1.556 0.381-2.575 1.194-0.894 0.719-1.344 1.45-1.375 2.225-0.025 0.563 0.175 1.044 0.463 1.469-0.637 0.406-1.731 1.262-2.175 2.606-0.075 0.219 0.044 0.462 0.269 0.538 0.044 0.012 0.088 0.019 0.131 0.019 0.175 0 0.344-0.113 0.4-0.288 0.388-1.163 1.394-1.9 1.919-2.219 0.162 0.169 0.325 0.319 0.469 0.462l0.3 0.288c0.425 0.425 1.075 0.65 1.881 0.65 1.1 0 2.5-0.419 3.925-1.169 1.594-0.825 3.231-2.056 4.725-3.556 1.944-1.944 3.431-4.119 4.181-6.119 0.344-0.912 0.525-1.769 0.531-2.487 0.006-0.831-0.219-1.5-0.644-1.931-0.087-0.088-0.181-0.188-0.281-0.294-0.594-0.625-1.4-1.481-2.5-1.481-0.813 0-1.569 0.45-2.319 1.381-0.931 1.162-1.294 2.044-1.175 2.875 0.113 0.8 0.644 1.325 1.163 1.838l0.119 0.119c-0.012 0.1-0.094 0.35-0.363 0.762-0.369 0.569-1 1.306-1.875 2.175zM20.456 12.775l-0.181-0.181c-0.45-0.444-0.844-0.831-0.919-1.35-0.081-0.575 0.225-1.262 1-2.225 0.575-0.713 1.119-1.063 1.656-1.063 0.731 0 1.344 0.644 1.881 1.213 0.1 0.113 0.2 0.213 0.3 0.313 0.269 0.269 0.406 0.725 0.4 1.325-0.006 0.619-0.169 1.381-0.481 2.2-0.712 1.894-2.131 3.962-3.988 5.819-1.438 1.438-3 2.613-4.525 3.406-1.313 0.694-2.563 1.075-3.531 1.075-0.569 0-1.025-0.144-1.281-0.4l-0.313-0.3c-0.581-0.556-1.244-1.181-1.213-1.944 0.019-0.525 0.369-1.050 1.056-1.606 0.85-0.681 1.519-1.012 2.044-1.012 0.619 0 1.019 0.413 1.588 0.988 0.044 0.044 0.088 0.087 0.119 0.119 0.588 0.587 1.962-0.169 4.081-2.294 0.913-0.912 1.581-1.694 1.988-2.325 0.556-0.825 0.656-1.419 0.319-1.756z"></path>
                </svg>
                <h4 className="d-inline-block pt-1 ">Call Back</h4>  <Button onClick={handleClose} className="d-inline" >X</Button></div>
            <div className="modal-content py-3 px-3">
              {setCallMessage === "" ?  '' : ''}
              <div className=""></div>
              <div className=""></div>
              <div></div>
            <TextField
                                className="radius50"
                                id="outlined-full-width"                               
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Country Code + Your Number"                                
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <FaPhone />
                                      </InputAdornment>
                                    ),
                                  }}
                                variant="outlined"
                            />

            </div>
            <div className="modal-foot text-center py-3 px-3">
                  <Button variant="contained" size="large" className="btn-App no-outline mt-3" onClick={(e) => callHandler(e)}>
                      Call me
                  </Button>
            </div>
           
          </div>
        </Fade>
      </Modal>


                {/* /modal  */}
            </Grid>
        </Container>
        <Container className="mt-4">
            <Grid container spacing={2}>
                    <Grid item xs={12} className="text-center">
                        <Link to="termsofservices" class="text-dark">Terms of Service</Link>
                        <span class="text-pink mx-2">|</span>
                        <Link to="privacy" class="text-dark">Privacy Policy</Link>
                    </Grid>
            </Grid>
            <Grid container spacing={2}>
                    <Grid item xs={12} className="text-center">
                             <div class="soc-icons">
                             <SocialIcon />
                            </div>
                    </Grid>
            </Grid>
        </Container>
    </Box>
    <GoToTop />
            
        </div>
    )
}

export default Footer
