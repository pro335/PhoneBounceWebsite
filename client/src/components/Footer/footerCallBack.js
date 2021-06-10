import React from 'react'
import './footerCallBack.css'
import {Link} from 'react-router-dom';

const FooterCallBack = (props) => {
    return (
        <div>
            <Link to={props.to} onClick={props.onClick}>
             <div className="feature-item">
                    
                        <div className="img">{props.svg}</div>
                        <div className="inform"><h2 className="title">{props.title}</h2></div>
                   
                    </div>   
                    </Link>         
        </div>
    )
}

export default FooterCallBack;
