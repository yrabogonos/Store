import React, { useState } from 'react';
import './carousel.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import slide1 from '../../../../assets/img/slide1.webp';
import slide2 from '../../../../assets/img/slide2.webp';
import slide3 from '../../../../assets/img/slide3.webp';


import Carousel from 'react-bootstrap/Carousel';


function Carousell(props){
    const[slides, SetSlides] = useState([slide1, slide2, slide3]);

    const makeSlide = function(img){
        return(
            <Carousel.Item>
                <img src={img} className='car-img img-fluid' width='900px' alt='slide' />
            </Carousel.Item>
        );
    }
    return(
        <div className="carousel-wrap d-flex">
            <Carousel className='carousel carousel-fade'>
                {slides.map(slide => makeSlide(slide))}
            </Carousel>
        </div>

    );
}

export default Carousell;