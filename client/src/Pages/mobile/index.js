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
import FeatureIcon from '../../components/FeatureIcons'
import SocialIcon from '../../components/Footer/socialIcon'
import GoToTop from '../../components/Footer/goToTop'
import AllFeatureIcons from '../../components/AllFeatureIcons'
import Footer from '../../components/Footer'
import personalizedVoicemail400 from '../../assets/images/19_Personalised_Recording-400px.png'
import {Helmet} from "react-helmet";


  
export const Mobile = () => {

  useEffect(() => {
    /* ComponentDidMount code */
    window.scrollTo(0, 0);
  }, []);


    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>               
                <title>Virtual International Mobile Phone Number | Virtual Local Number</title>
                <meta name="description" content="Using your smartphone, tablet or computer you can buy your second mobile number through our app or website. Forget about lack of signal or there being “busy network”." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5">
                             <h1 className="heading">Mobile Numbers</h1> 
                             <p className="subheading">Fast, reliable and available in over 40+ countries</p>
                                                      
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 {/* <img src={personalizedVoicemail400} className="img-fluid" alt="Buy Phone" /> */}
                                 {/* SVG */}

                                 <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 611.6 522.7" style={{enableBackground: 'new 0 0 611.6 522.7'}} xmlSpace="preserve" className="svg -custom-element-right" src="patterns/10-mobile.svg" alt="Mobile">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:none;stroke:#4A5866;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:#4A5866;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st2{fill:none;stroke:#EE5586;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st3{fill:none;stroke:#4A5865;stroke-width:4;stroke-miterlimit:10;}\n\t.st4{fill:#EE5586;}\n\t.st5{fill:#FFFFFF;}\n" }} />
        <path className="st0" d="M143.3,83.9c0-0.3,0.2-0.5,0.5-0.5H224c0.3,0,0.5,0.2,0.5,0.5v1.6c0,0,0,2-4.1,2h-34.9h-38.1  c-4.1,0-4.1-2-4.1-2L143.3,83.9z" />
        <path className="st0" d="M215.7,83.3V41.5c0-1.2-0.9-2.1-2.1-2.1h-58.8c-1.2,0-2.1,1-2.1,2.1v41.8H215.7z" />
        <rect id="svg-concept" x="159.4" y="46.5" className="st0" width="49.2" height="31.8" />
        <path className="st0" d="M231.5,32.8C265.4,15.7,303.8,6,344.4,6c37.7,0,73.4,8.3,105.4,23.3" />
        <path className="st0" d="M107.4,175.5c8.1-23.8,19.8-46.1,34.3-66.1" />
        <path className="st0" d="M148.8,413c-17.6-22-31.6-47-41-74.2" />
        <path className="st0" d="M476.4,469.7c-38.3,23.8-83.4,37.5-131.8,37.5c-36.6,0-71.4-7.8-102.7-22" />
        <line className="st0" x1="157.8" y1="462.7" x2="225.7" y2="462.7" />
        <line className="st0" x1="191.8" y1="478.6" x2="191.8" y2="488.2" />
        <line className="st0" x1="206.9" y1="488.2" x2="176.7" y2="488.2" />
        <rect x="157.1" y="425.7" className="st0" width="69.2" height="52.9" />
        <g>
          <path id="svg-concept_2_" className="st1" d="M490.8,53.2C553.9,98.6,595,172.8,595,256.6c0,68.6-27.6,130.7-72.3,176.1" />
          <animate accumulate="none" additive="replace" attributeName="opacity" begin="1s" calcMode="linear" dur="2s" fill="remove" repeatCount="indefinite" restart="always" values="0;3;0">
          </animate>
        </g>
        <g>
          <path id="svg-concept_3_" className="st1" d="M438.7,102.6c55.7,30.3,93.6,89.3,93.6,157.2c0,51.8-22,98.3-57.2,131" />
          <animate accumulate="none" additive="replace" attributeName="opacity" begin="2s" calcMode="linear" dur="2s" fill="remove" repeatCount="indefinite" restart="always" values="0;3;0">
          </animate>
        </g>
        <g>
          <path id="svg-concept_4_" className="st1" d="M405.5,149.8c37.3,22.5,62.1,63.3,62.1,110c0,39.8-18.2,75.5-46.6,99.1" />
          <animate accumulate="none" additive="replace" attributeName="opacity" begin="3s" calcMode="linear" dur="2s" fill="remove" repeatCount="indefinite" restart="always" values="0;3;0">
          </animate>
        </g>
        <circle id="svg-concept_5_" className="st2" cx={94} cy="256.6" r="82.2" />
        <circle className="st0" cx="183.1" cy="66.9" r="59.2" />
        <circle className="st0" cx="191.8" cy="453.7" r="59.2" />
        <g>
          <circle className="st3" cx="339.7" cy="259.1" r={88} />
          <g>
            <g>
              <path className="st4" d="M280.6,249.4c-1.8,0-3.3,1.5-3.3,3.3v16.1c0,1.8,1.5,3.3,3.3,3.3s3.3-1.5,3.3-3.3v-16.1     C284,250.9,282.5,249.4,280.6,249.4z" />
              <path className="st4" d="M332.9,249.4c-1.8,0-3.3,1.5-3.3,3.3v16.1c0,1.8,1.5,3.3,3.3,3.3s3.3-1.5,3.3-3.3v-16.1     C336.2,250.9,334.7,249.4,332.9,249.4z" />
              <path className="st4" d="M286.9,249.4v0.1v29.7c0,2.8,2.2,5,5,5h5.3v8.5c0,1.8,1.5,3.3,3.3,3.3s3.3-1.5,3.3-3.3v-8.5h5.7v8.5     c0,1.8,1.5,3.3,3.3,3.3s3.3-1.5,3.3-3.3v-8.5h5.3c2.8,0,5-2.2,5-5v-29.7v-0.1L286.9,249.4L286.9,249.4z" />
              <path className="st4" d="M316.5,229.2l3.6-6.6l-0.7-0.4l-3.6,6.6c-2.7-1.4-5.7-2.1-9-2.1c-3.1,0-6,0.7-8.5,1.9l-3.5-6.4l-0.7,0.4     l3.5,6.4c-6.2,3.3-10.4,9.8-10.4,17.3h39.4C326.5,238.9,322.4,232.6,316.5,229.2z M296.6,238.6c-1,0-1.9-0.9-1.9-1.9     s0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9S297.7,238.6,296.6,238.6z M316.6,238.6c-1,0-1.9-0.9-1.9-1.9s0.8-1.9,1.9-1.9     c1,0,1.9,0.8,1.9,1.9S317.7,238.6,316.6,238.6z" />
            </g>
            <g>
              <g>
                <path className="st4" d="M362.6,241.7c2.3,0,4.3,0.6,6.3,1.3c1.2,0.4,2.4,0.9,3.7,1.2c2.3,0.6,4.5,0.4,6.6-0.5      c1.5-0.6,3.1-1.2,4.7-1.6c4.9-1.1,9.2,0,13.1,3c1.1,0.8,2,1.7,2.9,2.8c0.3,0.4,0.3,0.5-0.1,0.8c-4.1,2.5-6.4,6.1-6.8,10.8      c-0.4,4.4,1,8.3,4,11.5c1.3,1.4,2.9,2.4,4.7,3.2c0.5,0.2,0.5,0.3,0.3,0.8c-2,4.6-4.6,8.8-7.9,12.6c-1.1,1.3-2.4,2.4-3.9,3.3      c-2.4,1.3-4.8,1.3-7.3,0.3c-1-0.4-2-1-3-1.3c-3.4-1.1-6.8-0.9-10.1,0.4c-0.9,0.4-1.7,0.8-2.6,1.1c-3.2,1.2-6.1,0.5-8.7-1.6      c-1.6-1.3-2.9-2.8-4.1-4.4c-2.8-3.7-5-7.8-6.4-12.2c-1.1-3.2-1.7-6.4-1.9-9.7c-0.2-3.7,0.1-7.3,1.5-10.7      c2.3-5.3,6.2-8.9,11.8-10.5C360.4,241.8,361.6,241.6,362.6,241.7z" />
              </g>
              <g>
                <path className="st4" d="M386.6,227.8c0,3.1-1,5.8-2.6,8.2c-1.8,2.7-4.3,4.6-7.4,5.6c-1,0.3-1.9,0.5-2.9,0.5c-0.4,0-0.5-0.2-0.6-0.5      c-0.3-2.3,0.3-4.4,1.2-6.4c1.9-4,5.1-6.7,9.2-8.2c0.8-0.3,1.7-0.4,2.6-0.6c0.4-0.1,0.4,0.2,0.5,0.4      C386.5,227.2,386.6,227.6,386.6,227.8z" />
              </g>
            </g>
          </g>
        </g>
        <g>
          <path className="st5" d="M89.9,214.1c-0.4-7.8,4.4-9.8,9.4-10.8c0.7-0.1,1.8,0.5,2.2,1.1c2.4,3.8,4.6,7.7,6.9,11.6   c0.9,1.5,0.7,2.9-0.7,4.1c-1.6,1.5-3.1,3.1-4.8,4.5c-1.4,1.1-1.5,2.2-0.8,3.8c1.9,4.8,4.8,8.9,8.6,12.2c3.9,3.3,8.2,6,12.3,9   c1,0.7,1.7,0.5,2.5-0.4c1.7-1.9,3.5-3.8,5.2-5.7c1.4-1.5,2.9-1.7,4.6-0.6c3.6,2.3,7.1,4.6,10.7,6.9c1.3,0.8,1.5,1.9,1.3,3.3   c-0.8,4.2-3.5,6.9-7.2,8.6c-1,0.4-3.2,0-4.1-0.1c-10.9-1.2-21.1-4.4-29.7-11.6C95.4,240.4,90.8,228.1,89.9,214.1z" />
          <path className="st5" d="M125.3,310c-46.8,0-84.8-38-84.8-84.8c0-3.8,3.1-7,7-7s7,3.1,7,7c0,39.1,31.8,70.9,70.9,70.9c3.8,0,7,3.1,7,7   C132.2,306.8,129.1,310,125.3,310z" />
          <path className="st5" d="M125.3,310c-46.8,0-84.8-38-84.8-84.8c0-3.8,3.1-7,7-7s7,3.1,7,7c0,39.1,31.8,70.9,70.9,70.9c3.8,0,7,3.1,7,7   C132.2,306.8,129.1,310,125.3,310z" />
          <path className="st5" d="M127.1,283.8c-33.3,0-60.4-27.1-60.4-60.4c0-3.8,3.1-7,7-7c3.8,0,7,3.1,7,7c0,25.6,20.9,46.5,46.5,46.5   c3.8,0,7,3.1,7,7C134,280.7,130.9,283.8,127.1,283.8z" />
        </g>
      </svg>
                                 
                                 {/* SVG */}
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>
             <Box className="service-help pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                     <Grid container className="px-5 bg-white box-shadow" className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">What Is A Virtual Mobile Number?</h2>
                             <p className="text-center">A virtual mobile number is secondary phone line used as an alternative way of calling, without revealing your private number. A second number is great for handing out to strangers, listing online or signing up for services, as you don’t compromise your private number. They also prove useful for separating business from private life and making anonymous calls.</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How Do They Work?</h4>
                             <p>Using your smartphone, tablet or computer you can buy your second mobile number through our app or website. Once registered, you can use this line with any smart device with an internet connection, as calls, messages and video can be sent through the internet, meaning no hardware is required. The person you’re contacting doesn’t need to have any specific software, just either signal or an internet connection!</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>Benefits of A Virtual Mobile Number</h4>
                             <p>With over 40+ countries to choose a business number from, your audience can become worldwide. Forget about lack of signal or there being “busy network”, calls and messages can be sent over the internet. Meaning, any smart device with an internet connection can use your virtual number, giving you complete flexibility.</p>
                            </div>
                         </Grid>
                     </Grid>                    
                 </Container>
             </Box>
             <Box className="bg-features py-5">             
                 <Container className=" mt-3 px-5 ">
                     <Grid container className="px-5 bg-white box-shadow" spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">Features</h2>                             
                         </Grid>
                         <AllFeatureIcons />
                     </Grid>
                    
                 </Container>                 
             </Box>
                  
             <Box className={isMobile ? 'px-2 review-terms' : 'px-4 review-terms'}>
                    <ReviewBox />
                    </Box>
          
                <div className="footer-dark">
                <Footer />
                </div> 
               
        </div>
    )
}
