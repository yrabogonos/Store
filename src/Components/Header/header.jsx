import React, { useEffect, useRef, useState } from 'react';
import './header.scss';
import LogPanel from './LogPannel/log';
import logo from '../../assets/img/logo.jpg';
import { Link } from 'react-router-dom';
import BucketContainer from '../BucketContainer/BucketContainer';
import StoreContext from '../../StoreContext';
import { getLenghtCreator } from '../../Redux/cartReducer';
import { CurContext } from '../../App';



function Header(props){
    const ctrlRow = useRef();
    const fixedHeader = useRef();
    const [chartActive, SetchartActive] = useState(false);
    
    useEffect(()=>{
        window.onscroll = ()=>{
            if(window.pageYOffset>ctrlRow.current.offsetTop){
                fixedHeader.current.style.display = 'block';
            }
            else{
                fixedHeader.current.style.display = 'none';
            }
        }
    });

    return(
        <StoreContext.Consumer>
          {
              (store) =>{
                return(
                    <CurContext.Consumer>
                        {
                            (value)=>{
                                let state = store.getState().cart.items;
                                let totalCount = ()=>{
                                  let count = 0;
                                  state.forEach(item=>count+=item.q);
                                  if(count === 0){
                                      return ''
                                  }
                                  else{
                                      return count;
                                  }
                                }
                                let totalPrice = function (){
                                  let res = 0;
                                  state.forEach(item=>res+=(item.price*value.translate(value.cur).m)*item.q);
                                  return res;
                                }
                                return(
                                    <header className='header'>
                                        <div className='header-wrap'>
                                            <LogPanel />
                                            <div className="container">
                                                <div className="header-items">
                                                    <div className="header-logotype">
                                                        <Link to='/'><img src={logo} className='img-logo' alt="logo" /></Link>
                                                    </div>
                                                    <div className="header-controls d-flex flex-column gap-3">
                                                        <div className="control-row1" ref={ctrlRow}>
                                                            <Link to='/'>Home</Link>
                                                            <a href="#f">Categories</a>
                                                            <a href="#f">About us</a>
                                                            <a href="#f">blog</a>
                                                            <a href="#f">documentation</a>
                                                            <a href="#f">contact us</a>
                                                        </div>
                                                        <select name="control-select" className='d-none' id="selMobile" onChange={(e)=>{
                                                            const select = e.target;
                                                            let selectedOption = select.options[select.selectedIndex];
                                                            window.location.href = '';
                                                            window.location.href = selectedOption.value;
                                                            select.value = selectedOption.value;
                                                            
                                                           

                                                        }}>
            
                                                                <option><a href="#f">Categories</a></option>
                                                                <option value="/Store/bare-tools">- Bare tools</option>
                                                                <option value="/Store/dust-collectors">- Dust Collectors</option>
                                                                <option value="/Store/electrician-tools">- Electrician tools</option>
                                                                <option value="/Store/hand-tools">- Hand tools</option>
                                                                <option value="/Store/lasers">- Lasers</option>
                                                                <option value="/Store/plumbing-tools">- Plumbing tools</option>
                                                                <option value="/Store/power-tools">- Power tools</option>
                                                                <option value="/Store/safety-equipment">- Safety Equipment</option>
                                                                <option value="/Store/speciality-tools">- Speciality tools</option>
                                                                <option value="3"><a href="#f">About us</a></option>
                                                                <option value="4"><a href="#f">Blog</a></option>
                                                                <option value="5"><a href="#f">Documentation</a></option>
                                                                <option value="6"><a href="#f">Contact us</a></option>
                                                        </select>
                                                        <div className="control-row2 d-flex justify-content-between">
                                                           <div className="control-search d-flex">
                                                                <input type="text" className='control-input' />
                                                                 <input type="submit" value='Search' className='control-sub' />
                                                           </div>
                                                           <div className="control-cart d-flex" onClick={(e)=>{
                                                                if(!e.target.classList.contains('dclose'))
                                                                {
                                                    
                                                                    SetchartActive(!chartActive);
                                                                }
                                                           }}>
                                                                {chartActive && (
                                                                    <BucketContainer/>
                                                                )}
                                                                
                                                                <Link to='/checkout'><button className='dclose control-chart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                                fill='white'
                                                                className='icon-cart dclose'><path className='dclose' d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button></Link>
                                                                <p className ='m-0 control-total'>{totalCount()} Item(s) -<span>{value.translate(value.cur).sign} {(parseFloat(totalPrice())).toFixed(2)}</span></p>
                                                           </div>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='fixedheader' ref={fixedHeader}>
                                            <div className="fixedheader-wrap d-flex">
                                               <div className="fixedheader-container">
                                               {<Link to={'/'}>Home</Link>}
                                                <a href="#f">Categories</a>
                                                <a href="#f">About us</a>
                                                <a href="#f">blog</a>
                                                <a href="#f">documentation</a>
                                                <a href="#f">contact us</a>
                                               </div>
                                            </div>
                                        </div>
                                       
                                    </header>
                                );
                            }
                        }
                    </CurContext.Consumer>
                );
                    
                //   let state = store.getState().cart.items;
                //   let totalCount = ()=>{
                //     let count = 0;
                //     state.forEach(item=>count+=item.q);
                //     if(count === 0){
                //         return ''
                //     }
                //     else{
                //         return count;
                //     }
                //   }
                //   let totalPrice = function (){
                //     let res = 0;
                //     state.forEach(item=>res+=item.price*item.q);
                //     return res;
                //   }
                // return(
                //     <header className='header'>
                //         <div className='header-wrap'>
                //             <LogPanel />
                //             <div className="container">
                //                 <div className="header-items">
                //                     <div className="header-logotype">
                //                         <a href="#f"><img src={logo} className='img-logo' alt="logo" /></a>
                //                     </div>
                //                     <div className="header-controls d-flex flex-column gap-3">
                //                         <div className="control-row1" ref={ctrlRow}>
                //                             <a href="#f">Home</a>
                //                             <a href="#f">Categories</a>
                //                             <a href="#f">About us</a>
                //                             <a href="#f">blog</a>
                //                             <a href="#f">documentation</a>
                //                             <a href="#f">contact us</a>
                //                         </div>
                //                         <select name="control-select" className='d-none' id="selMobile">
                //                                 <option value="1"><a href="#f">Home</a></option>
                //                                 <option value="2"><a href="#f">Categories</a></option>
                //                                 <option value="2"><a href="#f">- Power tools</a></option>
                //                                 <option value="3"><a href="#f">About us</a></option>
                //                                 <option value="4"><a href="#f">Blog</a></option>
                //                                 <option value="5"><a href="#f">Documentation</a></option>
                //                                 <option value="6"><a href="#f">Contact us</a></option>
                //                         </select>
                //                         <div className="control-row2 d-flex justify-content-between">
                //                            <div className="control-search d-flex">
                //                                 <input type="text" className='control-input' />
                //                                  <input type="submit" value='Search' className='control-sub' />
                //                            </div>
                //                            <div className="control-cart d-flex" onClick={(e)=>{
                //                                 if(!e.target.classList.contains('dclose'))
                //                                 {
                //                                     SetchartActive(!chartActive);
                //                                 }
                //                            }}>
                //                                 {chartActive && (
                //                                     <BucketContainer/>
                //                                 )}
                //                                 <button className='control-chart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                //                                 fill='white'
                //                                 className='icon-cart'><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
                //                                 <p className ='m-0 control-total'>{totalCount()} Item(s) -<span>{(parseFloat(totalPrice())).toFixed(2)}</span></p>
                //                            </div>
                                           
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //         <div id='fixedheader' ref={fixedHeader}>
                //             <div className="fixedheader-wrap d-flex">
                //                <div className="fixedheader-container">
                //                {<Link to={'/'}>Home</Link>}
                //                 <a href="#f">Categories</a>
                //                 <a href="#f">About us</a>
                //                 <a href="#f">blog</a>
                //                 <a href="#f">documentation</a>
                //                 <a href="#f">contact us</a>
                //                </div>
                //             </div>
                //         </div>
                       
                //     </header>
                // );
              }
             
          }
        </StoreContext.Consumer>
      );
  
    
}

export default Header;