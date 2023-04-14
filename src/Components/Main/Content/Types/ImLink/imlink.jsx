import React from 'react';
import './imlink.scss';





function ImLink(props){
    return(
        <a href='#f' className='ImLink'>
            <img src={props.src} className='ImLink-img img-fluid' alt="t" />
            <h3 className='ImLink-title'>{props.title}</h3>
        </a>
    );
}

export default ImLink;