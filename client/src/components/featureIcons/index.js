import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


const FeatureIcon = (props) => {
    return (
        <div className="text-center">
            <Link to={props.link} className="feature-link">
                <div className="d-inline-block rounded-circle shadow p-5">
                    <img src={props.image} alt={props.title} class="img-fluid " width="100" />
                </div>
            <div className="text-danger text-center mt-4 title">{props.title}</div>
            </Link>
            
        </div>
    )
}

export default FeatureIcon;
