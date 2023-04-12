import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import FeatureCard from '../Main/Content/Features/FeatureCard/featureCard';



function ProductList(props){
    const [products, SetProducts] = useState([]);
    const [category] = useState(props.category);

    useEffect(()=>{
        let temp = [];
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
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
        <section className="productlist">
            <div className="productlist-wrapper d-flex gap-3">
                {products.map(f => <FeatureCard data={f}/>)}
            </div>
        </section>
    );
}

export default ProductList;