import React from 'react';
import './handtools.scss';
import Aside from '../Main/Aside/aside';
import ProductList from '../ProductList/ProductList';
import apollo from '../../assets/img/apollo_precision_tools_dt9706p_39-piece_pink_general_tool_set_3_6499b9f2-0a47-4cab-bb46-b72b159f0aee_medium.avif';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';


function HandTools(props){
    return(
        <section className="baretools">
        <div className="baretools-wrap">
            <div className="container">
                <BreadCrumbs />
                <div className="d-flex gap-5">
                    <Aside />
                    <div className="baretools-content">
                        <h3 className='features-title baretools-title mb-5'>Hand Tools</h3> 
                        <div className="baretools-filters d-flex gap-1 mb-4">
                            <button className='activeBtn filter'>All</button>
                            <button className='filter'>Sit amet</button>
                        </div>
                        <div className="baretools-info d-flex gap-5 mb-5">
                            <img src={apollo} alt="handtools" />
                            <p>We assure you that our goods have a great number of advantages and it is very important for the customers. Our products are the real bestsellers because they have numerous devoted clients all over the country and as you know - those positive testimonials are the best advertising. This fact proves that our company takes the leading place among the competing ones.</p>
                        </div>
                        <div className="product-items">
                            <ProductList category='Hand Tool'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default HandTools;
