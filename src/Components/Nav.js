import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import {ButtonContainer, Navbar} from './ComStyle'
import {Link} from 'react-router-dom';

const Nav = () =>{
  return(
    <React.Fragment>
      <Navbar className="navbar navbar-expand-lg  text-light">
        <img className="navbar-brand" src={logo} alt="product-brand" />
        <ul className="navbar-nav mr-sm-auto">
          <Link to='/'>
          <li className="nav-item">Product</li>
          </Link>
        </ul>
          <ButtonContainer className='ml-auto'>
          <Link to='cart'><span className='mr-2'><i className='fas fa-cart-plus'></i></span> My Cart</Link>
          </ButtonContainer>
      </Navbar>
    </React.Fragment>
  )
}

export default Nav;
