import React from 'react';
import './aside.scss';
import { Link } from 'react-router-dom';


function Aside(props){
    return(
        <aside className='aside'>
            <div className="aside-wrap">
               <h2 className='category-name'>Categories</h2>
               <ul className='aside-cat p-0'>
                    <Link to={'/bare-tools'}><li>Bare tools</li></Link>
                    <Link to={'/dust-collectors'}><li>Dust collectors</li></Link>
                    <Link to={'/electrician-tools'}><li>electrician tools</li></Link>
                    <Link to={'/hand-tools'}><li>hand tools</li></Link>
                    <Link to={'/lasers'}><li>lasers</li></Link>
                    <Link to={'/plumbing-tools'}><li>plumbing tools</li></Link>
                    <Link to={'/power-tools'}><li>power tools</li></Link>
                    <Link to={'/safety-equipment'}><li>safety equipment</li></Link>
                    <Link to={'/speciality-tools'}><li>speciality tools</li></Link>
               </ul>
            </div>
        </aside>
    );
}

export default Aside;