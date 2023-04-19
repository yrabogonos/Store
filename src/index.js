import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';
import store from './Redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDom = () =>{
    root.render(
        <BrowserRouter basename='/Store'>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    
    );
}
rerenderDom(store.getState());
store.subscribe(() => {
    rerenderDom();
});


reportWebVitals();
