import React, { useEffect, useRef, useState } from 'react';
import './Bucket.scss';


export default function Bucket(props){
   
    return(
        <section className='bucket dclose'>
            <div className="bucket-wrap dclose">
                <h2 className='bucket-title m-0 dclose'>Shopping Cart</h2>
                    {props.orders.length != 0 ? props.orders.map(item=> <BucketItem ch={props.ch} rem={props.rem} data={item} />): 
                    <div className="empty-bucket dclose">
                        <h2>Your bucket is empty now!</h2>
                    </div>}
            </div>
        </section>
    );
}

function BucketItem(props){
    const input = useRef();
    const addbtn = useRef();
    const rembtn = useRef();
    const [quantity, SetQuantity] = useState(props.data.q)
    const SetQ = function(q){
        if(q<1){
            return;
        }
        SetQuantity(q);
        props.ch(props.data);
        props.data.q -=1;
    }
    useEffect(()=>{
        console.log('Bucket-rendering'); 
   
    });
    
   
    return(
        <div class="bitem dclose">
            <div className="bitem-wrap d-flex gap-2 dclose">
            <button className='dclose d-flex align-self-center bitem-delbtn' onClick={()=>{
                props.rem(props.data.title);
                props.ch();
            }}>-</button>
                <div className="bitem-img dclose">
                    <img src={props.data.img} className='img-fluid p-0 dclose' alt="bitem" />
                </div>
                <div className="bitem-desct d-flex flex-column dclose">
                    <p className='dclose'>{props.data.title}</p>
                    <div className="bitem-quantity d-flex gap-3 dclose">
                    <button ref={addbtn} onClick={()=>{
                        SetQuantity(quantity+1);
                        props.data.q +=1;
                        props.ch(props.data);
                 
                 
                    }} class="bitem-btn plus-btn dclose" type="button" name="button">
                        +
                    </button>
                    <input ref={input} onChange={()=>SetQ(input.current.value)} disabled type="text" name="name" className='bitem-input dclose' value={quantity} />
                    <button onClick={()=>{
                        SetQ(quantity-1);
                        
                        
                        }}  ref={rembtn} class="bitem-btn minus-btn dclose" type="button" name="button">
                        -
                    </button>
                    </div>
                </div>
                <p className='bitem-price align-self-center m-0 dclose'>{(Number(props.data.price.slice(1))*quantity).toFixed(2)}$</p>
            </div>
      </div>
    );
}