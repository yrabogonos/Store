import React, { useRef } from 'react';
import './checkoutItem.scss';

const CheckoutItem = (props) =>{
    const input = useRef();
    return(
        <div className="checkoutItem">
            <div className="citem-wrap d-flex gap-4">
                <div className="citem-img">
                    <img src={props.data.img} className='img-fluid' alt="d" />
                </div>
                <div className="citem-descr d-flex flex-column">
                    <div className="descr-title">{props.data.title}</div>
                    <div className="descr-div text-uppercase mb-3">Tools</div>
                    <div className="descr-ctrls">
                        <div className="descr-price">
                            {(parseFloat(props.data.price*props.value.translate(props.value.cur).m)).toFixed(2)} {props.value.translate(props.value.cur).sign}
                        </div>
                        <div className="descr-q d-flex align-items-center">
                            <p className='m-0'>Qty:</p>
                            <input ref={input} value={props.data.q} onChange={(e)=>props.changeQ(props.data, Number(e.target.value))} type="number" id="quantity" name="quantity"  class="form-control input-small descr-input"></input>
                        </div>
                    </div>
                    <div className="descr-total">
                        <p>Total: <span>{(parseFloat(props.total(props.data))).toFixed(2)} {props.value.translate(props.value.cur).sign} </span></p>
                    </div> 
                </div>
                <button className="citem-close" onClick={()=>{props.deleteItemHandler(props.data)}}></button>
            </div>
        </div>
    );
}

export default CheckoutItem;