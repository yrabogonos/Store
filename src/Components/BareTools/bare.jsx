import React, { useRef } from 'react';
import './bare.scss';
import Aside from '../Main/Aside/aside';
import iconLeft from '../../assets/icons/left-arrow.png';
import {Link, Outlet} from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import apollo from '../../assets/img/apollo_precision_tools_dt9706p_39-piece_pink_general_tool_set_3_6499b9f2-0a47-4cab-bb46-b72b159f0aee_medium.avif';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import StoreContext from '../../StoreContext';
import { sortToolsAscending, sortToolsDescending } from '../../Redux/toolReducer';



function BareTools(props){
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
                                        <h3 className='features-title baretools-title mb-5'>Bare Tools</h3> 
                                        <div className="baretools-filters d-flex gap-1 mb-5">
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
            }
        </StoreContext.Consumer>
    );
   
}
export default BareTools;
