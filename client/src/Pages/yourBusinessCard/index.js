import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid } from '@material-ui/core';
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
import ReviewBox from '../../components/ReviewBox'
import PricePlanCarousel from '../../components/PricePlan/PricePlanCarousel'
import 'react-multi-carousel/lib/styles.css';
import yourBusinessCard from '../../assets/images/Your_business_card.png'
import { isMobile  } from "react-device-detect";
import Footer from '../../components/Footer'
import {Helmet} from "react-helmet";


export const YourBusinessCard = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>                
                <title>Your Business Card</title>
                <meta name="description" content="Our aim is to provide a safe and secure platform for businesses to communicate. By recording calls and messages there can be no confusion. Download the app today." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Your Business Card</h1> 
                             <ul className={isMobile ? "d-none" : "mt-4"} >
                                 <li><CheckCircleIcon className="icon-primary" /><span>Download to hand out</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>All Your Business Details</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>QR Code for instant connection</span></li>
                                
                             </ul>
                             <p className="subheading">Using this business card you can download, handout or simply display this card where ever you need to connect with people

</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 <img src={yourBusinessCard} className="img-fluid" alt="Buy Phone" />
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
                             <h2 className="text-center">Why A Business Card</h2>
                             <p className="text-center">When starting a business its hard to have a card with all your relivant details to hand. With PhoneBounce we use a standard card anyone one, including uyourself, can download and use.</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How it works?</h4>
                             <p>Simply download and allow someone to scan the card using any QR code reader. Connect in seconds</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>How this helps you!</h4>
                             <p>With the card instantly set up to your details and with the ability to change in an instant you can allow people to connect with you from anywhere.</p>
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
