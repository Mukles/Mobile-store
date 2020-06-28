import React from 'react';
import {Consumerpro} from './contex';

const MyCartList = ({cart}) =>{
  const {img, title, price, total, count,id} = cart;
    return(
      <React.Fragment>
      <Consumerpro>
      {
        value =>{
          return(
            <div className='row'>
              <div className='col-lg-2 text-center d-flex align-items-center mr-auto p-0 justify-content-center'>
                <img className='img-fluid' src={img} alt={title} />
              </div>
              <div className='col-lg-2 text-center d-flex align-items-center justify-content-center'>
                <p className='lead'>{title}</p>
              </div>
              <div className='col-lg-2 text-center d-flex align-items-center justify-content-center'>
                <p>${price}</p>
              </div>
              <div className='col-lg-2 text-center d-flex align-items-center justify-content-center'>
                <button onClick={()=>(value.Decrement(id))} className='py-0 px-3'>-</button>
                <button disabled className='mx-2 px-3 text-dark'>{count}</button>
                <button onClick={() => value.Increament(id)} className='px-3 py-0'>+</button>
              </div>
              <div className='col-lg-2 text-center d-flex align-items-center justify-content-center'>
                <button onClick={()=> value.removeCart(id)}><i className="fas fa-trash"></i></button>
              </div>
              <div className='col-lg-2 text-center d-flex align-items-center justify-content-center'>
                <p className='lead'>${total}</p>
              </div>
          </div>
          )
        }
      }
      </Consumerpro>
      </React.Fragment>
    )
}
export default MyCartList;
