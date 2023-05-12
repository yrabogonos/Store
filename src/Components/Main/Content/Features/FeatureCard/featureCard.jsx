import React from 'react';
import './featureCard.scss';
import '../../../../../assets/img/f1.avif'
import { Link } from 'react-router-dom';
import ProductsDetails from '../../../../Products/productDetails';
import { CurContext } from '../../../../../App';


  

function FeatureCard(props){
    let addItem = () => {
        let item ={
                    title:props.data.title,
                    img:props.data.img,
                    price:props.data.price,
                    q:1
                }
        props.addItem(item);
    }
    return(
        <CurContext.Consumer>
            {
                (value) =>{             
                    return(
                        <div className="fcard">
                            <div className="fcard-wrap d-flex">
                                <div className="fcard-container">
                                    <div className="fcard-img">
                                        <Link to={`./${props.data.id}`} ><img src={props.data.img} alt='d' className='mb-5'/></Link>
                                    </div>
                                    <div className="fcard-price">{(props.data.price * value.translate(value.cur).m).toFixed(2)} {value.translate(value.cur).sign}</div>
                                    <Link to={`productDetails/${props.data.id}`} className='fcard-title mb-2' href='#f'>{props.data.title}</Link>
                                    <p className='fcard-text mb-3'>{props.data.text}</p>
                                    <button class="btn fcard-btn p-0" type="submit" onClick={()=>{
                                        // itemChange();
                                        addItem();
                                    
                                    }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                    fill='white'
                                    className='ficon-cart'><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg><p className='m-0'>Add to cart</p></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </CurContext.Consumer>
    );
}

export default FeatureCard;