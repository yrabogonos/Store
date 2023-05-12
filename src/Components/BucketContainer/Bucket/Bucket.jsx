import React, { useEffect, useRef, useState } from 'react';
import './Bucket.scss';
import BucketItem from './BucketItem/BucketItem';



export default function Bucket(props){
    let clear = function(){
        props.clear();
    }
    return(
        <section className='bucket dclose'>
            <div className="bucket-wrap dclose">
            
                <div className="bucket-header dclose d-flex justify-content-between">
                    <h2 className='bucket-title m-0 dclose'>Shopping Cart</h2>
                    <button className='dclose' onClick={()=>clear()}>Clear</button>
                </div>
                {props.items.length != 0 ? props.items.map(item=> <BucketItem data={item} title={item.title} img={item.img} price={item.price} quantity={item.q} remItem={props.remItem} updateItem={props.updateItem} />): 
                    <div className="empty-bucket dclose">
                        <h2>Your bucket is empty now!</h2>
                    </div>}
            </div>
        </section>
    );
}