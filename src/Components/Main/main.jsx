import React from 'react';
import './main.scss';
import Aside from './Aside/aside';
import Content from './Content/content';
import { Outlet } from 'react-router-dom';


function Main(props){
    return(
        <section className='main'>
            <div className="main-wrap">
                <div className="container d-flex gap-5 p-0">
                    
                    <Aside />
                    <Content />
                   
                    
                </div>
            </div>
            <Outlet />
        </section>
    );
}

export default Main;