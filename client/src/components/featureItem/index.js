import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


export const FeatureItem = (props) => {
    return (
        <div>
             <Link to={props.link}>
             <div className="feature-item">                   
                        <div className="img"><img src={props.image} alt={props.title} /></div>
                        <div className="inform"><h2 className="title">{props.title}</h2></div>
                   
                    </div>   
                    </Link>         
        </div>
    )
}
