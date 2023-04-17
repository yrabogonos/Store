import './App.css';
import Header from './Components/Header/header'; 
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import  ProductsDetails from './Components/Products/productDetails';
import BareTools from './Components/BareTools/bare';
import ProductList from './Components/ProductList/ProductList';
import DustCollectors from './Components/DustCol/dustcol';
import ElTools from './Components/Electrician/eltools';
import HandTools from './Components/HandTools/handtools';
import Lasers from './Components/Lasers/lasers';
import PlumbingTools from './Components/Plumbing/plumbing';
import PowerTools from './Components/Power/powertools';
import Safety from './Components/Safety/safety';
import SpecialtyTools from './Components/Speciality/spec';
import { useEffect, useState } from 'react';

function App() {
  const [orders, SetOrders] = useState([]);
  const [flag, Setflag] = useState(true);
  const [total, SetTotal] = useState(0);

  const changeOrder = function(){
    console.log('From ch', orders);
    let t=0;
    for(let i = 0; i < orders.length; i++){
      t+=orders[i].q;
    }
    SetTotal(t);
    
  }


  const addOrder = function(item){
    for(let i=0; i<orders.length; i++){
      if(orders[i].title === item.title){
        alert('Товар уже знаходиться в корзині!');
        return;
      }
    }
    alert('Товар добавлено в корзину');
    SetOrders([...orders, item]);
    
  }


  const remOrder = function(title){
      for(let i = 0; i < orders.length; i++){
        if(orders[i].title === title){
          SetOrders(orders.filter(el => el.title!=title))
        }
      }
  }
  
  useEffect(()=>{
    let t=0;
    for(let i=0; i<orders.length; i++){
        t+=orders[i].q * (parseFloat(orders[i].price.slice(1)));
    }
    SetTotal(((parseInt(t * 100)) / 100)); 
})
  return (
    <div className="root-wrap">
       <Header ch={changeOrder} t={total}  orders={orders} rem={remOrder}/>
        <Routes>

          <Route path='/:productId' element={ 
            <ProductsDetails ch={changeOrder} add={addOrder}/>
          }></Route> 

          <Route path='/baretools' element={ 
            <BareTools add={addOrder}/>
          }>
          </Route>

          <Route path='/baretools/:productId' element={ 
                <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/dustcollectors' element={ 
            <DustCollectors add={addOrder}/>
          }></Route>

          <Route path='/dustcollectors/:productId' element={ 
                <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/electriciantools' element={ 
            <ElTools add={addOrder}/>
          }></Route>

          <Route path='/electriciantools/:productId' element={ 
              <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/handtools' element={ 
            <HandTools add={addOrder}/>
          }></Route>

          <Route path='/handtools/:productId' element={ 
              <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/lasers' element={ 
            <Lasers add={addOrder}/>
          }></Route>

          <Route path='/lasers/:productId' element={ 
              <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/plumbingtools' element={ 
            <PlumbingTools add={addOrder}/>
          }></Route>

          <Route path='/plumbingtools/:productId' element={ 
              <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/powertools' element={ 
            <PowerTools add={addOrder}/>
          }></Route>

          <Route path='/powertools:productId' element={ 
              <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/safetyequipment' element={ 
            <Safety add={addOrder}/>
          }></Route>

          <Route path='/safetyequipment:productId' element={ 
              <ProductsDetails add={addOrder}/>
          }></Route> 
  
          <Route path='/specialitytools' element={ 
            <SpecialtyTools add={addOrder}/>
          }></Route>

          <Route path='/specialitytools:productId' element={ 
              <ProductsDetails add={addOrder}/>
          }></Route> 

          <Route path='/' element={ 
            <Main add={addOrder}/>
          }></Route>
        </Routes>
        <Footer />

    </div>
  );
}



export default App;
