import React, { useEffect, useRef, useState } from 'react';
import './log.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../scripts/dropdown';
import { CurContext } from '../../../App';
import { Link } from 'react-router-dom';



function LogPanel(props){
    return(
        <section className='logPanel'>
            <div className='logPanel-wrap bg-dark'>
                <div className='container panel-container'>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 panel-links pr-2">
                            <a href="#a">log in</a>
                            <a href="#a">create an account</a>
                            <Link to='/checkout'>check out</Link>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 mt-sm-1 mt-lg-0 mt-md-0 panel-cur d-flex gap-3">
                            <p className='cur-title'>Currencies:</p>
                            <DropDown />
                        </div>
                        <div className="col-lg-2 col-md-0 col-sm-0 "></div>
                        <div className="col-lg-3 mt-lg-0 col-md-12 mt-md-0 mt-sm-1 col-sm-12 panel-tel">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 className='icon-tel'
                                 fill='#e61638'>
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                            </svg>
                            <p className='p-0 m-0'>Tel 1(234) 567-9842</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    );
}

export default LogPanel;

export const DropDown = function (){
    let dropbtn = useRef();
    let menu = useRef();
    const [clicked, Setclicked] = useState(false);
    const ButtonHandler = function(){
        if(clicked === false){
            menu.current.classList.add('active');
            Setclicked(!clicked);
        }
        else{
            menu.current.classList.remove('active');
            Setclicked(!clicked);
        }
    }
    return(
        <CurContext.Consumer>
            {
                (value) =>{
                    return(
                    <div className="dropdown d-flex">
                        <button ref={dropbtn} onClick={ButtonHandler} data-target='cur' className='btn dropdown-btn dropdown-toggle p-0 align-self-center'>{value.cur}</button>
                        <ul ref={menu} data-target='cur' className='dropdown-menu' >
                            <li onClick={()=>{
                                value.update('USD');
                                menu.current.classList.remove('active');
                                Setclicked(!clicked);
                            }} className='dropdown-item'>USD</li>
                            <li onClick={()=>{
                                value.update('EUR');
                                menu.current.classList.remove('active');
                                Setclicked(!clicked);
                            }} className='dropdown-item'>EUR</li>
                            <li onClick={()=>{
                                value.update('GPB');
                                menu.current.classList.remove('active');
                                Setclicked(!clicked);
                            }} className='dropdown-item'>GPB</li>
                        </ul>
                    </div>
                    );
                }
            }
        </CurContext.Consumer>
    );
} 