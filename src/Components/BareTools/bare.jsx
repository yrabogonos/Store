import React from 'react';
import './bare.scss';
import Aside from '../Main/Aside/aside';
import iconLeft from '../../assets/icons/left-arrow.png';
import {Link} from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import apollo from '../../assets/img/apollo_precision_tools_dt9706p_39-piece_pink_general_tool_set_3_6499b9f2-0a47-4cab-bb46-b72b159f0aee_medium.avif';


function BareTools(props){
    return(
        <section className="baretools">
        <div className="baretools-wrap">
            <div className="container">
                <Link to={'/'}><div className="navigation mb-5"><img src={iconLeft} alt="icon" /> <span>Home</span></div></Link>
                <div className="d-flex gap-5">
                    <Aside />
                    <div className="baretools-content">
                        <h3 className='features-title baretools-title mb-5'>Bare Tools</h3> 
                        <div className="baretools-filters d-flex gap-1 mb-5">
                            <button className='active filter'>All</button>
                            <button className='filter'>Sit amet</button>
                        </div>
                        <div className="baretools-info d-flex gap-5 mb-5">
                            <img src={apollo} alt="baretools" />
                            <p>This fact proves that our company takes the leading place among the competing ones. You know that nowadays we have faced with the problem of fakes. It is so easy to become a victim of cheaters. These processes are very widespread and even big companies` reputation could suffer because of fakes. But our vendors and manufactures guarantee the highest quality of our products.</p>
                        </div>
                        <div className="product-items">
                            <ProductList category='Bare Tools'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default BareTools;
