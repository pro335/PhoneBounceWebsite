import React from 'react'
import './index.css'
import { isMobile  } from "react-device-detect";
import {  Button  } from '@material-ui/core';

const BlogCard = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.imgAlt} className="img-fluid radiusT" />
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
