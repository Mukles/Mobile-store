import React from 'react';
import MyCartList from './MyCartList';
import Title from './Title';
import {Clear} from './ComStyle';
import {Consumerpro} from './contex';

const MyCart = () =>{
  return(
    <React.Fragment>
      <Consumerpro>
      {
        value =>{
          if(value.cart.length > 0){
            return(
              <div className='container-fluid pt-2'>
                <div className='row'>
                  <div className='col-12'>
                    <Title name={'Your'} title={'Cart'}/>
                  </div>
                </div>
                <div className='row d-lg-block d-none'>
                <div className='col-10 mx-auto'>
                  <div className='row'>
                    <div className='col-md-2'>
                      <p className='text-capitalize text-center'>Product</p>
                    </div>
                    <div className='col-md-2'>
                      <p className='text-capitalize text-center'>Name of the Product</p>
                    </div>
                    <div className='col-md-2'>
                      <p className='text-capitalize text-center'>Price</p>
                    </div>
                    <div className='col-md-2'>
                      <p className='text-capitalize text-center'>Quality</p>
                    </div>
                    <div className='col-md-2'>
                      <p className='text-capitalize text-center'>remove</p>
                    </div>
                    <div className='col-md-2'>
                      <p className='text-capitalize text-center'>Products</p>
                    </div>
                  </div>
                </div>
                </div>
                <div className='row'>
                  <div className='col-10 mx-auto'>
                  {
                    value.cart.map(item => <MyCartList key={item.id} cart={item} />)
                  }
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 text-right pr-5 mr-5'>
                    <Clear className='' onClick={value.clearCart}>Clear Cart</Clear>
                    <p className='lead mr-5'>Totol:{value.totalPrice}</p>
                  </div>
                </div>
              </div>
            )
          }
          else{
            return(
              <div className='container py-3'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h1 className='display-lg-4 display-5 text-center' style={{fontStyle: 'italic'}}>Your Cart is Empty</h1>
                  </div>
                </div>
              </div>
            )
          }
        }
      }
      </Consumerpro>
    </React.Fragment>
  )
}

export default MyCart;
