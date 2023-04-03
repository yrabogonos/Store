import React, { useEffect } from 'react';
import './log.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../scripts/dropdown';



function LogPanel(props){
    useEffect(()=>{
        document.querySelectorAll('.dropdown-btn').forEach(btn => btn.addEventListener('click', (e) =>{
            var target = e.currentTarget;
            var menu = target.dataset.target; 
            document.querySelectorAll('.dropdown-menu').forEach(e =>{
                if(e.dataset.target == menu && !e.classList.contains('open')){
                    e.classList.add('active');
                    var id = setTimeout(()=> e.classList.add('open'), 0)
               
                }
                if(e.dataset.target == menu && e.classList.contains('open')){
                    e.classList.remove('active');
                    clearTimeout(id);
                    setTimeout(()=> e.classList.remove('open'), 0)
                    
                }
            });
            
          
        }));
    });

    
    return(
        <section className='logPanel'>
            <div className='logPanel-wrap bg-dark'>
                <div className='container panel-container'>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 panel-links">
                            <a href="#a">log in</a>
                            <a href="#a">create an account</a>
                            <a href="#a">check out</a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 mt-sm-1  panel-cur">
                            <div className="dropdown">
                                <button data-target='cur' className='btn dropdown-btn dropdown-toggle p-0'>Currencies:</button>
                                <ul data-target='cur' className='dropdown-menu' >
                                    <li><a href="#a" className='dropdown-item'>USD</a></li>
                                    <li><a href="#a" className='dropdown-item'>EUR</a></li>
                                    <li><a href="#a" className='dropdown-item'>UAH</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-0 col-sm-0 "></div>
                        <div className="col-lg-3 col-md-12 mt-md-2 mt-sm-1 col-sm-12 panel-tel">
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