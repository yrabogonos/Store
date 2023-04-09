import React, { useState } from 'react';
import './types.scss';
import ImLink from './ImLink/imlink';

import link1 from '../../../../assets/img/link1.avif' ;
import link2 from '../../../../assets/img/link2.avif' ;
import link3 from '../../../../assets/img/link3.avif' ;
import link4 from '../../../../assets/img/link4.avif' ;
import link5 from '../../../../assets/img/link5.avif' ;
import link6 from '../../../../assets/img/link6.avif' ;

function Types(props){
    const[images, SetImages] = useState([{img:link1,title:'Oscillating tools'},{img:link2,title:'Cordless tools'},{img:link3,title:'Sanders'},{img:link4,title:'Saws'},{img:link5,title:'Grinders'},{img:link6,title:'work stations'}]);
   
    return(
        <section className='types  mt-sm-0 mt-lg-5 mt-md-4'>
            <div className="types-wrap">
               {images.map(obj => <ImLink src={obj.img} title={obj.title} />)}
                
            </div>
        </section>
    );
}

export default Types;


