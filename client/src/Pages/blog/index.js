import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import ReviewBox from '../../components/ReviewBox'
import BlogCard from '../../components/Blogcard'
import 'react-multi-carousel/lib/styles.css';
import { isMobile  } from "react-device-detect";
import Footer from '../../components/Footer'
import cheapIntCall from '../../assets/images/CheapinternationalCalls.jpg'
import benefitsOfVirtual from '../../assets/images/BenefitsOfVirtualNumbers.jpeg'
import cheapFnF from '../../assets/images/CheapFriendsAndFamilyCalls.png'


import {Helmet} from "react-helmet";


export const Blog = () => {

    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>           
              {/* Meta Update */}
            <Helmet>                
                <title>Blog | PhoneBounce News & Updates</title>
                <meta name="description" content="Keep up with the latest app updates, announcements, information, and new features on the phonebounce app. Check back here regularly to see what's new." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={12} lg={8}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Blog</h1>                             
                             <p className="subheading">Hi, Welcome to my blog. Here are some of my articles about all things around virtual numbers. Please reach put to me if I can be of any help or if you have an idea for a great article. Have a great day and stay safe. xxx.</p>
                             </div>
                         </Grid>                        
                     </Grid>
                 </Container>

             </Box>  

        {/* All in One SoftPhone */}

        <Box className="service-help  pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                        <Grid container  spacing={5} alignItems="stretch">
                            <Grid item xs={12} md={6}>
                                <div>
                                    <BlogCard 
                                    img={cheapIntCall}
                                    title='Cheap International Calls' 
                                    description="Transforming Your Cellphone to Make Cheap International Calls Do you need to make cheap international calls, perhaps to people living in several different countries or are you looking for unlimited international calling but haven't found a way to make this happen?"  
                                    url='/cheap-international-calls'
                                    />
                                </div>
                                
                            </Grid>
                            <Grid item  xs={12} md={6}>
                                     <div>
                                     <BlogCard 
                                    img={benefitsOfVirtual}
                                    title='Benefits Of Virtual Numbers' 
                                    description="If the world is your oyster, a virtual phone system that is globally available is a must have. A virtual phone number is ideal for digital nomads, business owners, travellers, or those living, working or studying abroad.With an international calling app, your friends, relatives, or clients can call you or message you using a local number, and all calls and messages will be securely redirected to your personal phone."  
                                    url='/benefits-of-virtual-numbers'
                                    />
                                    </div>
                               
                            </Grid>
                            <Grid item  xs={12} md={6}>
                                     <div>
                                     <BlogCard 
                                    img={cheapFnF}
                                    title='Friends and Family' 
                                    description="International phone calls are becoming a necessity in today's connected world. Whether you need international long distance calling for your business development or for private use, the expense can quickly add up. This is where PhoneBounce comes to the rescue."  
                                    url='/friends-and-family'
                                    />
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

