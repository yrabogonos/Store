import React from 'react';
import './main.scss';
import Aside from './Aside/aside';
import Content from './Content/content';

function Main(props){
    return(
        <section className='main'>
            <div className="main-wrap">
                <div className="container d-flex gap-5 p-0">
                    
                    <Aside />
                    <Content />
                    
                </div>
            </div>
        </section>
    );
}

export default Main;