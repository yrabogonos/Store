import React, { useEffect, useState } from 'react';
import './features.scss';
import FeatureCard from './FeatureCard/featureCard';
import img1 from '../../../../assets/img/f1.avif';
import img2 from '../../../../assets/img/f2.avif';
import img3 from '../../../../assets/img/f3.avif';


var data = [
    {
        img: img1,
        price: '€54.75',
        title:'AMAZONBASICS AA NIMH PRECHARGED RECHA...',
        text: 'We assure you that our goods have a great number of advantages and it...',
    },
    {
        img: img2,
        price: '€155.14',
        title:'BLACK & DECKER BDCDMT120 20-VOLT MATR...',
        text: 'It is so easy to become a victim of cheaters. These processes are ver...',
    },
    {
        img: img3,
        price: '€383.28',
        title:'BLACK & DECKER 71-91291 129-PIECE MUL...',
        text: 'You know that nowadays we have faced with the problem of fakes. It is...',
    },
];

function Features(props){
    const [features, SetFeatures] = useState([]);
    useEffect(()=>{
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
            var data = JSON.parse(req.responseText)['record']['features'];
            SetFeatures(data);
          }
        };
        req.open("GET", "https://api.jsonbin.io/v3/b/642edc3dc0e7653a059f0127", true);
        req.send();
    }, []);
    return(
       <section className='features mt-5 mb-5'>
           <div className="features-wrap">
                <h3 className='features-title mb-5'>Featured Products</h3>
                <div className="features-items">
                    {features.map(f => <FeatureCard data={f}/>)}
                </div>
            </div> 
       </section>
    );
}



export default Features;