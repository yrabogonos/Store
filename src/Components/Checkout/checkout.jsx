import React, { useRef } from 'react';
import './checkout.scss';
import StoreContext from '../../StoreContext';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import Aside from '../Main/Aside/aside';
import { removeAllActionCreator, removeItemActionCreator, updateItemActionCreator } from '../../Redux/cartReducer';
import { CurContext } from '../../App';
import {Link} from 'react-router-dom';
import CheckoutItem from './CheckoutItem/checkoutItem';


const Checkout = ()=>{
    return(
        <CurContext.Consumer>
            {
                (value) =>{
                    return(
                        <StoreContext.Consumer>
                            {   
                                (store) =>{
                                    let items = store.getState().cart.items;
                                    const updateItem = (item, q)=>{
                                        if(item.q > 0){
                                            item.q = q;
                                            store.dispatch(updateItemActionCreator(item));
                                        }
                                        if(item.q === 0){
                                            store.dispatch(removeItemActionCreator(item));
                                        }
                                    }
                                    const totalPrice = function (){
                                        let res = 0;
                                        items.forEach(item=>res+=(item.price*value.translate(value.cur).m)*item.q);
                                        return res;
                                    }
                                    const total = function (item){
                                        return (item.price*value.translate(value.cur).m)*item.q;
                                    }
                                    const submitHandler = function(){
                                        store.dispatch(removeAllActionCreator());
                                    }
                                    const deleteItemHandler = function (item){
                                        store.dispatch(removeItemActionCreator(item))
                                    }
                                    return(
                                        <section className='checkout-page'>
                                                    <div className="checkout-page-wrap">
                                                        <div className="container">
                                                            <BreadCrumbs />
                                                            <div className="d-flex gap-lg-3 gap-md-2 gap-0">
                                                                <Aside />
                                                                <div className="checkout">
                                                                    <h3 className='features-title checkout-title mb-5'>Shopping Cart </h3> 
                                                                    <div className="checkout-list d-flex flex-column">
                                                                       {items.map(item=><CheckoutItem data={item} changeQ={updateItem} total={total} value={value} deleteItemHandler={deleteItemHandler}/>)}
                                                                    
                                                                    </div>
                                                                    <div className="checkout-total d-flex justify-content-between">
                                                                        <p className='total-title m-0'>Subtotal:</p>
                                                                        <p className='total-totalprice m-0'>{(parseFloat(totalPrice())).toFixed(2)} {value.translate(value.cur).sign}</p>
                                                                    </div>
                                                                    <div className="checkout-bot mb-5">
                                                                        <Link to= '/'>Continue shopping</Link>
                                                                        <span>or</span>
                                                                        <div className="checkout-btn" onClick={submitHandler}>Check out</div>
                                                                    </div>
                                                                    <div className="checkout-instructions">
                                                                        <div className="instructions-label">Special instructions for seller</div>
                                                                        <textarea className='instructions-textarea mb-3'></textarea>
                                                                        <div className="instructions-payment d-flex">
                                                                            <ul className='p-0'>
                                                                                <li class="firstItem"><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-amex.png?v=85206210438157468371401970336" alt=""/> </li>
                                                                                <li><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-discover.png?v=159641487460128453101401970336" alt=""/> </li>
                                                                                <li><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-visa.png?v=60401960785579442311401970336" alt=""/> </li>
                                                                                <li><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-mastercard.png?v=163639441997642668931401970336" alt=""/> </li>
                                                                                <li><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-maestro.png?v=139224602151549589811401970336" alt=""/> </li>
                                                                                <li><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-cirrus.png?v=84032823879888718741401970336" alt=""/> </li>
                                                                                <li><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-paypal.png?v=24241626605458918351401970336" alt=""/> </li>
                                                                                <li class="lastItem"><img src="//cdn.shopify.com/s/files/1/0526/4525/t/2/assets/cc-google.png?v=886431518207722091401970336" alt=""/> </li>
                                                                            </ul>
                                                                        </div>
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
            }
        </CurContext.Consumer>
    );
   
}

export default Checkout;
