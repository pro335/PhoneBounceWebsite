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
import conferenceCalling400 from '../../assets/images/18_Conference_Calling-400px.png'
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



export const ConferenceCalling = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>               
                <title>PhoneBounce Conference Calling App for Business in Android/iOS</title>
                <meta name="description" content="Phonebounce generates a unique room code every time a new conference is created, so that your team can conference securely in both Android & iOS devices." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5">
                             <h1 className="heading">Conference Calling</h1> 
                             <p className="subheading">Collaborate with the people you need!</p>
                            <h4>Connecting you anywhere</h4>
                             <ul className="mt-4">
                                 <li><CheckCircleIcon className="icon-primary" /><span>Simple super cheap pricing</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Video and Phone in one meeting</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>2 to 50 participants</span></li>
                                 
                                 
                             </ul>                             
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 <img src={conferenceCalling400} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>
             <Box className="service-help pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                     <Grid container className="px-5 bg-white box-shadow" className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">What Is Conference Calling?</h2>
                             <p className="text-center">It’s a feature that will enable you to add up too x people to your call. These could managers, supervisors or even other employees. Only one person requires a Phonebounce number to conference call, meaning anyone can join in!</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How it works?</h4>
                             <p>Phonebounce generates a unique room code every time a new conference is created, so that your team can conference securely. Simply share your number with the room code when you arrange a call, and your participants can dial-in and meet you there.</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>How this benefits you!</h4>
                             <p>Conference where and when it suits you and your team best. No longer be confided to who’s in the office, as now employees, managers and directors can join in on calls with ease. Even discuss your projects with your international partners through our international numbers. The possibilities are endless.</p>
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

