import React from 'react';
import styled from 'styled-components';
import {ButtonContainer} from './ComStyle';
import {Consumerpro} from './contex';
import {Link} from 'react-router-dom';

const Modal = () =>{
  return(
    <Consumerpro>
      {
        value =>{
          const {isModalopen, modaElement} = value;
          return(isModalopen &&
            <ModalContainer className='d-flex align-items-center justify-content-center'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-4 col-12 mx-auto'>
                    <div className='card'>
                      <div className='card-body px-0 py-0 pt-2'>
                      <h3 className='mb-0 h3 text-center'>Item added to the cart</h3>
                      <img className='img-fluid' src={modaElement.img} alt={modaElement.title} />
                      <div className='d-flex justify-content-center pt-2 pb-3'>
                      <Link to='/'>
                        <ButtonContainer Black className='px-4' onClick={value.closeModal}>Store</ButtonContainer>
                      </Link>
                      <Link to='/cart'>
                        <ButtonContainer Black Blue onClick={value.closeModal}>Go to Cart</ButtonContainer>
                      </Link>
                      </div>
                      <div className="card-footer d-flex justify-content-between align-items-center">
                        <h4 className='mb-0'style={{fontStyle:'italic'}}>{modaElement.title}</h4>
                        <p className='mb-0' style={{fontStyle: 'italic'}}><strong><span>$ &nbsp;</span>{modaElement.price}</strong></p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </ModalContainer>
          )
        }
      }
    </Consumerpro>
  )
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.75);
  .card-footer{
    background: rgba(223,223,223);
  }
`
