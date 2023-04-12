import React from 'react';
import './aside.scss';
import { Link } from 'react-router-dom';


function Aside(props){
    return(
        <aside className='aside'>
            <div className="aside-wrap">
               <h2 className='category-name'>Categories</h2>
               <ul className='aside-cat p-0'>
                    {/* <li><a href="#t">Bare tools</a></li> */}
                    <li>{<Link to={'/collections/baretools'}>Bare tools</Link>}</li>
                    <li>{<Link to={'/collections/dustcollectors'}>Dust collectors</Link>}</li>
                    <li>{<Link to={'/collections/electriciantools'}>electrician tools</Link>}</li>
                    <li><a href="#t">hand tools</a></li>
                    <li><a href="#t">lasers</a></li>
                    <li><a href="#t">plumbing tools</a></li>
                    <li><a href="#t">power tools</a></li>
                    <li><a href="#t">safety and security</a></li>
                    <li><a href="#t">safety equipment</a></li>
                    <li><a href="#t">speciality tools</a></li>
               </ul>
            </div>
        </aside>
    );
}

export default Aside;