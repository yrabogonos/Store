import React from 'react';
import './imlink.scss';
import { Link } from 'react-router-dom';





function ImLink(props){
    return(
        <Link to={props.path} className='ImLink'>
            <img src={props.src} className='ImLink-img img-fluid' alt="t" />
            <h3 className='ImLink-title'>{props.title}</h3>
        </Link>
    );
}

export default ImLink;