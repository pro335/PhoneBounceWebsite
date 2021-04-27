import React, {useEffect, useState, useRef} from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/NewHeader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import { StickyContainer, Sticky } from 'react-sticky';
import './index.css'
import ReviewBox from '../../components/ReviewBox'
import 'react-multi-carousel/lib/styles.css';
import { isMobile  } from "react-device-detect";
import Footer from '../../components/Footer'
import { FaQuestionCircle, FaQuestion } from 'react-icons/fa';
import modelImage from '../../assets/images/model.png'

import {Helmet} from "react-helmet";


export const Faq = () => {
    const [billing, setBilling ] = useState(true);
    const [numbers, setNumbers ] = useState(true);
    const [messages, setMessages ] = useState(true);
    const [calls, setCalls ] = useState(true);
    const [videos, setVideos ] = useState(true);
    useEffect(() => {
        /* ComponentDidMount code */
        window.scrollTo(0, 0);
      }, []);
     
    const showAll = (e) => {
        e.preventDefault();
        setNumbers(true)
        setBilling(true)
        setMessages(true)
        setCalls(true)
        setVideos(true)
    }  
       
    const showBilling = (e) => {
        e.preventDefault();
        setNumbers(false)
        setBilling(true)
        setMessages(false)
        setCalls(false)
        setVideos(false)
    }  
    const showNumbers = (e) => {
        e.preventDefault();
        setNumbers(true)
        setBilling(false)
        setMessages(false)
        setCalls(false)
        setVideos(false)
    }  
    const showMessages = (e) => {
        e.preventDefault();
        setNumbers(false)
        setBilling(false)
        setMessages(true)
        setCalls(false)
        setVideos(false)
    }  
    const showCalls = (e) => {
        e.preventDefault();
        setNumbers(false)
        setBilling(false)
        setMessages(false)
        setCalls(true)
        setVideos(false)
    }  
    const showVideos = (e) => {
        e.preventDefault();
        setNumbers(false)
        setBilling(false)
        setMessages(false)
        setCalls(false)
        setVideos(true)
    }  

    return (
        <div>
             {/* <Header /> */}
              {/* Meta Update */}
            <Helmet>                
                <title>Frequently Asked Questions (FAQs) – PhoneBounce</title>
                <meta name="description" content="If you are looking for quick answers to the most important questions about our application, our FAQs are here to help. You can email us at suppport@PhoneBounce.com" />
            </Helmet>    
    {/* Meta Update */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Frequently Asked Questions</h1>                             
                             <p className="subheading">Here are a sample of the most frequently asked questions. Please get in touch if there is anything you would like to know.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-0">
                                 <img src={modelImage} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>  

        {/* All in One SoftPhone */}

        <Box className="service-help  pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                        <Grid container  spacing={5}>                     
                            
                                 <Grid item xs={12} md={4} className="sticky">
                                 <div className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow sticky"}>
                                         <h4>FAQ.</h4>
                                         <hr />
                                         <div className="heading-aside pt-2 active">
                                             <a href=""  className="faq-ques-filter" onClick={(e) => showAll(e)}>
                                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" className="svg mr-3 faq-ques" src="fonts/svg/select.svg" alt="Dedicated Server">
                                             <title>select</title>
                                             <path fill="#5e686c" d="M14.9 8.363h-5.906c-0.231 0-0.425-0.188-0.425-0.425v-5.906c0-0.231 0.188-0.425 0.425-0.425h5.906c0.231 0 0.425 0.188 0.425 0.425v5.906c0 0.231-0.188 0.425-0.425 0.425zM9.412 7.513h5.063v-5.063h-5.063v5.063z"></path>
                                             <path id="svg-ico" d="M14.9 19.356h-5.65c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h5.231v-5.063h-5.063v2.106c0 0.231-0.188 0.425-0.425 0.425s-0.425-0.188-0.425-0.425v-2.531c0-0.231 0.188-0.425 0.425-0.425h5.906c0.231 0 0.425 0.188 0.425 0.425v5.919c0 0.231-0.188 0.419-0.425 0.419z"></path>
                                             <path fill="#5e686c" d="M14.9 30.356h-5.906c-0.231 0-0.425-0.188-0.425-0.425v-5.906c0-0.231 0.188-0.425 0.425-0.425h5.906c0.231 0 0.425 0.188 0.425 0.425v5.906c0 0.238-0.188 0.425-0.425 0.425zM9.412 29.512h5.063v-5.063h-5.063v5.063z"></path>
                                             <path fill="#5e686c" d="M31.137 3.675h-13.5c-0.231 0-0.425-0.188-0.425-0.425 0-0.231 0.188-0.425 0.425-0.425h13.506c0.231 0 0.425 0.188 0.425 0.425-0.006 0.237-0.194 0.425-0.431 0.425z"></path>
                                             <path fill="#5e686c" d="M27.8 6.287h-10.125c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h10.131c0.231 0 0.425 0.188 0.425 0.425s-0.194 0.425-0.431 0.425z"></path>
                                             <path id="svg-ico" d="M31.137 14.912h-13.5c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h13.506c0.231 0 0.425 0.188 0.425 0.425s-0.194 0.425-0.431 0.425z"></path>
                                             <path id="svg-ico" d="M27.8 17.525h-10.125c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h10.131c0.231 0 0.425 0.188 0.425 0.425s-0.194 0.425-0.431 0.425z"></path>
                                             <path fill="#5e686c" d="M31.137 26.156h-13.5c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h13.506c0.231 0 0.425 0.188 0.425 0.425s-0.194 0.425-0.431 0.425z"></path>
                                             <path fill="#5e686c" d="M27.762 28.762h-10.125c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h10.131c0.231 0 0.425 0.188 0.425 0.425s-0.194 0.425-0.431 0.425z"></path>
                                             <path fill="#5e686c" d="M7.025 25.050c-0.006 0-0.019 0-0.025 0-0.188-0.012-0.344-0.15-0.381-0.331l-1.037-4.762-4.763-1.038c-0.181-0.038-0.319-0.194-0.331-0.381s0.1-0.363 0.275-0.425l9.613-3.5c0.156-0.056 0.325-0.019 0.444 0.1s0.156 0.287 0.1 0.444l-3.494 9.619c-0.069 0.163-0.225 0.275-0.4 0.275zM2.413 18.4l3.6 0.788c0.162 0.038 0.287 0.163 0.325 0.319l0.787 3.6 2.688-7.4-7.4 2.694z"></path>
                                             </svg>
                                             All Answers
                                         </a></div>
                                         <div className="heading-aside pt-2">
                                         <a href="" className="filter-gray" onClick={(e) => showBilling(e)}>
                                         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" class="svg mr-3" src="fonts/svg/money.svg" alt="Billing">
                                         <title>money</title>
                                         <path fill="#5e686b" d="M9.494 6.688c0.063 0.175 0.225 0.287 0.412 0.287h11.837c0.181 0 0.35-0.119 0.413-0.287l1.094-3.094c0.2-0.5 0.137-1.063-0.163-1.506s-0.8-0.712-1.344-0.712h-3.081c-0.75-0.756-1.775-1.188-2.844-1.188s-2.088 0.431-2.838 1.188h-3.088c-0.537 0-1.037 0.269-1.338 0.712s-0.363 1.006-0.169 1.488l1.106 3.112zM9.281 2.569c0.144-0.206 0.369-0.331 0.619-0.331h3.225c0.006 0 0.019 0 0.025 0 0.125 0.006 0.25-0.044 0.344-0.144 0.588-0.663 1.438-1.038 2.325-1.038s1.731 0.381 2.325 1.038c0 0 0.006 0.006 0.006 0.006 0.006 0.006 0.012 0.013 0.019 0.019s0.012 0.006 0.012 0.013 0.012 0.013 0.019 0.013c0.006 0.006 0.012 0.006 0.019 0.013s0.012 0.006 0.019 0.013c0.006 0.006 0.012 0.006 0.019 0.013 0.006 0 0.012 0.006 0.019 0.006 0.006 0.006 0.012 0.006 0.019 0.013 0.006 0 0.012 0.006 0.019 0.006s0.012 0.006 0.025 0.006c0.006 0 0.012 0 0.019 0.006 0.038 0.013 0.075 0.013 0.113 0.013 0 0 0 0 0 0h3.269c0.25 0 0.481 0.119 0.619 0.331 0.144 0.206 0.169 0.462 0.069 0.712l-0.994 2.825h-11.219l-1-2.837c-0.1-0.231-0.069-0.481 0.069-0.694z"></path>
                                         <path fill="#5e686b" d="M22.025 8.581c-0.081-0.069-0.181-0.106-0.281-0.106h-11.844c-0.106 0-0.206 0.037-0.281 0.106-0.344 0.294-8.438 7.331-8.438 15.719 0 4.919 3.688 7.537 6.356 7.537h16.575c2.663 0 6.356-2.619 6.356-7.538-0.006-8.394-8.1-15.425-8.444-15.719zM24.106 30.969h-16.569c-2.3 0-5.487-2.319-5.487-6.669 0-7.456 7.013-14.050 8.019-14.956h11.506c1 0.9 8.019 7.494 8.019 14.956 0 4.35-3.188 6.669-5.488 6.669z"></path>
                                         <path id="svg-ico" fill="#ee5586" d="M16.256 12.781v-0.994c0-0.238-0.194-0.438-0.438-0.438-0.238 0-0.438 0.194-0.438 0.438v0.994c-2.069 0.219-3.688 1.975-3.688 4.1 0 2 1.531 3.656 3.688 4.063v5.875c-1.344-0.269-2.363-1.456-2.363-2.875 0-0.238-0.194-0.438-0.438-0.438-0.238 0-0.438 0.194-0.438 0.438 0 1.9 1.406 3.481 3.231 3.762v0.337c0 0.238 0.194 0.438 0.438 0.438 0.238 0 0.438-0.194 0.438-0.438v-0.306c1.962-0.15 3.512-1.794 3.512-3.794 0-1.894-1.394-3.363-3.512-3.744v-6.537c1.587 0.213 2.819 1.575 2.819 3.225 0 0.238 0.194 0.438 0.438 0.438s0.438-0.194 0.438-0.438c0-2.131-1.619-3.887-3.688-4.106zM12.569 16.881c0-1.644 1.231-3.012 2.819-3.225v6.4c-1.681-0.369-2.819-1.625-2.819-3.175zM18.9 23.944c0 1.519-1.163 2.769-2.637 2.919v-5.781c1.594 0.35 2.637 1.456 2.637 2.863z"></path>
                                         </svg>
                                            Billing
                                         </a>
                                         </div>
                                         <div className="heading-aside pt-2">
                                         <a href="" className="filter-gray" onClick={(e) => showNumbers(e)}>
                                         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" class="svg mr-3" src="fonts/svg/phone.svg" alt="Numbers">
 <title>phone</title>
 <path fill="#5e686b" d="M27.063 5.162c-2.6-2.6-6.050-4.2-9.706-4.5-0.238-0.019-0.438 0.156-0.456 0.387s0.156 0.438 0.387 0.456c3.456 0.281 6.719 1.794 9.175 4.256 5.737 5.738 5.737 15.069 0 20.806s-15.069 5.738-20.806 0c-2.775-2.775-4.306-6.469-4.306-10.4s1.531-7.625 4.306-10.4c2.469-2.469 5.738-3.981 9.206-4.256 0.231-0.019 0.406-0.219 0.387-0.456-0.019-0.231-0.213-0.406-0.456-0.387-3.669 0.294-7.125 1.888-9.738 4.5-2.938 2.938-4.556 6.844-4.556 11s1.619 8.063 4.556 11c3.031 3.031 7.019 4.55 11 4.55s7.969-1.519 11-4.55c6.069-6.069 6.069-15.938 0.006-22.006z"></path>
 <path id="svg-ico" fill="#ee5586" d="M17.563 16.262c-1.969 1.969-2.756 2.212-2.944 2.238l-0.113-0.113c-0.575-0.581-1.169-1.181-2.138-1.181-0.738 0-1.556 0.381-2.575 1.194-0.894 0.719-1.344 1.45-1.375 2.225-0.025 0.563 0.175 1.044 0.463 1.469-0.637 0.406-1.731 1.262-2.175 2.606-0.075 0.219 0.044 0.462 0.269 0.538 0.044 0.012 0.088 0.019 0.131 0.019 0.175 0 0.344-0.113 0.4-0.288 0.388-1.163 1.394-1.9 1.919-2.219 0.162 0.169 0.325 0.319 0.469 0.462l0.3 0.288c0.425 0.425 1.075 0.65 1.881 0.65 1.1 0 2.5-0.419 3.925-1.169 1.594-0.825 3.231-2.056 4.725-3.556 1.944-1.944 3.431-4.119 4.181-6.119 0.344-0.912 0.525-1.769 0.531-2.487 0.006-0.831-0.219-1.5-0.644-1.931-0.087-0.088-0.181-0.188-0.281-0.294-0.594-0.625-1.4-1.481-2.5-1.481-0.813 0-1.569 0.45-2.319 1.381-0.931 1.162-1.294 2.044-1.175 2.875 0.113 0.8 0.644 1.325 1.163 1.838l0.119 0.119c-0.012 0.1-0.094 0.35-0.363 0.762-0.369 0.569-1 1.306-1.875 2.175zM20.456 12.775l-0.181-0.181c-0.45-0.444-0.844-0.831-0.919-1.35-0.081-0.575 0.225-1.262 1-2.225 0.575-0.713 1.119-1.063 1.656-1.063 0.731 0 1.344 0.644 1.881 1.213 0.1 0.113 0.2 0.213 0.3 0.313 0.269 0.269 0.406 0.725 0.4 1.325-0.006 0.619-0.169 1.381-0.481 2.2-0.712 1.894-2.131 3.962-3.988 5.819-1.438 1.438-3 2.613-4.525 3.406-1.313 0.694-2.563 1.075-3.531 1.075-0.569 0-1.025-0.144-1.281-0.4l-0.313-0.3c-0.581-0.556-1.244-1.181-1.213-1.944 0.019-0.525 0.369-1.050 1.056-1.606 0.85-0.681 1.519-1.012 2.044-1.012 0.619 0 1.019 0.413 1.588 0.988 0.044 0.044 0.088 0.087 0.119 0.119 0.588 0.587 1.962-0.169 4.081-2.294 0.913-0.912 1.581-1.694 1.988-2.325 0.556-0.825 0.656-1.419 0.319-1.756z"></path>
 </svg>
                                            Numbers
                                         </a>
 
                                         </div>
                                         <div className="heading-aside pt-2">
                                         <a href="" className="filter-gray" onClick={(e) => showCalls(e)}>
                                         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" class="svg mr-3" src="fonts/svg/talk.svg" alt="Calls">
 <title>talk</title>
 <path fill="#5e686b" d="M12.5 9.188c0.25-0.2 0.537-0.344 0.856-0.425-0.344-2.888-3.088-5.119-6.369-5.119-0.25 0-0.456 0.2-0.456 0.456 0 0.25 0.206 0.456 0.456 0.456 2.888 0 5.3 1.981 5.481 4.506 0.006 0.037 0.012 0.081 0.031 0.125z"></path>
 <path fill="#5e686b" d="M8.525 14.044c-0.069-0.019-0.137-0.019-0.206-0.006-1.094 0.238-2.269 0.175-3.325-0.188-0.106-0.037-0.219-0.031-0.325 0.012l-0.862 0.375-0.138-0.863c-0.019-0.119-0.081-0.225-0.181-0.3-1.269-0.919-1.994-2.275-1.994-3.713 0-2.656 2.462-4.819 5.494-4.819 0.25 0 0.456-0.206 0.456-0.456s-0.206-0.456-0.456-0.456c-3.531 0.006-6.406 2.575-6.406 5.738 0 1.675 0.806 3.244 2.219 4.331l0.15 0.925c0.006 0.231 0.131 0.444 0.331 0.55 0.1 0.056 0.219 0.081 0.325 0.081 0.1 0 0.194-0.025 0.263-0.069l1-0.425c1.031 0.325 2.156 0.406 3.231 0.238 0.063-0.35 0.213-0.675 0.425-0.956z"></path>
 <path id="svg-ico" fill="#ee5586" d="M26.181 28.925c-0.15 0-0.294-0.044-0.425-0.119l-2.056-0.875c-1.344 0.444-2.756 0.663-4.194 0.663-6.7 0-12.15-4.856-12.15-10.819 0-5.969 5.45-10.819 12.15-10.819s12.15 4.856 12.15 10.819c0 3.206-1.575 6.212-4.325 8.275l-0.331 2.125c0 0.381-0.369 0.75-0.819 0.75zM23.719 26.988c0.063 0 0.119 0.012 0.181 0.038l2.219 0.95 0.35-2.25c0.019-0.119 0.081-0.225 0.181-0.3 2.606-1.894 4.106-4.688 4.106-7.656 0-5.469-5.044-9.912-11.244-9.912s-11.244 4.444-11.244 9.912c0 5.463 5.044 9.912 11.244 9.912 1.4 0 2.762-0.225 4.063-0.669 0.044-0.019 0.094-0.025 0.144-0.025z"></path>
 </svg>
                                            Calls
                                         </a>
                                         </div>
                                         <div className="heading-aside pt-2">
                                         <a href="" className="filter-gray" onClick={(e) => showMessages(e)}>
                                         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" class="svg mr-3" src="fonts/svg/livechat.svg" alt="Messages">
 <title>livechat</title>
 <path fill="#5e686c" d="M12.819 9.137c-0.238 0-0.438-0.181-0.456-0.425-0.188-2.556-2.619-4.556-5.544-4.556-0.256 0-0.456-0.206-0.456-0.456s0.206-0.456 0.456-0.456c3.4 0 6.237 2.375 6.456 5.406 0.019 0.25-0.169 0.475-0.425 0.494-0.006-0.006-0.019-0.006-0.031-0.006z"></path>
 <path fill="#5e686c" d="M3.406 14.988c-0.106 0-0.225-0.025-0.325-0.081-0.206-0.113-0.331-0.325-0.337-0.556l-0.15-0.938c-1.425-1.1-2.237-2.688-2.237-4.381 0-3.194 2.906-5.787 6.475-5.787 0.256 0 0.456 0.206 0.456 0.456 0 0.256-0.206 0.456-0.456 0.456-3.063 0-5.556 2.181-5.556 4.869 0 1.456 0.737 2.819 2.013 3.75 0.1 0.069 0.163 0.181 0.181 0.3l0.138 0.875 0.875-0.375c0.106-0.044 0.219-0.050 0.331-0.012 1.069 0.363 2.263 0.431 3.362 0.188 0.244-0.056 0.494 0.1 0.55 0.35s-0.1 0.494-0.35 0.55c-1.2 0.262-2.506 0.213-3.688-0.156l-1.006 0.431c-0.081 0.037-0.175 0.063-0.275 0.063z"></path>
 <path id="svg-ico" fill="#ee5586" d="M26.219 28.794c-0.15 0-0.3-0.044-0.431-0.119l-2.081-0.887c-1.363 0.444-2.788 0.669-4.238 0.669-6.769 0-12.281-4.906-12.281-10.938s5.506-10.938 12.281-10.938c6.775 0 12.281 4.906 12.281 10.938 0 3.238-1.587 6.281-4.369 8.369l-0.337 2.144c0 0.394-0.369 0.762-0.825 0.762zM23.731 26.837c0.063 0 0.125 0.012 0.181 0.038l2.244 0.962 0.35-2.275c0.019-0.119 0.087-0.231 0.181-0.3 2.637-1.913 4.144-4.738 4.144-7.738 0-5.525-5.1-10.019-11.363-10.019s-11.363 4.494-11.363 10.019 5.1 10.019 11.363 10.019c1.413 0 2.794-0.231 4.106-0.675 0.056-0.025 0.106-0.031 0.156-0.031z"></path>
 <path fill="#5e686c" d="M24.563 14.988h-10.731c-0.256 0-0.456-0.206-0.456-0.456s0.206-0.456 0.456-0.456h10.731c0.256 0 0.456 0.206 0.456 0.456s-0.2 0.456-0.456 0.456z"></path>
 <path fill="#5e686c" d="M24.563 18.181h-10.731c-0.256 0-0.456-0.206-0.456-0.456s0.206-0.456 0.456-0.456h10.731c0.256 0 0.456 0.206 0.456 0.456s-0.2 0.456-0.456 0.456z"></path>
 <path fill="#5e686c" d="M24.563 21.313h-10.731c-0.256 0-0.456-0.206-0.456-0.456 0-0.256 0.206-0.456 0.456-0.456h10.731c0.256 0 0.456 0.206 0.456 0.456 0.006 0.25-0.2 0.456-0.456 0.456z"></path>
 </svg>
                                            Messages
                                         </a>
                                         </div>
                                         <div className="heading-aside pt-2">
                                         <a href="" className="filter-gray" onClick={(e) => showVideos(e)}>
                                         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32" class="svg mr-3" src="fonts/svg/video.svg" alt="Video">
                                         <title>video</title>
                                         <path fill="#5e686b" d="M19.256 29.012h-18.456c-0.244 0-0.438-0.194-0.438-0.438v-11.7c0-0.244 0.194-0.438 0.438-0.438h18.45c0.244 0 0.438 0.194 0.438 0.438v11.7c0.006 0.238-0.188 0.438-0.431 0.438zM1.238 28.137h17.581v-10.831h-17.581v10.831z"></path>
                                         <path id="svg-ico" fill="#ee5586" d="M31.387 27.131c-0.031 0-0.069-0.006-0.1-0.012l-8.213-1.969c-0.2-0.050-0.337-0.225-0.337-0.425v-3.944c0-0.2 0.137-0.375 0.331-0.425l8.213-2.038c0.125-0.031 0.269 0 0.375 0.081s0.169 0.206 0.169 0.344v7.95c0 0.131-0.063 0.262-0.169 0.344-0.075 0.063-0.169 0.094-0.269 0.094zM23.606 24.381l7.344 1.762v-6.838l-7.344 1.819v3.256z"></path>
                                         <path fill="#5e686b" d="M4.188 13c-1.688 0-3.056-1.375-3.056-3.056 0-1.688 1.369-3.056 3.056-3.056s3.063 1.369 3.063 3.056c0 1.681-1.375 3.056-3.063 3.056zM4.188 7.756c-1.206 0-2.181 0.981-2.181 2.181 0 1.206 0.981 2.188 2.181 2.188 1.206 0 2.188-0.981 2.188-2.188 0-1.2-0.981-2.181-2.188-2.181z"></path>
                                         <path fill="#5e686b" d="M14.887 13.213c-2.65 0-4.806-2.156-4.806-4.806s2.156-4.806 4.806-4.806c2.65 0 4.806 2.156 4.806 4.806s-2.156 4.806-4.806 4.806zM14.887 4.469c-2.169 0-3.931 1.763-3.931 3.931s1.762 3.931 3.931 3.931c2.169 0 3.931-1.762 3.931-3.931s-1.762-3.931-3.931-3.931z"></path>
                                         </svg>
                                               Videos
                                         </a>
                                         </div>
                                 </div>
                             </Grid>                         
                            
                            <Grid item  xs={12} md={8}>
                                <Grid container spacing={1}>
                                    {billing ? 
                                    <Grid item xs={12} className='mb-3'>
                                    <div className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"}>
                                        <h6>Billing <span className="float-right text-gray">[Questions 4]</span></h6>
                                        <hr />
                                        <a href="" className="faq-ques"><FaQuestionCircle /> How much are numbers?</a>
                                        <p className="faq-ans" >Numbers are priced based on country and type. Pick the country and type and we will show you the cost below. Each month includes around 1 hours worth of credit.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Are my credit card details held?</a>
                                        <p className="faq-ans" >No Credit card details are stored on our servers. By partnering with Stripe we use an industry leader in online payment to ensure your security. If you are using IOS then we use in app purchases and so all payment details are handled by Apple</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Is it done on a subscription?</a>
                                        <p className="faq-ans" >For numbers purchased on Android a subscription is set up for you. Under IOS this is not possible so the number is automatically stopped at the end of the month. We will remind you before thiis happens though giving you time to extend</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Can I close my account?</a>
                                        <p className="faq-ans" >Sure. We dont want you to but with no contracts you are in control. Remove a call or message, remove a number or even remove your account. We dont wish to trap you at all.</p>
                                    </div>
                                    </Grid>
                                     : ''
                                    
                                    }
                                    {numbers ?
                                    <Grid item xs={12} className='mb-3'>
                                    <div className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"}>
                                        <h6>Numbers <span className="float-right text-gray">[Questions 4]</span></h6>
                                        <hr />
                                        <a href="" className="faq-ques"><FaQuestionCircle /> What countries do you have numbers?</a>
                                        <p className="faq-ans" >Due to the laws governing phone numbers this is constantly changing. If you go to out purchase screen you can instantly get an up to date list. We check the suppliers inventory every fwe hours to ensure our lists are 100% up to date.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Why do certain numbers cost more?</a>
                                        <p className="faq-ans" >Due to type and availability sometimes the prices can fluctuate. We aim to source from the cheapest but ultimately you can search and pick the numbers which is right for you or your business.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> How come some countries are not shown?</a>
                                        <p className="faq-ans" >To keep things as simple as possible we only show numbers for which there is no address requirements. We will be extending this later for you to add your address and open up more possabilities. This will be coming in 2020...</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> How up to date are the numbers?</a>
                                        <p className="faq-ans" >We check number availability based on supplier, country and type every few hours 365 days of the year. We do this so you dont have to search for that perfect number.</p>
                                    </div>
                                    </Grid>
                                    : ""}
                                    {calls ?
                                    <Grid item xs={12} className='mb-3'>
                                    <div className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"}>
                                        <h6>Calls <span className="float-right text-gray">[Questions 5]</span></h6>
                                        <hr />
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Can I stop receiving calls?</a>
                                        <p className="faq-ans" >Sure you can. By simply swiping left you can chose not to be disturbed. This can be set for an individual person, a number you own (from the number profile) or all your numbers (from the left profile)</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> How much do calls cost?</a>
                                        <p className="faq-ans" >The cost of a call changes from contry to country. As you type in the number you wish to call we will show the price per minute to make that call.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> How long can a call last?</a>
                                        <p className="faq-ans" >When you initiate the call we take the amount credit you have and divide it by the cost per minute of the call. All calls are rounded to the nearest minute for billing.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Can I remove a call?</a>
                                        <p className="faq-ans" >Sure. For any call or message simply swipe left and click the trash can icon. You will be asked to confirm but once thats done it wil be removed forever.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Can I transcribe / translate a call?</a>
                                        <p className="faq-ans" >For any message you receive by clicking on it you will have the option to translate it. This translation will then be sent to you as a message for you to respond as you see fit.</p>
                                    </div>
                                    </Grid>
                                     :
                                    ""
                                    }
                                    {messages ? 
                                    <Grid item xs={12} className='mb-3'>
                                    <div className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"}>
                                        <h6>Messages <span className="float-right text-gray">[Questions 4]</span> </h6>
                                        <hr />
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Can I translate a message?</a>
                                        <p className="faq-ans" >Yes. For any message you receive by clicking on it you will have the option to translate it. You can reply to the message but with translation on we will translate it back to the original recipients own language allow you to talk to your customers in a language both of you are happy with</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> What happens when I reply to a translated message?</a>
                                        <p className="faq-ans" >If translation is turned on we will translate your reply back to the recipient in their own language.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Can I send an attachment?</a>
                                        <p className="faq-ans" >Im afriad that is not currently possible due to security concerns. This is something we are looking to trial is 2020.</p>
                                        <a href="" className="faq-ques"><FaQuestionCircle /> Can I tell if someone has received a message?</a>
                                        <p className="faq-ans" >Below each message, by the time you will see 1 or 2 ticks. One tick indicates the messsage has been sent. Two ticks indicate the message has been received as well.</p>
                                    </div>
                                    </Grid>: 
                                    ''}
                                    {videos ?
                                     <Grid item xs={12} className='mb-3'>
                                     <div className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"}>
                                         <h6>Videos <span className="float-right text-gray">[Questions 3]</span></h6>
                                         <hr />
                                         <a href="" className="faq-ques"><FaQuestionCircle /> How much does a 1 to 1 video call cost?</a>
                                         <p className="faq-ans" >1 to 1 video are free anywhere in the world. These are not routed by any servers and are 100% secure.</p>
                                         <a href="" className="faq-ques"><FaQuestionCircle /> How come 1 to 1 videos are not recorded?</a>
                                         <p className="faq-ans" >As these are done directly between two clients we have no ability to record. This is done on purpose to ensure your security as these calls are encrypted</p>
                                         <a href="" className="faq-ques"><FaQuestionCircle /> Can I find my saved meeting videos?</a>
                                         <p className="faq-ans" >You can find saved videos next to your calls and messages. These can be reviewed at any time you wish by clicking on them and pressing play</p>
                                         
                                     </div>
                                     </Grid>
                                     : ''}                                   

                                </Grid>
                               
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
