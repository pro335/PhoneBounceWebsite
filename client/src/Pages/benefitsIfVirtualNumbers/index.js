import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid  } from '@material-ui/core';
import './index.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {FaCalendar} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ReviewBox from '../../components/ReviewBox'
import 'react-multi-carousel/lib/styles.css';
import { isMobile, isMobileOnly  } from "react-device-detect";
import Footer from '../../components/Footer'
import cheapIntCall from '../../assets/images/CheapinternationalCalls.jpg'
import benefitsOfVirtual from '../../assets/images/BenefitsOfVirtualNumbers.jpeg'
import cheapFnF from '../../assets/images/CheapFriendsAndFamilyCalls.png'


import {Helmet} from "react-helmet";


 export const BenefitsOfVirtualNumbers = () => {

    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>           
              {/* Meta Update */}
            <Helmet>                
                <title>Benefits of Virtual Numbers | Virtual Mobile & Landline Number Provider</title>
                <meta name="description" content="If you're looking for a virtual phone system that is easy to set up, offers low cost calls and messages worldwide, Go to PhoneBounce.com and download our app today." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={8} lg={8}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Benefits Of Virtual Numbers</h1>                             
                             <p className="subheading">Benefits of a Virtual International Numbers</p>
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
                                <img src={benefitsOfVirtual}  alt="Benefits of Virtual Numbers" className='img-fluid' />
                                         <p className='my-3'><FaCalendar /> May 21, 2019 <span className="soc-icons float-right">
                                                <a target="_blank" href="https://www.facebook.com/PhoneBounce/" className="fs-1"><FaFacebookF className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                <a target="_blank" href="https://twitter.com/phonebounce" className="fs-1"><FaTwitter className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                
                                                <a target="_blank" href="https://www.linkedin.com/company/22319610/" className="fs-1"><FaLinkedin className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                                                
                                    
                                                </span>
                                        </p>
                                        <hr />
                                        <h3>Benefits Of Virtual Numbers</h3>
                                        <h6 className="mt-3">Benefits of a Virtual International Numbers</h6>
                                        <p>If you travel often or spend time abroad, you'll have come across a common dilemma: you want your to keep in touch with friends, family, or customers, but phone calls are expensive and sometimes unreliable. The good news is that you no longer have to choose between being reachable and sticking to your budget: using state-of-the-art technology, virtual phone systems and cheap international calls apps can redirect calls and messages to your personal phone in multiple countries. All you need to do is buy a virtual local number, and the app will take care of the rest. If this sounds appealing, you'll want to take a look at the four most important benefits of a virtual phone app.</p>
                                        <h3>Benefits</h3>                                       
                                        <h6><stron>Be always available no matter where you are</stron></h6>
                                        <p>If the world is your oyster, a virtual phone system that is globally available is a must have. A virtual phone number is ideal for digital nomads, business owners, travellers, or those living, working or studying abroad. With an international calling app, your friends, relatives, or clients can call you or message you using a local number, and all calls and messages will be securely redirected to your personal phone. Virtual phone apps are like a call forwarding service, so you never miss a call again. Moreover, a virtual phone system for business helps create a more professional image for both startups and established businesses.</p>
                                        <h6><strong>Save money on international phone call</strong></h6>
                                        <p>Standard phone systems come with high roaming charges and sometimes may not even be available in your destination. But we don't think you should pay a premium for using your phone in different countries, so we have created a cheap international calls app with low cost call and messaging rates. With this app, you'll get cheap rates on international phone calls and messages, so you can save your money to spend it on the things that really matter.</p>
                                        <h6><strong>More control over phone calls</strong></h6>
                                        <p>A virtual phone number makes it easy for people to reach you irrespective of location or time zone, but that doesn't mean you have to be available 24/7. Control over phone calls is a key element in any virtual phone system for business or for personal use, and with our call forwarding app, you get to choose which calls you want to answer and when. The app comes with a built-in blocking and screening function, so you choose whether you want to answer a call or not at any given time.</p>
                                        <h6><strong>More privacy</strong></h6>
                                        <p>Privacy is a top priority in our international calling app. Because it functions like a call forwarding app, your personal number will always be kept private and you'll enjoy the peace of mind of knowing that your private number will not be accessible to marketers or scammers. A private virtual phone number is ideal when signing up for websites or services that require a phone number, but where you don't feel comfortable giving your personal number, such as dating websites, classified ads, or online shopping sites. Our app is also convenient for those who need business phone systems that offer top privacy, as you can host meetings by phone keeping access and content fully private.</p>
                                        <p>If you're looking for a virtual phone system that is easy to set up, offers low cost calls and messages worldwide, and has the functions of the best business phone systems, PhoneBounce will fit the bill. To enjoy all the benefits of this cheap international calls app, go to PhoneBounce.com and download our app today.</p>
                                
                                
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

