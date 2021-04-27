import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaVimeo } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './socialIcon.css'
import { isMobileOnly  } from "react-device-detect";



const SocialIcon = (props) => {
    return (
        <div>
            <div className="soc-icons">
                <a target="_blank" href="https://www.facebook.com/PhoneBounce/" className="fs-1"  alt="alt"><FaFacebookF className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                <a target="_blank" href="https://twitter.com/phonebounce" className="fs-1" alt="alt"><FaTwitter className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                <a target="_blank" href="https://instagram.com/phonebounce" className="fs-1" alt="alt"><FaInstagram className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                <a target="_blank" href="https://www.linkedin.com/company/22319610/" className="fs-1" alt="alt"><FaLinkedin className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
                <a target="_blank" href="https://vimeo.com/phonebounce" className="fs-1" alt="alt"><FaVimeo className={isMobileOnly  ? 'icon-mobile' : 'icon'} /></a>
    
            </div>
        </div>
    )
}

export default SocialIcon
