import React from 'react';
import {Consumerpro} from './contex';
import Title from './Title';
import Product from './Product';

const ProducList = () =>{
  return(
    <React.Fragment>
      <div className='py-3'>
      <div className='container'>
      <Title name={'Our'} title={'Product'}/>
        <div className='row mt-lg-5'>
          <Consumerpro>
          {value =>{
           return(value.product.map((item, i) => <Product product={item} key={i}/>))
          }}
          </Consumerpro>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default ProducList;
