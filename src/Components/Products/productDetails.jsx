import React, { useDebugValue, useEffect, useState, useRef } from 'react';
import './productDetails.scss';
import { useParams } from 'react-router-dom';
import Aside from '../Main/Aside/aside';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import loading from '../../assets/img/loading-33.gif';

function ProductsDetails(props){
    let {productId} = useParams();
    const [product, SetProduct] = useState(0);
    const [IsLoaded, SetLoadStatus] = useState(false);
    const loadref = useRef();
    const inforef = useRef();
    useEffect(()=>{
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
            SetLoadStatus(true);
            var data = JSON.parse(req.responseText)['record']['products'];
            for(let i = 0; i < data.length; i++){
                if(data[i].id === productId){
                    SetProduct(data[i]);
                }
            }
          }
        };
        req.open("GET", "https://api.jsonbin.io/v3/b/642edc3dc0e7653a059f0127", true);
        req.send();
    },[]);
    return(
        <section className='products'>
            <div className="products-wrap">
                <div className="container">
                    <BreadCrumbs />
                    <div className="d-flex">
                        <Aside />
                        <div className="product-info">
                            {IsLoaded === true? inforef.current.classList.remove('none'):<figure className='figure-gif'><img src={loading} ref={loadref} className='dblock' /></figure>}
                            <div ref={inforef} className="row d-flex g-3 none">
                                <div className="col-lg-5 col-md-5 col-12 mb-sm-5">
                                    <div className="product-img">
                                        <img src={product.img} className='' alt="product" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-12 product-descr">
                                    <h2 className='descr-title mb-3'>{product.full_title}</h2>
                                    <p className='descr-price'>{product.price}</p>
                                    <div className="descr-ctrls">
                                        <p className='m-0'>Qty</p>
                                        <input min="1" type="number" id="quantity" name="quantity" value="1" class="form-control input-small descr-input"></input>
                                        <button class="btn fcard-btn descr-btn p-0" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                        fill='white'
                                        className='ficon-cart'><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg><p className='m-0'>Add to cart</p>
                                    </button>
                                    </div>
                                    <div className="descr-group mt-3">
                                        <p className='m-0'>type: <span>{product.category}</span></p>
                                        <p className='m-0'>Vendor: <span>Tools</span></p>
                                    </div>
                                    <div className="descr-text"> 
                                        <h4>Description</h4>
                                        <p>{product.full_text}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
export default ProductsDetails;
