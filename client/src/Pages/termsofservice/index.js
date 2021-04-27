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


export const TermsOfServices = () => {
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div>
           
              {/* Meta Update */}
            <Helmet>                
                <title>Terms of service - PhoneBounce</title>
                <meta name="description" content="Please read these Terms of Service carefully before using the Services. These Terms of Service apply to all users of the Services." />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3 min-height-725" className={isMobile ? 'main-wrapper pb-5' : 'main-wrapper pb-3 min-height-725'}>
                 <Container>
                     <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                    <h1 className="heading text-center ">Terms Of Service</h1> 
                    </Grid>
                     </Grid>
                 </Container>
             </Box>           

        {/* All in One SoftPhone */}

        <Box className={isMobile ? 'px-3 py-5 service-help' : 'px-5 py-5 service-help'}>
                 
                 <Container className={isMobile ? "mt-3 px-3" : "mt-3 px-5 "}>
                     <Grid container className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                        <Grid item xs={12} md={12} className="terms-text">
                        <h2>Terms of use</h2>
                            <p>Welcome to PhoneBounce.com Terms of Use. This is an important legal document and affects your legal rights, so please read it carefully. In these Terms of use "we, our, us, the company" refers to PhoneBounce Ltd. Our company is a telecoms company which is operating in any market where someone may wish to have a phone number but not necessarily put their mobile.</p>
                            <p><i>“PhoneBounce Ltd.”</i> means PhoneBounce Ltd., address: 67 Hoo Road, Meppershall, Bedfordshire. Sg17 5LP. Manager: Stephen Robinson, e-mail:Enquires@PhoneBounce.com Telephone number: 08455480800</p>
                            <p><i>“Website”</i> means http://www.phonebounce.com/ as well as other PhoneBounce Ltd. websites that may exist in the future. Those Terms of use and Privacy Policy applies for both PhoneBounce Ltd. website and mobile app.</p>
                            <p><i>“Product/s”</i> means a service plan and any additional services to which the user is subscribed or we offer on our website and/or our mobile app. Products are collectively the free products and paid products.</p>
                            <p><i>“User”</i> means the person, partnership or company who use this website and request a product.</p>
                            <h2>Acceptance</h2>
                            <p>In order to use this website and/or mobile app with our products, the user must accept these Terms of use. By accessing this webite and by clicking “Buy Number”, you are agreeing to the following Terms of use. If you do not agree to these Terms of use, then please do not use this website and/or mobile app.</p>
                            <p>PhoneBounce Ltd. can make changes to these Terms of use from time to time. We advise users to check this page regularly for any changes to the terms of use, which might be applied without prior notice. The changes will be effective when published.</p>
                            <p>According to this Terms of use PhoneBounce Ltd. has the right to:</p>
                            <p className="pl-3">record all calls and text messages (made and received) referring to the company products;
                                keep all log in information provided by the users of our website and/or mobile app.</p>
                            <h2>Intellectual property</h2>
                            <p>PhoneBounce Ltd. shall retain ownership of all content and information on this website and/or mobile app. By content we mean, but not limited to,all images, text, graphics, names, logos, trademarks, software patents, registered designs and any other automatic intellectual property rights. The content of this website is protected under the UK Intellectual Property Act 2014. By using this website the user agrees to respect our intellectual property rights. The content of this website may not be copied, reproduced, transmitted, modified, published, uploaded or distributed in any way, without PhoneBounce Ltd. prior written permission.</p>
                            <h2>Limitation of liability</h2>
                            <p>PhoneBounce Ltd. shall not be liable to any user for any loss or damage which may arise from the usage of any of the information on this website and/or mobile app or other websites of PhoneBounce Ltd. The company shall not be held responsible for any disruption, interruption or delay caused by any failure of or inadequacy in any of the items which we could not manage and control. PhoneBounce Ltd. cannot guarantee that the software, products, the website or the mobile app will always function without delay or errors. Many factors may impact the quality of your communications and usage of our software, products, the website or the mobile app, and may result in the failure of your communications including but not limited to: your local network,your internet service provider, firewall, the public internet, the public switched telephone network and your power supply.</p>
                            <h2>Third party sites</h2>
                            <p className="pl-2">Third parties may offer products or services (named “third party content”) via our website and/or our mobile app. Whilst we have no legal obligation to monitor third party information listed on our website and we accept no liability for any losses or damages occurred due to a third party content. When we find any information on our website is in violation of the UK Law, we will make every effort for this to be promptly removed. Our liability in that relation shall commence at the time we become aware of the violation.
This website may include hyperlinks to other third party websites. We are not responsible for such third party websites or the availability of such websites and do not endorse any content or data on such third party websites. Your use of each of these third party websites is subject to the terms and conditions posted on the applicable website.</p>
                            <h2>Our Products</h2>
                            <p>PhoneBounce Ltd. products may only be used for lawful purposes. Transmission, distribution or storage of any information or data in violation of UK law is prohibited.</p>
                            <p>PhoneBounce Ltd. provide redirection telephone numbers via our website and mobile app. We will make all reasonable efforts to maintain equipment suitable for handling and terminating calls. Our users can purchase our products through the mobile app, this website or via SMS. For the purposes of this website, “the products” are defined as a service plan and any additional service plans to which you are subscribed. The applicable plans are:</p>
                            <p className="pl-3"><b>Basic plan:</b> The basic plan includes 1) a dedicated telephone number of user’s choice from PhoneBounce Ltd. existing inventory; 2) a certain amount of credit; 3) calls, messages and video calls out as the virtual number. A telephone number can be purchased by the website, mobile app or via SMS. The credit can be put towards phone minutes incoming and outgoing. More credits can be purchased from inside the mobile app. When choosing the basic plan all your calls to the virtual number are then routed to your mobile. If the user is using the app, the app will ring. If not, the user’s real mobile phone will ring. Basic plan is paid on a monthly basis. The value of the Basic package depends on the country the user wish to purchase a number and the type of number the user wish to call.</p>
                            <p className="pl-3"><b>Additional plans:</b> PhoneBounce Ltd. offers to his users 4 additional plans which are relevant to the country of use. Each of them offers a certain amount of additional credit (5, 10, 15 and 20.) The additional credit is added to your existing account. The currency of the additional package is depending on the country of use. More detailed information you may find on our website.</p>
                           <p>Your plan begins upon activation and automatically renews on a monthly basis, until terminated on notice by either party, notwithstanding other termination rights indicated herein, and notwithstanding post-termination rights and obligations hereunder.

