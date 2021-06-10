import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {FaCalendar} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ReviewBox from '../../components/ReviewBox'
import BlogCard from '../../components/Blogcard'
import 'react-multi-carousel/lib/styles.css'
import { isMobile, isMobileOnly  } from "react-device-detect";
import Footer from '../../components/Footer'
import cheapIntCall from '../../assets/images/CheapinternationalCalls.jpg'
import benefitsOfVirtual from '../../assets/images/BenefitsOfVirtualNumbers.jpeg'
import cheapFnF from '../../assets/images/CheapFriendsAndFamilyCalls.png'


import {Helmet} from "react-helmet";


export const CheapInternationalCalls = () => {

    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>           
              {/* Meta Update */}
            <Helmet>                
                <title>Cheap International Calls | Lost Cost International Calling App</title>
                <meta name="description" content="unlimited international calls from mobile, cheap international calls from mobile, international long distance calling, cheap international phone calls, best international calling app, cheap long distance calling, cheap international calls, international phone calls, cheap calls to usa" />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={8} lg={8}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Cheap International Calls</h1>                             
                             <p className="subheading">Transforming Your Cellphone to Make Cheap International Calls</p>
                             </div>
                         </Grid>                        
                     </Grid>
                 </Container>

             </Box>  

        {/* All in One SoftPhone */}

        <Box className="service-help  pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                        <Grid container  spacing={5} >
                            <Grid item xs={12} md={8}>
                                <div className={isMobile ? 'px-2 py-5 box-shadow bg-white' : 'px-5 py-5 box-shadow bg-white'}>
                                <img src={cheapIntCall} alt="Cheap International Calls" className='img-fluid' />
                                         <p className='my-3'><FaCalendar /> May 26, 2019 <span className="soc-icons float-right">
                                                <a target="_blank" href="https://www.facebook.com/PhoneBounce/" className="fs-1"><FaFacebookF className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                <a target="_blank" href="https://twitter.com/phonebounce" className="fs-1"><FaTwitter className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                
                                                <a target="_blank" href="https://www.linkedin.com/company/22319610/" className="fs-1"><FaLinkedin className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                
                                    
                                                </span>
                                        </p>
                                        <hr />
                                        <h3>Cheap International Calls</h3>
                                        <h6 className="mt-3">PhoneBounce Offers You Cheap Calls that Span the Globe, Just a Click Away</h6>
                                        <p>Transforming Your Cellphone to Make Cheap International Calls Do you need to make cheap international calls, perhaps to people living in several different countries or are you looking for unlimited international calling but haven't found a way to make this happen?</p>
                                        <p><strong><em><q>Help is on the way thanks to a new app called PhoneBounce which lets you make cheap international calls abroad straight from your mobile phone.</q></em></strong></p>
                                        <h6><stron>How to Make Cheap International Calls</stron></h6>
                                        <p>is the best. All you have to do to start making low-cost international calls is to download the app and register. You can start to make cheap international calls either from your own number or you can purchase a new number from PhoneBounce and make calls directly from this number instantly. Any calls that are made to your purchased number will be re-directed to your mobile phone, either being put through straight to your mobile or to your voicemail, depending on your availability. Making calls from using your new number allows you to make cheap UK and international calls because calls go out via the PhoneBounce network which is free from normal network charges or subsidies and the set up of your new phone number is instant.</p>
                                        <h6><strong>Other Benefits</strong></h6>
                                        <p>As well as being able to make free or dirt cheap calls using the PhoneBounce service, the app also has other benefits. It allows you, for instance, to keep your personal number private, you only ever have to give out the number that you have purchased. It also means that you can purchase a number local to friends, family, or potential customers and pass this on to them. This can help make them low-cost international calls to you, plus they will never even know that the call they are making is international. PhoneBounce even logs all calls and messages to your purchased number, allowing you the space to review them when you have the time. Plus, you can purchase as many numbers as you like, with all the information from each number stored in one convenient location.</p>
                                        <h6><strong>The App</strong></h6>
                                        <p>The PhoneBounce is available for both iOS and Android operating systems. Once you have downloaded the app and purchased your number, you can set up your profile, part of this includes customizing your own greeting to play to callers should you be unavailable. The app will allow you to manage however many numbers you purchase all in one location and you can even see your call usage at a glance. The app also allows users to make free video calls to other PhoneBounce users around the world across both iOS and Android platforms. Users can also enjoy cheap rate SMS. Download today and start making cheap international phone calls straight away.</p>
                                
                                </div>
                                
                            </Grid>
                            <Grid item  xs={12} md={4}>
                                     <div className={isMobile ? 'px-2 py-5 box-shadow bg-white' : 'px-5 py-5 box-shadow bg-white'}>
                                         <h6 ><span className="blog-sidebar-heading">Most Popular</span></h6>
                                         <Grid container spacing={1} className='my-5'>
                                         <Grid item xs={12} md={6} lg={6}>
                                             <img src={benefitsOfVirtual} className='img-fluid' />
                                         </Grid>
                                         <Grid item xs={12} md={6} lg={6}>
                                             <Link to="/benefits-of-virtual-numbers" className="blog-Links"><strong>Benefits Of Virtual Numbers</strong></Link>
                                         </Grid>                                         
                                         </Grid>
                                         <Grid container spacing={1} className='my-5'>
                                         <Grid item xs={12} md={6} lg={6}>
                                             <img src={cheapFnF} className='img-fluid' />
                                         </Grid>
                                         <Grid item xs={12} md={6} lg={6}>
                                             <Link to="/friends-and-family" className="blog-Links"><strong>Friends and Family</strong></Link>
                                         </Grid>                                         
                                         </Grid>
                                         <Grid container spacing={1} className='my-5'>
                                         <Grid item xs={12} md={6} lg={6}>
                                             <img src={cheapIntCall} className='img-fluid' />
                                         </Grid>
                                         <Grid item xs={12} md={6} lg={6}>
                                             <Link to="/cheap-international-calls" className="blog-Links"><strong>Cheap International Calls</strong></Link>
                                         </Grid>                                         
                                         </Grid>
                                    
                                    </div>
                               
                            </Grid>                           
                        </Grid>

                 </Container>
             </Box>


        {/* All in One SoftPhone */}       
                
                <ReviewBox />
               
                <div className="footer-dark">
                <Footer />
                </div>
                
                
        </div>
    )
}
