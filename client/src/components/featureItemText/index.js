import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


export const FeatureItemText = (props) => {
    return (
        <div>
            <Link to={props.link}>
                    <div className="feature-item-text">                    
                        <div className="img"><img src={props.image} alt={props.imageAlt} /></div>
                        <div className="inform"><p>
                            <b>{props.title} </b>
                            {props.description}</p></div>                    
                    </div>
            </Link>
        </div>
    )
}
