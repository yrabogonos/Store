import React, { useRef, useState } from 'react';
import './contactus.scss';

export const ContactUs = function(){
    const [isclicked, Setclicked] = useState(false);
    const name = useRef();
    const mail = useRef();
    const message = useRef();
    const btn = React.createRef();
    const form = React.createRef();
    const ButtonHandler = function(){
        if(isclicked === false){
          for(const child of btn.current.children){
            child.style.display = 'none';
          }
          btn.current.classList.add('btnActive');
          form.current.style.display = 'block';

          Setclicked(!isclicked);
        }
        else{
            for(const child of btn.current.children){
                child.style.display = 'block';
            }
            btn.current.classList.remove('btnActive');
            form.current.style.display ='none';
            Setclicked(!isclicked);
            
        }
    }
    return(
       <div className="contactus-container">
            <div ref={form} className='contact-form'>
                <div className="form-wrap">
                    <div className="form-header">
                        <h1>Contact us!</h1>
                        <p>We're not around but we still want to hear from you! Leave us a note:</p>
                    </div>
                    <div className="form-body">
                        <div className="body-hint">* indicates a required field</div>
                        <div className="body-inputs mt-3 g-2">
                            <div className="input-el d-flex flex-column gap-1 mb-2">
                                <p className='p-0 m-0'>Name<span>*</span></p>
                                <input ref={name} type="text" placeholder='Enter your name...' />
                            </div>
                            <div className="input-el d-flex flex-column gap-1 mb-2">
                                <p className='p-0 m-0'>Email<span>*</span></p>
                                <input ref={mail} type="text" placeholder='Enter your mail...' />
                            </div>
                            <div className="input-el d-flex flex-column gap-1 mb-4">
                                <p className='p-0 m-0'>Message<span>*</span></p>
                                <textarea ref={message} name="message"></textarea>
                            </div>
                            <input type="submit" className='input-submit' value='Send' onClick={()=>{
                                name.current.value = '';
                                mail.current.value = '';
                                message.current.value = '';
                                alert('Mesage was successfully sended!');
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <button ref={btn} onClick={ButtonHandler} className='contactus d-flex'>
            <svg viewBox="0 0 32 32" className='contactus-icon' fill='white' xmlns="http://www.w3.org/2000/svg"><title/><g data-name="mail email e-mail letter" id="mail_email_e-mail_letter"><path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z"/><path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z"/></g></svg>
            <h2 className='m-0'>Contact us!</h2>

        </button>
       </div>
    );
}

