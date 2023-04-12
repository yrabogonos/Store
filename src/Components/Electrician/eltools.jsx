import React from 'react';
import './eltools.scss';
import Aside from '../Main/Aside/aside';
import iconLeft from '../../assets/icons/left-arrow.png';
import {Link} from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import el from '../../assets/img/black___decker_bdcdmt120_20-volt_matrix_drill__1_medium.avif';


function ElTools(props){
    return(
        <section className="baretools">
        <div className="baretools-wrap">
            <div className="container">
                <Link to={'/'}><div className="navigation mb-5"><img src={iconLeft} alt="icon" /> <span>Home</span></div></Link>
                <div className="d-flex gap-5">
                    <Aside />
                    <div className="baretools-content">
                        <h3 className='features-title baretools-title mb-5'>Electrician Tools</h3> 
                        <div className="baretools-filters d-flex gap-1 mb-4">
                            <button className='active filter'>All</button>
                            <button className='filter'>Sit amet</button>
                        </div>
                        <div className="baretools-info d-flex gap-5 mb-5">
                            <img src={el} alt="electriciantools" />
                            <p>You know that nowadays we have faced with the problem of fakes. It is so easy to become a victim of cheaters. These processes are very widespread and even big companies` reputation could suffer because of fakes. But our vendors and manufactures guarantee the highest quality of our products. There is no doubt that we are the leading company in this sphere. Keep saving your money with our store!</p>
                        </div>
                        <div className="product-items">
                            <ProductList category='Electrician Tools'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default ElTools;
