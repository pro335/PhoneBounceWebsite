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
import 'react-multi-carousel/lib/styles.css';
import { isMobile, isMobileOnly  } from "react-device-detect";
import Footer from '../../components/Footer'
import cheapIntCall from '../../assets/images/CheapinternationalCalls.jpg'
import benefitsOfVirtual from '../../assets/images/BenefitsOfVirtualNumbers.jpeg'
import cheapFnF from '../../assets/images/CheapFriendsAndFamilyCalls.png'


import {Helmet} from "react-helmet";


export const FriendsAndFamily = () => {

    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>           
              {/* Meta Update */}
            <Helmet>                
                <title>Cheap International Calls to Friends and Family Around the Globe</title>
                <meta name="description" content="PhoneBounce Offers You Cheap Calls that Span the Globe, Just a Click Away. Cheap International Calls from Mobile, Fixed and Toll-Free Numbers - One App to Rule Them All." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={8} lg={8}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Friends And Family</h1>                             
                             <p className="subheading">Cheap Calls that Span the Globe, Just a Click Away</p>
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
                                <img src={cheapFnF} alt="Friends and Family" className='img-fluid' />
                                         <p className='my-3'><FaCalendar /> May 17, 2019 <span className="soc-icons float-right">
                                                <a target="_blank" href="https://www.facebook.com/PhoneBounce/" className="fs-1"><FaFacebookF className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                <a target="_blank" href="https://twitter.com/phonebounce" className="fs-1"><FaTwitter className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>                                                
                                                <a target="_blank" href="https://www.linkedin.com/company/22319610/" className="fs-1"><FaLinkedin className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                
                                    
                                                </span>
                                        </p>
                                        <hr />
                                        <h3>Cheap Calls to and from Friends and Family Around the World</h3>
                                        <h6 className="mt-3">PhoneBounce Offers You Cheap Calls that Span the Globe, Just a Click Away</h6>
                                        <p>International phone calls are becoming a necessity in today's connected world. Whether you need international long distance calling for your business development or for private use, the expense can quickly add up. This is where PhoneBounce comes to the rescue. Easily the best international calling app, it offers you high-quality cheap long distance calling that eliminates distance and delivers reliable instant connection around the clock. Regardless of destination or duration, PhoneBounce deserves to be your number one solution for international long distance calling. Here is why.</p>
                                                                      
                                        <h6><stron>Cheap International Calls from Mobile and Fixed Numbers</stron></h6>
                                        <p>Cheap international phone calls are one of the many perks of setting up a virtual number with PhoneBounce. You can choose your custom made telephone number, one that speaks to your customer base or is easy to remember for your relatives abroad, and we take care of the rest. You can choose between a fixed or a mobile phone number for ultimate convenience and precise targeting. The latter option gives you access to unlimited international calls from mobile numbers - a definite perk for those who are often on the go.</p>
                                        <h6><strong>Toll-Free Numbers for Cheap Long Distance Calling</strong></h6>
                                        <p>Operating an international hotline or customer support service can be costly, but you can make cheap international calls thanks to the best international calling app, PhoneBounce. You can adopt the familiar telephone number format that customers are used to and provide them with a sense of security and professionalism that allows them to make the most of your service. International phone calls can seem like a deterrent and often have prohibitive costs, but the toll-free numbers from PhoneBounce take the fuss and hassle out of the process and let you focus on the quality of your service instead.</p>
                                        <h6><strong>Master the Major Market with Cheap Calls to USA Numbers</strong></h6>
                                        <p>The United States have always been a major market for a variety of businesses. They also attract people from all around the world thanks to the country's high-ranked universities, career opportunities, and unique way of life. Cheap calls to USA numbers, therefore, are a crucial way of keeping in touch with the major player on the North American continent. Keeping a convenient and cheap telephone line to the US is paramount to supporting customers, growing your business network there, and keeping in touch with friends and family alike. PhoneBounce provides the best option for cheap calls to USA based phone lines and helps you minimise vast distances, wherever you are!</p>
                                        <h6><strong>Cheap International Calls from Mobile, Fixed and Toll-Free Numbers - One App to Rule Them All</strong></h6>
                                        <p>Privacy is a top priority in our international calling app. Because it functions like a call forwarding app, your personal number will always be kept private and you'll enjoy the peace of mind of knowing that your private number will not be accessible to marketers or scammers. A private virtual phone number is ideal when signing up for websites or services that require a phone number, but where you don't feel comfortable giving your personal number, such as dating websites, classified ads, or online shopping sites. Our app is also convenient for those who need business phone systems that offer top privacy, as you can host meetings by phone keeping access and content fully private.</p>
                                        <p>Cheap international calls are automatically associated with a phone, and most phones today are mobile and smart. It only makes sense that PhoneBounce comes in the form of a handy app found at Google Play and the App Store. It will become your go-to solution for cheap international phone calls, you will enjoy unlimited international calls from mobile and other numbers, and the world will truly be a phone tap away!</p>
                                
                                
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

