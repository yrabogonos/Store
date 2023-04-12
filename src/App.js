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

function App() {
  return (
    <div className="root-wrap">
       <Header />
        <Routes>
          <Route path='/productDetails/:productId' element={ 
            <ProductsDetails />
          }></Route> 
          <Route path='/collections/baretools' element={ 
            <BareTools />
          }></Route>
          <Route path='/collections/dustcollectors' element={ 
            <DustCollectors />
          }></Route>
          <Route path='/collections/electriciantools' element={ 
            <ElTools />
          }></Route>
          <Route path='/' element={ 
            <Main />
          }>
           
         
          </Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
