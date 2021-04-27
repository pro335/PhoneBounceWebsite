import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import callBlock200 from '../../assets/images/14_Call_Blocking-200px.png'
import callForward200 from '../../assets/images/15_Call_Forwarding-200px.png'
import conference200 from '../../assets/images/18_Conference_Calling-200px.png'
import callRecord200 from '../../assets/images/16_Call_Recording-200px.png'
import translation200 from '../../assets/images/21_Translation-200px.png'
import callWhispering200 from '../../assets/images/17_Call_Whisper-200px.png'
import voiceMail200 from '../../assets/images/19_Personalised_Recording-200px.png'
import webIntegrations200 from '../../assets/images/22_Web_Integration-200px.png'
import FeatureIcon from '../../components/FeatureIcons'
import Carousel from 'react-material-ui-carousel'
import ReviewBox from '../../components/ReviewBox'
import PricePlanCarousel from '../../components/PricePlan/PricePlanCarousel'
import 'react-multi-carousel/lib/styles.css';
import freeVideoCalls from '../../assets/images/free_video_calls.png'
import { isMobile  } from "react-device-detect";
import Footer from '../../components/Footer'
import fullDeck from '../../assets/images/fulldeck.png'
import slider1img1 from '../../assets/images/array-1-0.png'
import slider1img2 from '../../assets/images/array-1-1.png'
import slider1img3 from '../../assets/images/array-1-2.png'
import slider2img1 from '../../assets/images/array-2-0.png'
import slider2img2 from '../../assets/images/array-2-1.png'
import slider2img3 from '../../assets/images/array-2-2.png'
import slider3img1 from '../../assets/images/array-3-0.png'
import slider3img2 from '../../assets/images/array-3-1.png'
import slider3img3 from '../../assets/images/array-3-2.png'
import {Helmet} from "react-helmet";


export const FreeVideoCalls = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>                
                <title>PhoneBounce Free International Video Calling & Conferencing App</title>
                <meta name="description" content="Free International Video Calls & Conferencing - One to One chat Worldwide, Fully Secure, 100% Free. Using the internet and WebRTC we connect your handsets directly." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Free Video Calls</h1> 
                             <ul className={isMobile ? "d-none" : "mt-4"} >
                                 <li><CheckCircleIcon className="icon-primary" /><span>One to One chats Worldwide</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Fully Secure</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>100% Free</span></li>
                             </ul>
                             <p className="subheading">We believe video is the next evolution of communication and as suchg we want it to be free. So we have made it so on our phone. Not just for your current number but also any number you purchase.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-0">
                                 <img src={freeVideoCalls} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>  

        {/* All in One SoftPhone */}

        <Box className="service-help pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                     <Grid container className="px-5 bg-white box-shadow" className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">Free Video Calls</h2>
                             <p className="text-center">Call friends, family or business partners anywhere in the world for free. Using PhoneBounce you can cross Android and IOS to allow anyone to see you with excellent clarity.</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How it works?</h4>
                             <p>Using the internet and WebRTC we connect your handsets directly. One to One video calls are not recorded or stored but are secure and 100% free.</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>How this helps you!</h4>
                             <p>If you have connections abroad you would like ot catch up with, maybe you have no credit or arte in a country where WhatsApp doesnt work PhoneBounce is there for you.</p>
                            </div>
                         </Grid>
                     </Grid>                    
                 </Container>
             </Box>



        {/* All in One SoftPhone */}

        {/* Feature Icon 200  */}

        <Box className="py-3">             
                 <Container className=" px-5 pt-5 pb-2 ">
                     <Grid container className="px-5 bg-white" spacing={2}>
                         <Grid item xs={12} md={3} lg={3} >  
                             <FeatureIcon image={callBlock200} title="Call Blocking" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >
                         <FeatureIcon image={callForward200} title="Call Forwarding" />                         
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} > 
                         <FeatureIcon image={conference200 } title="Conference Calling" />                            
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} > 
                         <FeatureIcon image={callRecord200 } title="Call Recording" />                        
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={translation200 } title="Translation" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={callWhispering200 } title="Call Whispering" />                       
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={voiceMail200 } title="Personalised Voicemail" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={webIntegrations200} title="Web Integration" />                       
                         </Grid>
                     </Grid>
                 </Container>                 
             </Box>


        {/* Feature Icon 200  */}

                
                <ReviewBox />
                <PricePlanCarousel />
                <div className="footer-dark">
                <Footer />
                </div>
                
                
        </div>
    )
}

