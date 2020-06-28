import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Modal from './Components/Modal'
import MyCart from './Components/MyCart';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/cart' component={MyCart} />
          <Route path='/Deatils' component={Details} />
        </Switch>
        <Modal/>
    </div>
  );
}

export default App;
