import React from 'react';
import Aside from '../Main/Aside/aside';
import ProductList from '../ProductList/ProductList';
import spec from '../../assets/img/spec.avif';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';


function SpecialtyTools(props){
    return(
        <section className="baretools">
        <div className="baretools-wrap">
            <div className="container">
                <BreadCrumbs />
                <div className="d-flex gap-5">
                    <Aside />
                    <div className="baretools-content">
                        <h3 className='features-title baretools-title mb-5'>Specialty Tools</h3> 
                        <div className="baretools-filters d-flex gap-1 mb-4">
                            <button className='active filter'>All</button>
                            <button className='filter'>Sit amet</button>
                        </div>
                        <div className="baretools-info d-flex gap-5 mb-5">
                            <img src={spec} alt="handtools" />
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
export default SpecialtyTools;
