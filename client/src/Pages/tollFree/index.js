import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid  } from '@material-ui/core';
import './index.css'
import ReviewBox from '../../components/ReviewBox'
import 'react-multi-carousel/lib/styles.css';
import { isMobile  } from "react-device-detect";
import AllFeatureIcons from '../../components/AllFeatureIcons'
import Footer from '../../components/Footer'
import {Helmet} from "react-helmet";



export const TollFree = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>               
                <title>Virtual National & International Toll-Free Numbers For Business</title>
                <meta name="description" content="A virtual toll-free number is a very powerful business tool. These numbers are telephone numbers that allow callers to contact businesses without paying for the call." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5">
                             <h1 className="heading">Toll-Free Numbers</h1> 
                             <p className="subheading">Making customer service a top priority</p>
                                                      
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 {/* <img src={personalizedVoicemail400} className="img-fluid" alt="Buy Phone" /> */}
                                 {/* SVG */}

                                 <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 611.6 522.7" style={{enableBackground: 'new 0 0 611.6 522.7'}} xmlSpace="preserve" className="svg -custom-element-right" src="patterns/13_Toll-Free.svg" alt="National">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:none;stroke:#4A5866;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:#4A5866;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st2{fill:none;stroke:#EE5586;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st3{fill:none;stroke:#4A5865;stroke-width:4;stroke-miterlimit:10;}\n\t.st4{fill:#FFFFFF;}\n" }} />
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
        <circle className="st3" cx="339.7" cy="259.1" r={88} />
        <g>
          <g>
            <g>
              <g>
                <path className="st3" d="M395,258.1v16c0,8.5-4.9,15.5-10.9,15.5h-3.3v5.5c0,9.4-7.6,17-17,17h-5c-0.7,2.7-3.2,4.8-6.1,4.8h-11.6      c-3.5,0-6.3-2.8-6.3-6.3V308c0-3.5,2.8-6.3,6.3-6.3h11.6c2.9,0,5.4,2,6.1,4.7h5c6.2,0,11.3-5.1,11.3-11.3v-5.5h-5.3      c-1.8,0-3.2-2.1-3.2-4.6v-37.9c0-2.5,1.4-4.6,3.2-4.6h0.8v-2.1c0-14.7-11.9-26.6-26.6-26.6h-8.3c-14.7,0-26.6,11.9-26.6,26.6      v2.1h0.3c1.8,0,3.2,2.1,3.2,4.6V285c0,2.5-1.4,4.6-3.2,4.6h-14.2c-6,0-10.9-7-10.9-15.5v-16c0-8.5,4.9-15.5,10.9-15.5h1.3v-2.1      c0-21.6,17.6-39.2,39.2-39.2h8.3c21.6,0,39.2,17.6,39.2,39.2v2.1h0.8C390.1,242.6,395,249.6,395,258.1z" />
              </g>
            </g>
          </g>
        </g>
        <g>
          <path className="st4" d="M89.9,214.1c-0.4-7.8,4.4-9.8,9.4-10.8c0.7-0.1,1.8,0.5,2.2,1.1c2.4,3.8,4.6,7.7,6.9,11.6   c0.9,1.5,0.7,2.9-0.7,4.1c-1.6,1.5-3.1,3.1-4.8,4.5c-1.4,1.1-1.5,2.2-0.8,3.8c1.9,4.8,4.8,8.9,8.6,12.2c3.9,3.3,8.2,6,12.3,9   c1,0.7,1.7,0.5,2.5-0.4c1.7-1.9,3.5-3.8,5.2-5.7c1.4-1.5,2.9-1.7,4.6-0.6c3.6,2.3,7.1,4.6,10.7,6.9c1.3,0.8,1.5,1.9,1.3,3.3   c-0.8,4.2-3.5,6.9-7.2,8.6c-1,0.4-3.2,0-4.1-0.1c-10.9-1.2-21.1-4.4-29.7-11.6C95.4,240.4,90.8,228.1,89.9,214.1z" />
          <path className="st4" d="M125.3,310c-46.8,0-84.8-38-84.8-84.8c0-3.8,3.1-7,7-7s7,3.1,7,7c0,39.1,31.8,70.9,70.9,70.9c3.8,0,7,3.1,7,7   C132.2,306.8,129.1,310,125.3,310z" />
          <path className="st4" d="M125.3,310c-46.8,0-84.8-38-84.8-84.8c0-3.8,3.1-7,7-7s7,3.1,7,7c0,39.1,31.8,70.9,70.9,70.9c3.8,0,7,3.1,7,7   C132.2,306.8,129.1,310,125.3,310z" />
          <path className="st4" d="M127.1,283.8c-33.3,0-60.4-27.1-60.4-60.4c0-3.8,3.1-7,7-7c3.8,0,7,3.1,7,7c0,25.6,20.9,46.5,46.5,46.5   c3.8,0,7,3.1,7,7C134,280.7,130.9,283.8,127.1,283.8z" />
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
                             <h2 className="text-center">What Is A Toll-Free Number?</h2>
                             <p className="text-center">A virtual toll-free number is a very powerful business tool. These numbers are telephone numbers that allow callers to contact businesses without paying for the call.</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How Do They Work?</h4>
                             <p>When people dial your toll-free number, calls get automatically redirected to a telephone number of your choice. With over 40+ countries to choose from, your business can become free to reach globally.</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>Benefits of A Toll-Free Number</h4>
                             <p>Research shows that toll-free numbers promote positive customer service and can quickly increase the number of phone enquiries you receive. A free to use means of communication helps businesses gain credibility and recognition in the current market, which positively affects sales.</p>
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

