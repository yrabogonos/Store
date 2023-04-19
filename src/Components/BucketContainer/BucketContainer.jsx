import React, { useEffect, useRef, useState } from 'react';
import './BucketContainer.scss';
import Bucket from './Bucket/Bucket';
import StoreContext from '../../StoreContext';
import { addItemActionCreator, removeAllActionCreator, removeItemActionCreator, updateItemActionCreator } from '../../Redux/cartReducer';




export default function BucketContainer(){

    return(
      <StoreContext.Consumer>
        {
            (store) =>{
                let state = store.getState();
                console.log(state);
                let remItem = (item) => {
                    store.dispatch(removeItemActionCreator(item));
                }
                let updateItem = (item) => {
                    store.dispatch(updateItemActionCreator(item));
                }
                let clearItems = () =>{
                    store.dispatch(removeAllActionCreator());
                }
                return(<Bucket items={state.cart.items} remItem={remItem} updateItem={updateItem} clear={clearItems}></Bucket>);
            }
           
        }
      </StoreContext.Consumer>
    );
}