import React, {useRef} from 'react';
import Aside from '../Main/Aside/aside';
import ProductList from '../ProductList/ProductList';
import safety from '../../assets/img/safety.avif';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import StoreContext from '../../StoreContext';
import { sortToolsAscending, sortToolsDescending } from '../../Redux/toolReducer';


function Safety(props){
    const asc = useRef();
    const desc = useRef();
    return(
        <StoreContext.Consumer>
            {
                (store) =>{
                    const sortAsc = ()=> store.dispatch(sortToolsAscending());
                    const sortDesc = ()=> store.dispatch(sortToolsDescending());
                    return(
                        <section className="baretools">
                        <div className="baretools-wrap">
                            <div className="container">
                                <BreadCrumbs />
                                <div className="d-flex gap-5">
                                    <Aside />
                                    <div className="baretools-content">
                                        <h3 className='features-title baretools-title mb-5'>Safety Equipment</h3> 
                                        <div className="baretools-filters d-flex gap-1 mb-4">
                                            <button ref={asc} className='filter' onClick={()=>{
                                                sortDesc();
                                                asc.current.classList.add('activeBtn');
                                                desc.current.classList.remove('activeBtn');
                                                
                                            }}>To Higher</button>
                                            <button ref={desc} className='filter' onClick={()=>{
                                                sortAsc();
                                                asc.current.classList.remove('activeBtn');
                                                desc.current.classList.add('activeBtn');
                                               
                                            }}>To Lower</button>
                                        </div>
                                        <div className="baretools-info d-flex gap-5 mb-5">
                                            <img src={safety} alt="handtools" />
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
            }
        </StoreContext.Consumer>
    );
    
}
export default Safety;