</p>
                            <h2>Fees and subscriptions</h2>
                            <p>The fees for our products will be confirmed to you before you complete a purchase. Fees for the selected product are due monthly subscription, in accordance with your plan, and will be billed by PhoneBounce Ltd. Your activation fee and monthly subscription, as applicable, are payable in advance and are completely non-refundable unless such termination is validly effected by the user invoking its right to during the 14 - day cancellation period in accordance with the provisions of section <i>“Refund Policy”.</i></p>
                            <p>The user agrees to pay all fees for the use of the products at the prices then in effect according to the chosen plan. For current pricing information for our products, visit our website.</p>
                            <p>PhoneBounce Ltd. reserves the right to change prices or institute new charges for access to or use of the products. All changes will be posted on this website. The users are responsible for regularly reviewing such pricing information to obtain timely notice of such changes.</p>
                            <p>PhoneBounce Ltd. may collect VAT or other indirect taxes at the appropriate rate (as per applicable tax rules) at the time of purchase. 20% UK VAT generally applies if you are located in the EU and the Products are purchased and used in the EU. The territories in the EU set out below are outside the scope of EU VAT under Council Directive 2006/112/EC on the common system of VAT, as amended.The user must use our products and our website and/or mobile app in accordance with the laws of where you are located. In some countries may exist some restrictions on the usage of our products and our website and/or mobile app. It is your responsibility to ensure that you are legally allowed to use them in accordance with the your national legislation.</p>
                            <h2>Payment</h2>
                            <p>PhoneBounce Ltd. offers to the users few payment methods. The company does not warrant that all methods of payment are available at all the time. You can pay for select product using your credit/debit card or premium SMS. You shall be informed that we do not store the required bank information (e.g. credit/debit cards, expiry date, 3-digit code and other bank details). Such information is not stored on our website and/or mobile app but on third party processing site (www.stripe.com). We cannot guarantee that your bank information will be used in accordance with our Terms of use. We do not accept any liability for damages, losses and leak of data.</p>
                            <p>We reserve the right to remove or amend the available payment methods at its sole discretion.</p>
                            <h2>Termination and cancellation</h2>
                            <p>PhoneBounce Ltd. could terminate the relationship with the user immediately upon notifying by email or phone if:</p>
                            <p className="pl-2">The user breach Terms of Use and/or Privacy Policy on our website and fail to remedy the breach within a reasonable time specified in a written notice from us to do so;</p>
                            <p className="pl-2">The user makes, or offers to make, an arrangement with his creditors; the user is in bankruptcy; the user is not able to pay the selected product;</p>
                            <p className="pl-2">in the event that a liquidator, trustee in bankruptcy, receiver or administrator is appointed in respect of the assets and/or business of the user or if theuser is deemed insolvent, or if any licence under which the user operates its business is revoked, amended or ceases to be valid;</p>
                            <p className="pl-2">If the user exceed the monthly minutes usage;</p>
                            <p>We may terminate the relationship with the user at any time without liability to the user if any underlying arrangement with other operators or suppliers is terminated for whatever reason.</p>
                            <p>If you wish to terminate your contract, please contact us and we will charge you a fee as set out in your contract.</p>
                            <p>In the case of 1 and 2 we will not make refunds upon termination or suspension of any products. The user is responsible for all charges under the account that would have been payable but for cancellation, termination or suspension of his plan.</p>
                            <p>If you decide to cancel your order or agreement before we have provided the services, you may do so without charge within 10 working days after your order is placed. After then we will charge you an administration fee as set out in your contract.</p>
                            <h2>Refund Policy</h2>
                            <p>When you purchase products you will be entitled to a cancellation period of fourteen (14) days unless you have made use of the products in any way, in which case the cancellation period will be extinguished and your purchase cannot be cancelled or refunded.</p>
                            <p>If you believe that PhoneBounce Ltd. has charged you in error, you must contact us within 60 days of such charge. No refunds will be given for any charges more than 60 days old. Our contacts you may find in section <i>“Civil Subphoenas Policy”.</i></p>
                            <h2>Civil Subphoenas Policy</h2>
                            <p>All civil subpoenas should be directed to:</p>
                            <p>PhoneBounce Ltd.</p>
                            <p>Address: United Kingdom, 67 Hoo Road, Meppershall, Bedfordshire, Sg17 5LP</p>
                            <p>Manager: Stephen Robinson</p>
                            <p>Mail: Enquires@PhoneBounce.com</p>
                            <p>Telephone number: (650) 446-6617</p>
                            <h2>Governing Law</h2>
                            <p>This Terms of use shall be governed by and construed and interpreted in accordance with United Kingdom Law and the parties hereby submit to the jurisdiction of the English Courts.</p>
                            <p><i>These Terms of Use are effective on April 21st, 2017, for current users, and upon acceptance for new users.</i></p>
                            
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
