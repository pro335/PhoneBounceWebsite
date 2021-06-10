import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Carousel from 'react-material-ui-carousel'
import ReviewBox from '../../components/ReviewBox'
import PricePlanCarousel from '../../components/PricePlan/PricePlanCarousel'
import 'react-multi-carousel/lib/styles.css';
import { isMobile  } from "react-device-detect";
import casestudyImage from '../../assets/images/casestudy.png'
import Footer from '../../components/Footer'
import personalizedVoicemail400 from '../../assets/images/19_Personalised_Recording-400px.png'
import {Helmet} from "react-helmet";


  var reviews = [
    {
        name: "CHEAP INTERNATIONAL CALLS",
        description: "Allow us to route that call or message across the globe.  We can do this for your own number or one you buy.",
    },
    {
        name: "CAMPAIGNS",
        description: "Running a campaign, promoting your club or just looking for feedback? Use a virtual numbers just for the time you need it. Review calls and messages and once your are finished drop the number.",
      
    },
    {
        name: "BUSINESS START-UP",
        description: "Starting a business and need a landline or several international numbers we have you covered. Put your Call Back button on your website convert more visitors to sales. With PhoneBounce you need never miss a call again.",
      
    },
    {
        name: "EMERGENCY NUMBERS",
        description: "Register a toll-free number and give it to friends and family as you are on holiday. Now they can call you at no cost wherever you are.",
      
    },
    {
        name: "INTERNET SIGN-UPS",
        description: "Signing up for dating sites, selling that car or just doing your shopping. Keep your personal number private.",
      
    },
    {
        name: "INTERNATIONAL NUMBERS",
        description: "Buy a number close to friends, family or potential customers. Allow them to contact you for the cost of a local rate call.",
      
    },
    {
        name: "INTERNATIONAL NUMBERS",
        description: "Buy a number close to friends, family or potential customers. Allow them to contact you for the cost of a local rate call.",
      
    },
]

function Item(props)
{
    return (
        <Paper className="paper px-5">            
            <h3 className="text-left author">{props.item.name}</h3>
            <p className="content-info">{props.item.description}</p>               
        </Paper>
    )
}


export const PersonalizedVoicemail = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>               
                <title>PhoneBounce Personalised Virtual Voicemail Smartphone App</title>
                <meta name="description" content="Download the PhoneBounce app, select the number you wish to record the greeting for and record it there and then. You can set different voicemails for different numbers." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5">
                             <h1 className="heading">Personalised Voicemail</h1> 
                             <p className="subheading">Sound professional and send the right message, because you never get a second chance at making a first impression.</p>
                            <h4>While you are away</h4>
                             <ul className="mt-4">
                                 <li><CheckCircleIcon className="icon-primary" /><span>Create your own greeting</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Held with your recorded calls</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Listen to voicemails at your leisure</span></li>
                                 
                                 
                             </ul>                             
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 <img src={personalizedVoicemail400} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>
             <Box className="service-help pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                     <Grid container className="px-5 bg-white box-shadow" className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">What Are Personalised Voicemail Greetings?</h2>
                             <p className="text-center">These are greeting played when you are not available and just before your caller has the option to leave a message.</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How it works?</h4>
                             <p>Once logged in to Phonebounce, select the number you wish to record the greeting for and record it there and then. You can set different voicemails for different numbers, allowing you to tailor each one for every need.</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>How this benefits you!</h4>
                             <p>A bespoke greeting reassures callers that they have reached the right person or company. It gives them the impression that they are dealing with a professional and allows you to communicate service information when needed.</p>
                            </div>
                         </Grid>
                     </Grid>                    
                 </Container>
             </Box>
             <Box className="py-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} >
                            <div className="casestudy-main py-5">
                                <img src={casestudyImage} />
                                <Grid item xs={12} md={9} lg={9} >
                                <Carousel  className="px-5 py-5" interval={4000}  navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                    {
                                        reviews.map( (item, i) => <Item key={i} item={item} /> )
                                    }
                                </Carousel>
                                </Grid>
                            </div>
                         </Grid>
                     </Grid>
                 </Container>
             </Box>
             <PricePlanCarousel />             
                <ReviewBox />
                <Footer />
        </div>
    )
}
