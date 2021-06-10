import React from 'react'
import './index.css'
import { isMobile  } from "react-device-detect";
import {  Button  } from '@material-ui/core';

const BlogCard = (props) => {
    return (
        <div className={isMobile ? 'py-3 px-2' : 'py-5 px-5'} >
            <img src={props.img} alt={props.imgAlt} className="img-fluid radius15" />
             <div className={isMobile ? "services-items-blogs-mobile" : "services-items-blog "}>                
            <h4 className="mt-4">{props.title}</h4>
            <h6>{props.titleTime}</h6>
            <p className="subtitle">{props.description}</p>
                    <Button variant="contained" className="btn-App mt-3">
                      Read More
                    </Button>
            </div>
        </div>
    )
}

export default BlogCard
