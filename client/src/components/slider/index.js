import React from 'react';
import './index.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import smallOffice from '../../assets/images/SmallOffice.jpg';
import holiday from '../../assets/images/On_Holiday.jpg';
import secureLady from   '../../assets/images/Secure_Dating_lady.jpg';
import movingHouse from   '../../assets/images/Moving_House.jpg';
import businessStarup from   '../../assets/images/Business_StartUp.jpg';


 
const fadeImages = [
    smallOffice,
    holiday,
    secureLady,
    businessStarup,
    movingHouse
];
 export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade arrows={false} pauseOnHover={false} canSwipe={true} Easing="ease" duration={4000} transitionDuration={1000}>
        <div className="each-fade">
            <div className="first-foreground">
               <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1>Video and Voice conferencing built in</h1>
                           <h2>Pin entry from phone or PC anywhere</h2>
                           <h3>Screen share with upto 50 people</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
                <img src={fadeImages[0]} />
            </div>
        </div>
        <div className="each-fade">
            <div className="first-foreground">
            <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1>
                                        Make low rate calls to real phones
                                    </h1>
                           <h2>Use your own number or buy another</h2>
                           <h3>Make calls to over 200 countries</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
                <img src={fadeImages[1]} />
            </div>
        </div>
        <div className="each-fade">
            <div className="first-foreground">
            <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1>Stay secure on-line with a new number</h1>
                           <h2>Keep your personal number private</h2>
                           <h3>Screening and Blocking built in</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
            <img src={fadeImages[2]} />
            </div>
        </div>
        <div className="each-fade">
            <div className="first-foreground">
            <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1>Launch your idea with a real phone number</h1>
                           <h2>Instant set-up. From £5.00 per month.</h2>
                           <h3>Make the right impression.</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
            <img src={fadeImages[3]} />
            </div>
        </div>
        <div className="each-fade">
            <div className="first-foreground">
            <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1>Keep your phone number when you move</h1>
                           <h2>Port your number to us and stay in control</h2>
                           <h3>Calls / Messages redirected to your mobile(s)</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
            <img src={fadeImages[4]} />
            </div>
        </div>
      </Fade>
    </div>
  )
}