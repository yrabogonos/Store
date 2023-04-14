import React from 'react';
import './aside.scss';
import { Link } from 'react-router-dom';


function Aside(props){
    return(
        <aside className='aside'>
            <div className="aside-wrap">
               <h2 className='category-name'>Categories</h2>
               <ul className='aside-cat p-0'>
                    <li>{<Link to={'/baretools'}>Bare tools</Link>}</li>
                    <li>{<Link to={'/dustcollectors'}>Dust collectors</Link>}</li>
                    <li>{<Link to={'/electriciantools'}>electrician tools</Link>}</li>
                    <li>{<Link to={'/handtools'}>hand tools</Link>}</li>
                    <li>{<Link to={'/lasers'}>lasers</Link>}</li>
                    <li>{<Link to={'/plumbingtools'}>plumbing tools</Link>}</li>
                    <li>{<Link to={'/powertools'}>power tools</Link>}</li>
                    <li>{<Link to={'/safetyequipment'}>safety equipment</Link>}</li>
                    <li>{<Link to={'/specialitytools'}>speciality tools</Link>}</li>
               </ul>
            </div>
        </aside>
    );
}

export default Aside;