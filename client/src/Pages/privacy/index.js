import React, {useEffect} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import ReviewBox from '../../components/ReviewBox'
import 'react-multi-carousel/lib/styles.css';
import { isMobile  } from "react-device-detect";
import Footer from '../../components/Footer'
import {Helmet} from "react-helmet";


export const Privacy = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
           {/* Meta Update */}
            <Helmet>                
                <title>Privacy Policy - PhoneBounce</title>
                <meta name="description" content="This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3 min-height-725" className={isMobile ? 'main-wrapper pb-5' : 'main-wrapper pb-3 min-height-725'}>
                 <Container>
                     <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                    <h1 className="heading text-center ">Privacy Policy</h1> 
                    </Grid>
                     </Grid>
                 </Container>
             </Box>  

        

        {/* All in One SoftPhone */}

        <Box className={isMobile ? 'px-3 py-5 service-help' : 'px-5 py-5 service-help'}>
                 
                 <Container className={isMobile ? "mt-3 px-3" : "mt-3 px-5 "}>
                     <Grid container className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                        <Grid item xs={12} md={12} className="terms-text">
                        <h2>Privacy Policy</h2>
                            <p>In order to use this website and/or mobile app with our products, the user must accept these Privacy Policy. By accessing this webite and by clicking “Buy Number”, you are agreeing to the following Privacy Policy. If you do not agree to these Privacy Policy, then please do not use this website and/or mobile app.</p>
                            <p>PhoneBounce Ltd. can make changes to these Privacy Policy from time to time. We advise users to check this page regularly for any changes to the terms of use, which might be applied without prior notice. The changes will be effective when published.</p>
                            <p>By providing us with information on yourself and your contacts using our website and/or mobile app you are agreeing to this Privacy Policy. We reserve the right to change this Privacy Policy at anytime and therefore you should regularly check for new updates as continued use of the site indicates acceptance of the amended Privacy Policy.</p>
                            <h2>Legal Disclaimer</h2>
                            <p>This legal disclaimer applies to our website and mobile app, whether written, implied or otherwise available through the website and/or the mobile app. This includes, but is not limited to, any pages, comments or links, or anything written on any other pages of the site – be they actively available, cached or removed from the site for whatever reason. This applies to anything within the PhoneBounce Ltd. domain or any other domains owned or controlled by the company.</p>
                            <p>PhoneBounce Ltd. and its subsidiaries, affiliates, partners, employees and independent contractors make no representations regarding the information and products provided on this website. In no event shall the company be liable for any direct, indirect, special or consequential, punitive, incidental damages arising out of or connected in any way with the use of, or inability to use, any information on this website even if the company publishing has been advised of the possibility of such damages.</p>
                            <p>Though we make every effort to preserve user’s privacy, we may need to disclose or use personal information when required by law or where we have a good-faith belief that such disclosure is necessary to comply with a current judicial proceeding, a court order, legal process served on our website, or in order to investigate, prevent, or take action regarding illegal activity. In order to maintain the integrity of our network, we often cooperate with requests from these third party providers and/or requests from law enforcement or other governmental officials directed to these providers.</p>
                            <p>Users may wish to upload contacts to our network, at their own request individually or for all contacts, in return for credit. Contacts will not be automatically uploaded or shared with third parties in any other instance.</p>                           
                           <h2>Data Protection</h2>
                           <p>Users on our website and/or our app accept to provide the necessary data. We are eligible to collect your personal information (e.g. your telephone number, email address, description, avatar, social media details, contacts, made and received phone calls and text messages.) in order to provide you with our products more efficiently. If you do not want your personal data collected, please do not submit it to us. Your personal information will be secured by PhoneBounce Ltd. under the provisions of the Data protection act 1998 with all amendments, as well as European Directive 2002/58/EC amended by Directive 2009/136/EC. We shall make all efforts to protect your personal information, but please be aware that we are limited by inherent security risks which exist in transmitting data on the internet.</p>
                           <h2>Cookie policy</h2>
                           <p>When using our website, there may be cases of some information stored on your device. Usage of a cookie is in no way linked to any personally identifiable information while on our website and/or app.</p>
                            <p>We may store an information about the users that we collect through cookies, log files and third parties to create a profile of our users. A profile is stored information that we keep on individual users that details their viewing preferences. This profile may be used to tailor a user's visit to our website and/or app, and to direct pertinent marketing promotions to them. This information will be in the form of a ‘Cookie’ or similar file and is used by us or by third parties as our partners. We, as the owner of this webste, have no influence over third-parties sites and content, so we cannot restrict that.</p>
                            <p>Most internet browsers has an option to erase the cookies from your computer hard drive or from your mobile phone, block all cookies or receive a warning before a cookie is stored. Please refer to your browser's instructions or Help screen to learn more about these functions. You may refuse the use of cookies by selecting the appropriate settings on your browser.</p>
                            <p>You can find more information about “cookies” and how to block or remove them from most web browsers on the following website: http://www.aboutcookies.org Information about the International Chamber of Commerce United Kingdom (ICCUK) cookie guide can be found on the following website: http://www.international-chamber.co.uk/our-expertise/digitaleconomy</p>
                            <h2>Newsletters</h2>
                            <p>This website may send you an email newsletter in order to inform subscribers about products and services supplied by this website. Users can subscribe through an online automated process if they wish to do so but do so on their own responsibility. Some subscriptions may be manually processed through prior written notice. In compliance with UK Spam Laws and the Privacy and Electronic Communications Regulations 2003 users can unsubscribe at any time. That can be done through an automated system. The unsubscribing process is detailed at the footer of each email. If an automated un-subscription system is unavailable clear instructions will by given.</p>
                            <h2>Survey Serving Technology</h2>
                            <p>This app uses Pollfish SDK. Pollfish is an on-line survey platform, through which, anyone may conduct surveys. Pollfish collaborates with Developers of applications for smartphones in order to have access to users of such applications and address survey questionnaires to them. When a user connects to this app, a specific set of user’s device data (including Advertising ID which will may be processed by Pollfish only in strict compliance with google play policies- and/or other device data) and response meta-data is automatically sent to Pollfish servers, in order for Pollfish to discern whether the user is eligible for a survey. For a full list of data received by Pollfish through this app, please read carefully Pollfish respondent terms located at https://www.pollfish.com/terms/respondent. These data will be associated with your answers to the questionnaires whenever Pollfish sents such questionnaires to eligible users. By downloading the application you accept this privacy policy document and you hereby give your consent for the processing by Pollfish of the aforementioned data. Furthermore, you are informed that you may disable Pollfish operation at any time by using the Pollfish “opt out section” available on Pollfish website . We once more invite you to check the respondent’s terms of use, if you wish to have more detailed view of the way Pollfish works.</p>
                            <p>APPLE, GOOGLE AND AMAZON ARE NOT A SPONSOR NOR ARE INVOLVED IN ANY WAY IN THIS CONTEST/DRAW. NO APPLE PRODUCTS ARE BEING USED AS PRIZES.</p>
                            <h2>Governing Law</h2>
                            <p>This Privacy Policy shall be governed by and construed and interpreted in accordance with United Kingdom Law and the parties hereby submit to the jurisdiction of the English Courts.</p>
                            <p><i>These Privacy Policy are effective on April 21st, 2017, for current users, and upon acceptance for new users.</i></p>
                            
                        </Grid>

                     </Grid>                    
                 </Container>
             </Box>



        {/* All in One SoftPhone */}
                <Box className={isMobile ? 'px-2 review-terms' : 'px-4 review-terms'}>
                    <ReviewBox />
                    </Box>
          
                <div className="footer-dark">
                <Footer />
                </div>
                
                
        </div>
    )
}

