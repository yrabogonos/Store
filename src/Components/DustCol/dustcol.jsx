import React, { useRef } from 'react';
import './dustcol.scss';
import Aside from '../Main/Aside/aside';
import iconLeft from '../../assets/icons/left-arrow.png';
import {Link} from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import dust from '../../assets/img/tekton_2902_power_driver_extension_socket_adapter_set_3_medium.avif';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import StoreContext from '../../StoreContext';
import { sortToolsAscending, sortToolsDescending } from '../../Redux/toolReducer';


function DustCollectors(props){
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
                                        <h3 className='features-title baretools-title mb-5'>Dust Collectors</h3> 
                                        <div className="baretools-filters d-flex gap-1 mb-2">
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
                                            <img src={dust} alt="dustCollectors" />
                                            <p>Our products are the real bestsellers because they have numerous devoted clients all over the country and as you know - those positive testimonials are the best advertising. This fact proves that our company takes the leading place among the competing ones. You know that nowadays we have faced with the problem of fakes. It is so easy to become a victim of cheaters.</p>
                                        </div>
                                        <div className="product-items">
                                            <ProductList category='Dust Collectors'/>
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
export default DustCollectors;
