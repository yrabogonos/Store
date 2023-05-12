import React from 'react';
import './aside.scss';
import { Link } from 'react-router-dom';


function Aside(props){
    return(
        <aside className='aside'>
            <div className="aside-wrap">
               <h2 className='category-name'>Categories</h2>
               <ul className='aside-cat p-0'>
                    <Link to={'/baretools'}><li>Bare tools</li></Link>
                    <Link to={'/dustcollectors'}><li>Dust collectors</li></Link>
                    <Link to={'/electriciantools'}><li>electrician tools</li></Link>
                    <Link to={'/handtools'}><li>hand tools</li></Link>
                    <Link to={'/lasers'}><li>lasers</li></Link>
                    <Link to={'/plumbingtools'}><li>plumbing tools</li></Link>
                    <Link to={'/powertools'}><li>power tools</li></Link>
                    <Link to={'/safetyequipment'}><li>safety equipment</li></Link>
                    <Link to={'/specialitytools'}><li>speciality tools</li></Link>
               </ul>
            </div>
        </aside>
    );
}

export default Aside;