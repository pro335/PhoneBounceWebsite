import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid  } from '@material-ui/core';
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
import buyTelephone from '../../assets/images/buy_telephone_numbers (1).png'
import { isMobile  } from "react-device-detect";
import Footer from '../../components/Footer'
import {Helmet} from "react-helmet";


export const BuyTelephone = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>                
                <title>Buy Multiple Virtual Landline & Business Phone Numbers</title>
                <meta name="description" content="A new number from PhoneBounce is like having a new phone. Recipients see your new number while you get to keep your number private. Pick the number type and press BUY." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Buy Telephone Numbers</h1> 
                             <ul className={isMobile ? "d-none" : "mt-4"} >
                                 <li><CheckCircleIcon className="icon-primary" /><span>Multiple Numbers</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Numbers Local To Your Customers</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Low / No Cost Calls for Friends And Family</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Keep Your Personal Number Private</span></li>
                             </ul>
                             <p className="subheading">A new number from PhoneBounce is like having a new phone. Receipients see your new number while you get to keep your number private. Take your venture to the next level and show people you are serious.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 <img src={buyTelephone} className="img-fluid" alt="Buy Phone" />
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
                             <h2 className="text-center">Why Buy A Telephone Number?</h2>
                             <p className="text-center">Buy taking onme or more numbers from PhoneBounce you can take your venture to the next level. Allow people to contact you with low / no cost calls. Keep your business and private life seperate.</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How it works?</h4>
                             <p>Chose the country, pick the number type and press BUY. We will have you set up in under 30 seconds. Instantly you can make and receive calls and messages to over 200 countries as your new number</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>How this helps you!</h4>
                             <p>With a new number for support or Sales. Maybe a local low cost number for your customers. How about a toll free number family can call you on while you travel around the world. The choice is yours</p>
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
