import React, {useRef} from 'react';
import './eltools.scss';
import Aside from '../Main/Aside/aside';
import ProductList from '../ProductList/ProductList';
import el from '../../assets/img/black___decker_bdcdmt120_20-volt_matrix_drill__1_medium.avif';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import StoreContext from '../../StoreContext';
import { sortToolsAscending, sortToolsDescending } from '../../Redux/toolReducer';


function ElTools(props){
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
                                        <h3 className='features-title baretools-title mb-5'>Electrician Tools</h3> 
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
            }
        </StoreContext.Consumer>
    );
    
}
export default ElTools;
