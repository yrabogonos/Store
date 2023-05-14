import React, {useRef} from 'react';
import Aside from '../Main/Aside/aside';
import ProductList from '../ProductList/ProductList';
import lasers from '../../assets/img/dewalt_dw920k-2_2_medium.avif';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import StoreContext from '../../StoreContext';
import { sortToolsAscending, sortToolsDescending } from '../../Redux/toolReducer';


function Lasers(props){
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
                                        <h3 className='features-title baretools-title mb-5'>Lasers</h3> 
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
                                            <img src={lasers} alt="handtools" />
                                            <p>But our vendors and manufactures guarantee the highest quality of our products. There is no doubt that we are the leading company in this sphere. We observe only branded commodities policy. You can buy the premium quality goods at a fair price. Our company cares about the clients and never lets them down. We are the constant participants of different social and technological researches.</p>
                                        </div>
                                        <div className="product-items">
                                            <ProductList category='Lasers'/>
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
export default Lasers;
