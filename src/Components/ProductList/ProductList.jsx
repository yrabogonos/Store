import React, { useEffect, useState, useRef } from 'react';
import './ProductList.scss';
import FeatureCard from '../Main/Content/Features/FeatureCard/featureCard';
import loading from '../../assets/img/loading-33.gif';
import StoreContext from '../../StoreContext';
import { addItemActionCreator, updateItemActionCreator } from '../../Redux/cartReducer';



function ProductList(props){
    const [products, SetProducts] = useState([]);
    const [category] = useState(props.category);
    const [IsLoaded, SetLoadStatus] = useState(false);
    const loadref = useRef();
    useEffect(()=>{
        let temp = [];
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
            SetLoadStatus(true);
            var data = JSON.parse(req.responseText)['record']['products'];
            for(let i = 0; i < data.length; i++){
                if(data[i].category === category){
                    temp.push(data[i]);
                }
            }
            SetProducts(temp);
          }
        };
        req.open("GET", "https://api.jsonbin.io/v3/b/642edc3dc0e7653a059f0127", true);
        req.send();
    },[]);

    return(
        <StoreContext.Consumer>
          {
              (store) =>{
                  let state = store.getState();
                  let addItem = (item) => {
                      store.dispatch(addItemActionCreator(item));
                  }
                  let updateItem = (item) => {
                      store.dispatch(updateItemActionCreator(item));
                  }
                  return(
                    <section className="productlist">
                        <div className="productlist-wrapper d-flex gap-3">
                            {IsLoaded === true? console.log(1):<figure className='figure-gif'><img src={loading} ref={loadref} className='dblock' /></figure>}
                           
                            {products.map(f => <FeatureCard data={f} addItem={addItem} updateItem={updateItem} items={state.cart.items} newItem={state.cart.newItem}/>)}
                        </div>
                       
                    </section>
                );
              }
             
          }
        </StoreContext.Consumer>
      );
}

export default ProductList;