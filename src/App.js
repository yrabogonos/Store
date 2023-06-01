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
import { useState } from 'react';
import React from 'react';
import { ContactUs } from './Components/ContactUs/contactus';
import Aside from './Components/Main/Aside/aside';
import Checkout from './Components/Checkout/checkout';

export const CurContext = React.createContext();
function App() {
  const [selectedCur, SetselectedCur] = useState('USD');
  const updateCur = function(cur){
    switch (cur){
      case 'USD':
        SetselectedCur('USD');
        break;
      case 'EUR':
        SetselectedCur('EUR');
        break;
      case 'GPB':
        SetselectedCur('GPB');
        break;
        default:
          SetselectedCur('USD');
          break;
    }
     
  }
  const translateCur = (currency) =>{             // винеси в апку
    if(currency ==='USD'){
        return {m:1.0, sign:'$'};
    }
    if(currency==='EUR'){
        return {m:1.1026501, sign:'€'};
    }
    if(currency ==='GPB'){
        return {m:1.2494218, sign:'£'};
    }
}
  return (
    <CurContext.Provider value={{cur:selectedCur,update:updateCur, translate:translateCur}}>
    <div className="root-wrap">
       <Header />
        <Routes>

          <Route path='/:productId' element={ 
            <ProductsDetails />
          }></Route> 

          <Route path='/bare-tools' element={ 
            <BareTools />
          }>
          </Route>

          <Route path='/bare-tools/:productId' element={ 
                <ProductsDetails />
          }></Route> 

          <Route path='/dust-collectors' element={ 
            <DustCollectors />
          }></Route>

          <Route path='/dust-collectors/:productId' element={ 
                <ProductsDetails />
          }></Route> 

          <Route path='/electrician-tools' element={ 
            <ElTools />
          }></Route>

          <Route path='/electrician-tools/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/hand-tools' element={ 
            <HandTools />
          }></Route>

          <Route path='/hand-tools/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/lasers' element={ 
            <Lasers />
          }></Route>

          <Route path='/lasers/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/plumbing-tools' element={ 
            <PlumbingTools />
          }></Route>

          <Route path='/plumbing-tools/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/power-tools' element={ 
            <PowerTools />
          }></Route>

          <Route path='/power-tools:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/safety-equipment' element={ 
            <Safety />
          }></Route>

          <Route path='/safety-equipment:productId' element={ 
              <ProductsDetails />
          }></Route> 
  
          <Route path='/speciality-tools' element={ 
            <SpecialtyTools />
          }></Route>

          <Route path='/speciality-tools:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/checkout' element={ 
            <Checkout />
          }></Route>

          <Route path='/' element={ 
            <Main />
          }></Route>
          
        </Routes>
        <ContactUs />
        <Footer />

    </div>
    </CurContext.Provider>
  );
}

export default App;
