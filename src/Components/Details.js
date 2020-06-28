import React from 'react';
import {Consumerpro} from './contex';
import {ButtonContainer} from './ComStyle';
import {Link} from 'react-router-dom';

const Details = () =>{
  return(
    <React.Fragment>
      <Consumerpro>
        {
          value =>{
            const {id,title,img,price,company,info,inCart} = value.detailProduct;
            return(
              <React.Fragment>
                <div className='container py-5'>
                  <div className='row'>
                    <div className='col-12 text-center'>
                      <h1 className='display-5'>{title} </h1>
                    </div>
                  </div>
                  <div className='row my-3'>
                    <div className='col-10 mx-auto'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <img className='img-fluid' src={img} alt={title} />
                        </div>
                        <div className='col-md-6'>
                          <h2 className='text-left'><span>Model : </span> {title} </h2>
                          <h2 className='text-muted'> <span>Made by: </span> {company} </h2>
                          <h2 className='text-info'> Price: <span className='text-warning'>${price}</span></h2>
                          <p className='font-weight-bold lead text-capitalize'>Some Info: </p>
                          <p className='lead text-muted'>{info} </p>
                          <ButtonContainer disabled={inCart ? true : false} Black onClick={
                            () =>{value.addtoCart(id)}}>Add to Cart</ButtonContainer>
                          <Link to='/'>
                          <ButtonContainer Black Blue>Contiune Shoping</ButtonContainer>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        }
      </Consumerpro>
    </React.Fragment>
  )
}

export default Details;
