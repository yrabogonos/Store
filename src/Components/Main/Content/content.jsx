import React from 'react';
import './content.scss';
import Carousell from './Carousel/carousel';

import Types from './Types/types';
import Features from './Features/features';

function Content(props){
    return(
        <section className='content'>
            <div className="content-wrap">
                <Carousell />
                <Types />
                <Features add={props.add}/>
            </div>
        </section>
    );
}

export default Content;


