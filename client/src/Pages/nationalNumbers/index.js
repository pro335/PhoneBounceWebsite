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
import callBlock200 from '../../assets/images/14_Call_Blocking-200px.png'
import callForward200 from '../../assets/images/15_Call_Forwarding-200px.png'
import conference200 from '../../assets/images/18_Conference_Calling-200px.png'
import callRecord200 from '../../assets/images/16_Call_Recording-200px.png'
import translation200 from '../../assets/images/21_Translation-200px.png'
import callWhispering200 from '../../assets/images/17_Call_Whisper-200px.png'
import voiceMail200 from '../../assets/images/19_Personalised_Recording-200px.png'
import webIntegrations200 from '../../assets/images/22_Web_Integration-200px.png'
import AllFeatureIcons from '../../components/AllFeatureIcons'
import casestudyImage from '../../assets/images/casestudy.png'
import Footer from '../../components/Footer'
import {Helmet} from "react-helmet";



export const NationalNumbers = () => {
  useEffect(() => {
    /* ComponentDidMount code */
    window.scrollTo(0, 0);
  }, []);
  
    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>               
                <title>Virtual National & International Mobile Phone Numbers For Business</title>
                <meta name="description" content="With over 40+ countries to choose a business number from, your audience can become worldwide. Useful for separating business from private life and making anonymous calls." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5">
                             <h1 className="heading">National Numbers</h1> 
                             <p className="subheading">Make your business global.</p>
                                                      
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 {/* <img src={personalizedVoicemail400} className="img-fluid" alt="Buy Phone" /> */}
                                 {/* SVG */}

                                 <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 611.6 522.7" style={{enableBackground: 'new 0 0 611.6 522.7'}} xmlSpace="preserve" className="svg -custom-element-right" src="patterns/12_national.svg" alt="National">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{display:none;}\n\t.st1{display:inline;fill:#FFFFFF;}\n\t.st2{display:inline;fill:none;}\n\t.st3{display:inline;}\n\t.st4{fill:#4A5866;}\n\t.st5{fill:none;stroke:#EE5586;stroke-width:8;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st6{fill:none;stroke:#4A5866;stroke-width:8;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st7{display:inline;fill:#EE5586;}\n\t.st8{fill:none;stroke:#4A5866;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st9{fill:none;stroke:#4A5866;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st10{fill:none;stroke:#EE5586;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st11{fill:none;stroke:#4A5865;stroke-width:4;stroke-miterlimit:10;}\n\t.st12{fill:none;stroke:#EE5586;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st13{fill:none;stroke:#4A5866;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}\n\t.st14{fill:#FFFFFF;}\n" }} />
        <g id="Layer_2_1_" className="st0">
          <rect x="585.5" y="123.2" className="st1" width={400} height={400} />
          <rect x={1063} y="123.2" className="st1" width={400} height={400} />
          <circle className="st2" cx="1262.5" cy="323.2" r={200} />
          <circle className="st2" cx="785.5" cy="323.2" r={200} />
          <g className="st3">
            <path className="st4" d="M900,385.4c6.7-14.1,13.8-8,13.8-38.6c0-17.5-9.2-29.7-18.4-32.2s-28.8-7-31.3-9.5c-0.2-0.2-0.9-0.7-2-1.5    c-15.5,33.3-30.8,61.7-31.6,63.1l-12.4,22.8l-12.4-22.8c-0.9-1.7-22.6-41.6-40.4-82.5c-4.5-10.4-6.6-20.6-6-30.2    c0.5-9.2,3.3-17.6,8.2-25.2c5.5-8.4,13.5-15.3,23.3-20.1c5-2.5,10.4-4.3,15.8-5.4l0.7-25.1c0,0,0.7-10.7-4-15    c-4.3-3.9-15.4-5.1-31.9,11c-17.2,16.9-43.2,35.9-42.9,51.2c0.4,18.8,15.8,26.1,15.3,36.2c-0.9,20.5-0.7,86.6,0.7,93.4    c2.4,12.3,10.1,6.2,16.8,10.8c7.5,5.1,7,27-11.7,31.3c-16,3.7-29.7-2.7-42.9,4.5c-8.2,4.5-19,14.7-20.8,16.5s-20.5,19.6-26.7,31.3    c-6.1,11.6,13.5,13.8,20.2,14.7c12,1.5,21.1-1.5,31-10.1s13.7-11.2,26-11.3c15-0.2,86.3,4.2,98.2,0.6c13.5-4,12.6-19.2,31.3-21.3    c6.7-0.8,35.9,5.7,39.6-8.4S893.2,399.5,900,385.4z" />
          </g>
          <g className="st3">
            <g>
              <path className="st5" d="M1295.1,215.3c-23.6,0-57.6,21.4-39.8,62.3c17.8,40.8,39.8,81.4,39.8,81.4s22.1-40.6,39.8-81.4     C1352.7,236.7,1318.7,215.3,1295.1,215.3z" />
              <g>
                <path className="st6" d="M1283.7,202.4l0.7-25.1c0,0,0.7-10.7-4-15c-4.3-3.9-15.4-5.1-31.9,11c-17.2,16.9-43.2,35.9-42.9,51.2      c0.4,18.8,15.8,26.1,15.3,36.2c-0.9,20.5-0.7,86.6,0.7,93.4c2.4,12.3,10.1,6.2,16.8,10.8c7.5,5.1,7,27-11.7,31.3      c-16,3.7-29.7-2.7-42.9,4.5c-8.2,4.5-19,14.7-20.8,16.5s-20.5,19.6-26.7,31.3s13.5,13.8,20.2,14.7c12,1.5,21.1-1.5,31-10.1      s13.7-11.2,26-11.3c15-0.2,86.3,4.2,98.2,0.6c13.5-4,12.6-19.2,31.3-21.3c6.7-0.8,35.9,5.7,39.6-8.4s-12.6-14.1-5.8-28.2      c6.7-14.1,13.8-8,13.8-38.6c0-17.5-9.2-29.7-18.4-32.2c-9.2-2.5-28.8-7-31.3-9.5c-0.2-0.2-0.9-0.7-2-1.5" />
              </g>
            </g>
            <circle className="st5" cx="1295.1" cy="265.1" r="16.7" />
          </g>
          <path className="st7" d="M818.1,216.3c-23.6,0-57.6,21.4-39.8,62.3c17.8,40.8,39.8,81.4,39.8,81.4s22.1-40.6,39.8-81.4   C875.8,237.7,841.7,216.3,818.1,216.3z M818.1,281.9c-9.2,0-16.7-7.5-16.7-16.7c0-9.2,7.5-16.7,16.7-16.7s16.7,7.5,16.7,16.7   C834.9,274.4,827.4,281.9,818.1,281.9z" />
        </g>
        <path className="st8" d="M143.3,83.9c0-0.3,0.2-0.5,0.5-0.5H224c0.3,0,0.5,0.2,0.5,0.5v1.6c0,0,0,2-4.1,2h-34.9h-38.1  c-4.1,0-4.1-2-4.1-2L143.3,83.9z" />
        <path className="st8" d="M215.7,83.3V41.5c0-1.2-0.9-2.1-2.1-2.1h-58.8c-1.2,0-2.1,1-2.1,2.1v41.8H215.7z" />
        <rect id="svg-concept" x="159.4" y="46.5" className="st8" width="49.2" height="31.8" />
        <path className="st8" d="M231.5,32.8C265.4,15.7,303.8,6,344.4,6c37.7,0,73.4,8.3,105.4,23.3" />
        <path className="st8" d="M107.4,175.5c8.1-23.8,19.8-46.1,34.3-66.1" />
        <path className="st8" d="M148.8,413c-17.6-22-31.6-47-41-74.2" />
        <path className="st8" d="M476.4,469.7c-38.3,23.8-83.4,37.5-131.8,37.5c-36.6,0-71.4-7.8-102.7-22" />
        <line className="st8" x1="157.8" y1="462.7" x2="225.7" y2="462.7" />
        <line className="st8" x1="191.8" y1="478.6" x2="191.8" y2="488.2" />
        <line className="st8" x1="206.9" y1="488.2" x2="176.7" y2="488.2" />
        <rect x="157.1" y="425.7" className="st8" width="69.2" height="52.9" />
        <g>
          <path id="svg-concept_2_" className="st9" d="M490.8,53.2C553.9,98.6,595,172.8,595,256.6c0,68.6-27.6,130.7-72.3,176.1" />
          <animate accumulate="none" additive="replace" attributeName="opacity" begin="1s" calcMode="linear" dur="2s" fill="remove" repeatCount="indefinite" restart="always" values="0;3;0">
          </animate>
        </g>
        <g>
          <path id="svg-concept_3_" className="st9" d="M438.7,102.6c55.7,30.3,93.6,89.3,93.6,157.2c0,51.8-22,98.3-57.2,131" />
          <animate accumulate="none" additive="replace" attributeName="opacity" begin="2s" calcMode="linear" dur="2s" fill="remove" repeatCount="indefinite" restart="always" values="0;3;0">
          </animate>
        </g>
        <g>
          <path id="svg-concept_4_" className="st9" d="M405.5,149.8c37.3,22.5,62.1,63.3,62.1,110c0,39.8-18.2,75.5-46.6,99.1" />
          <animate accumulate="none" additive="replace" attributeName="opacity" begin="3s" calcMode="linear" dur="2s" fill="remove" repeatCount="indefinite" restart="always" values="0;3;0">
          </animate>
        </g>
        <circle id="svg-concept_5_" className="st10" cx={94} cy="256.6" r="82.2" />
        <circle className="st8" cx="183.1" cy="66.9" r="59.2" />
        <circle className="st8" cx="191.8" cy="453.7" r="59.2" />
        <circle className="st11" cx="339.7" cy="259.1" r={88} />
        <g>
          <g>
            <g>
              <path className="st12" d="M352.9,214.6c-9.7,0-23.6,8.8-16.3,25.5c7.3,16.7,16.3,33.3,16.3,33.3s9-16.6,16.3-33.3     S362.5,214.6,352.9,214.6z" />
              <g>
                <path className="st13" d="M348.2,209.4l0.3-10.3c0,0,0.3-4.4-1.6-6.1c-1.8-1.6-6.3-2.1-13,4.5c-7,6.9-17.7,14.7-17.6,20.9      c0.2,7.7,6.5,10.7,6.3,14.8c-0.4,8.4-0.3,35.4,0.3,38.2c1,5,4.1,2.5,6.9,4.4c3.1,2.1,2.9,11-4.8,12.8      c-6.6,1.5-12.2-1.1-17.6,1.9c-3.4,1.9-7.8,6-8.5,6.8c-0.8,0.8-8.4,8-10.9,12.8s5.5,5.7,8.3,6c4.9,0.6,8.7-0.6,12.7-4.1      s5.6-4.6,10.7-4.6c6.1-0.1,35.3,1.7,40.2,0.3c5.5-1.6,5.2-7.9,12.8-8.7c2.8-0.3,14.7,2.3,16.2-3.4c1.5-5.8-5.1-5.8-2.4-11.5      c2.8-5.8,5.6-3.3,5.6-15.8c0-7.2-3.8-12.2-7.5-13.2s-11.8-2.9-12.8-3.9c-0.1-0.1-0.4-0.3-0.8-0.6" />
              </g>
            </g>
            <circle className="st12" cx="352.9" cy={235} r="6.9" />
          </g>
        </g>
        <g>
          <path className="st14" d="M89.9,214.1c-0.4-7.8,4.4-9.8,9.4-10.8c0.7-0.1,1.8,0.5,2.2,1.1c2.4,3.8,4.6,7.7,6.9,11.6   c0.9,1.5,0.7,2.9-0.7,4.1c-1.6,1.5-3.1,3.1-4.8,4.5c-1.4,1.1-1.5,2.2-0.8,3.8c1.9,4.8,4.8,8.9,8.6,12.2c3.9,3.3,8.2,6,12.3,9   c1,0.7,1.7,0.5,2.5-0.4c1.7-1.9,3.5-3.8,5.2-5.7c1.4-1.5,2.9-1.7,4.6-0.6c3.6,2.3,7.1,4.6,10.7,6.9c1.3,0.8,1.5,1.9,1.3,3.3   c-0.8,4.2-3.5,6.9-7.2,8.6c-1,0.4-3.2,0-4.1-0.1c-10.9-1.2-21.1-4.4-29.7-11.6C95.4,240.4,90.8,228.1,89.9,214.1z" />
          <path className="st14" d="M125.3,310c-46.8,0-84.8-38-84.8-84.8c0-3.8,3.1-7,7-7s7,3.1,7,7c0,39.1,31.8,70.9,70.9,70.9c3.8,0,7,3.1,7,7   C132.2,306.8,129.1,310,125.3,310z" />
          <path className="st14" d="M125.3,310c-46.8,0-84.8-38-84.8-84.8c0-3.8,3.1-7,7-7s7,3.1,7,7c0,39.1,31.8,70.9,70.9,70.9c3.8,0,7,3.1,7,7   C132.2,306.8,129.1,310,125.3,310z" />
          <path className="st14" d="M127.1,283.8c-33.3,0-60.4-27.1-60.4-60.4c0-3.8,3.1-7,7-7c3.8,0,7,3.1,7,7c0,25.6,20.9,46.5,46.5,46.5   c3.8,0,7,3.1,7,7C134,280.7,130.9,283.8,127.1,283.8z" />
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
                             <h2 className="text-center">What Is A National Number?</h2>
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
                             <h4>Benefits of A National Number</h4>
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

