import React from 'react';
import { Link } from 'react-router-dom';
import {ProductWrapper} from './ComStyle';
import {Consumerpro} from './contex';


const Product = (props) =>{
    return(
      <ProductWrapper className='col-12 col-md-6 col-lg-4 mb-4'>
        <div className='card'>
        <Consumerpro>
        {
          value =>{
            return(
              <div className='img-wrapper' onClick={() =>value.handleDetail(props.product.id)}>
              <Link to='/Deatils'>
                <img src={props.product.img} alt='Produdct-img' className='img-fluid card-img-top'/>
             </Link>
                <button className='cart' onClick={
                  () =>{value.addtoCart(props.product.id);
                  value.valueModal(props.product.id);}}
                  disabled={props.product.inCart? true: false}>{props.product.inCart?'incart': <i className='fas fa-cart-plus'> </i>}</button>
              </div>
            )
          }
        }
        </Consumerpro>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <h4 className='mb-0'style={{fontStyle:'italic'}}>{props.product.title}</h4>
            <p className='mb-0' style={{fontStyle: 'italic'}}><strong><span>$ &nbsp;</span>{props.product.price}</strong></p>
          </div>
        </div>
       </ProductWrapper>
  )
}
export default Product;
