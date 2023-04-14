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

function App() {
  return (
    <div className="root-wrap">
       <Header />
        <Routes>

          <Route path='/:productId' element={ 
            <ProductsDetails />
          }></Route> 

          <Route path='/baretools' element={ 
            <BareTools />
          }>
          </Route>

          <Route path='/baretools/:productId' element={ 
                <ProductsDetails />
          }></Route> 

          <Route path='/dustcollectors' element={ 
            <DustCollectors />
          }></Route>

          <Route path='/dustcollectors/:productId' element={ 
                <ProductsDetails />
          }></Route> 

          <Route path='/electriciantools' element={ 
            <ElTools />
          }></Route>

          <Route path='/electriciantools/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/handtools' element={ 
            <HandTools />
          }></Route>

          <Route path='/handtools/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/lasers' element={ 
            <Lasers />
          }></Route>

          <Route path='/lasers/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/plumbingtools' element={ 
            <PlumbingTools />
          }></Route>

          <Route path='/plumbingtools/:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/powertools' element={ 
            <PowerTools />
          }></Route>

          <Route path='/powertools:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/safetyequipment' element={ 
            <Safety />
          }></Route>

          <Route path='/safetyequipment:productId' element={ 
              <ProductsDetails />
          }></Route> 
  
          <Route path='/specialitytools' element={ 
            <SpecialtyTools />
          }></Route>

          <Route path='/specialitytools:productId' element={ 
              <ProductsDetails />
          }></Route> 

          <Route path='/' element={ 
            <Main />
          }></Route>
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
