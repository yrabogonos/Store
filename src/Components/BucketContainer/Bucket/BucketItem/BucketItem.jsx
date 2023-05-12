import React, { useEffect, useRef, useState } from 'react';
import './BucketItem.scss';
import { CurContext } from '../../../../App';



export default function BucketItem(props){
    let removeItem = ()=>{
        let item ={
            title:props.title,
            img:props.img,
            price:props.price,
            q:props.quantity
        }
        props.remItem(item);
    }
    let updateItem = (item)=>{
        if(item.q > 0){
            props.updateItem(item);
        }
       
    }
    return(
        <CurContext.Consumer>
        {
            (value) =>{
                return(
                    <div class="bitem dclose">
                        <div className="bitem-wrap d-flex gap-lg-3 gap-md-3 gap-sm-3 gap-2 dclose">
                        <button className='dclose d-flex align-self-center bitem-delbtn' onClick={()=>{
                            removeItem();
                        }}>X</button>
                            <div className="bitem-img dclose">
                                <img src={props.img} className='img-fluid p-0 dclose' alt="bitem" />
                            </div>
                            <div className="bitem-desct d-flex flex-column dclose">
                                <p className='dclose'>{props.title}</p>
                                <div className="bitem-quantity d-flex gap-3 dclose">
                                <button class="bitem-btn plus-btn dclose" type="button" name="button" onClick={()=>{
                                    let item ={
                                        title:props.title,
                                        img:props.img,
                                        price:props.price,
                                        q:props.quantity+1
                                    }
                                    updateItem(item);
                                }}>
                                    +
                                </button>
                                <input value={props.quantity} disabled type="text" name="name" className='bitem-input dclose'/>
                                <button  class="bitem-btn plus-btn dclose" type="button" name="button" onClick={()=>{
                                    let item ={
                                        title:props.title,
                                        img:props.img,
                                        price:props.price,
                                        q:props.quantity-1
                                    }
                                    updateItem(item);
                                }}>
                                    -
                                </button>
                                </div>
                            </div>
                            <p className='bitem-price align-self-center m-0 dclose'>{(((parseFloat(props.price)*props.quantity))*value.translate(value.cur).m).toFixed(2)} {value.translate(value.cur).sign}</p>
                        </div>
                  </div>
                );
            }
        }
    </CurContext.Consumer>
    );
    // return(
    //     <div class="bitem dclose">
    //         <div className="bitem-wrap d-flex gap-lg-3 gap-md-3 gap-sm-3 gap-2 dclose">
    //         <button className='dclose d-flex align-self-center bitem-delbtn' onClick={()=>{
    //             removeItem();
    //         }}>X</button>
    //             <div className="bitem-img dclose">
    //                 <img src={props.img} className='img-fluid p-0 dclose' alt="bitem" />
    //             </div>
    //             <div className="bitem-desct d-flex flex-column dclose">
    //                 <p className='dclose'>{props.title}</p>
    //                 <div className="bitem-quantity d-flex gap-3 dclose">
    //                 <button class="bitem-btn plus-btn dclose" type="button" name="button" onClick={()=>{
    //                     let item ={
    //                         title:props.title,
    //                         img:props.img,
    //                         price:props.price,
    //                         q:props.quantity+1
    //                     }
    //                     updateItem(item);
    //                 }}>
    //                     +
    //                 </button>
    //                 <input value={props.quantity} disabled type="text" name="name" className='bitem-input dclose'/>
    //                 <button  class="bitem-btn plus-btn dclose" type="button" name="button" onClick={()=>{
    //                     let item ={
    //                         title:props.title,
    //                         img:props.img,
    //                         price:props.price,
    //                         q:props.quantity-1
    //                     }
    //                     updateItem(item);
    //                 }}>
    //                     -
    //                 </button>
    //                 </div>
    //             </div>
    //             <p className='bitem-price align-self-center m-0 dclose'>{(parseFloat(props.price)*props.quantity).toFixed(2)} $</p>
    //         </div>
    //   </div>
    // );
}