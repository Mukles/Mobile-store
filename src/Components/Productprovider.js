import React,{Component} from 'react';
import {Productpro} from './contex';
import {storeProducts, detailProduct} from './data';

class Productprovider extends Component{
  constructor(props){
    super(props)
    this.state ={
      product: [],
      detailProduct,
      cart: [],
      isModalopen: false,
      modaElement:{},
      totalPrice: []
    }
  }

// get the item
  getItem = id =>{
    return this.state.product.find(item => item.id === id);
  }

  //Detail handler
  handleDetail = (id) =>{
    const tempProduct = this.getItem(id);
    return this.setState(() =>{
      return {detailProduct: tempProduct}
    });
  }

//add item on cart
  addtoCart = id =>{
    const tempProduct = [...this.state.product];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.total = +product.price;
    product.count = 1;
    this.setState(() =>{
      return {product: tempProduct, detailProduct:{...product}, cart: [...this.state.cart, product]}
    }, () =>{
      this.setTotal();
    });
  }

//Remove Cart item
  removeCart = (id) =>{
    const products = [...this.state.product];
    const cartItems = [...this.state.cart];
    const index = products.indexOf(this.getItem(id));
    const remainderCart = products[index];
    remainderCart.inCart = false;
    remainderCart.count = 0;
    remainderCart.total = 0;
    const tempCart = cartItems.filter(item =>item.id !==id);
    return this.setState(() =>{
      return {cart: tempCart,product:[...products]}
    },() =>this.setTotal());
  }

//Clear the Item
  clearCart =() =>{
    this.setState(()=>{
      return {cart: []}
    },() =>{
      this.setProduct();
    })
  }

  //Increament the Cart Item
  Increament = (id) =>{
    const products = [...this.state.product];
    const index = products.indexOf(this.getItem(id));
    const tempProduct = products[index];
    tempProduct.count += 1;
    tempProduct.total = tempProduct.price * tempProduct.count;
    this.setState(()=>{
      return {product : [...products]}
    },()=>{
      this.setTotal();
    });
  }

  //Decrement the cart item;
  Decrement = (id) =>{
    const products = [...this.state.product];
    const index = products.indexOf(this.getItem(id));
    const tempProduct = products[index];
    tempProduct.count=== 1? tempProduct.count = 1: tempProduct.count-= 1;
    tempProduct.total = tempProduct.price * tempProduct.count;
    this.setState(()=>{
      return {product : [...products]}
    },() =>{
      this.setTotal()
    });
  }

//set item on Modal
  valueModal = id =>{
    const temp = this.getItem(id);
    this.setState(()=>{
      return {isModalopen: true, modaElement:{...temp}}
    });
  }

//closing Modal
  closeModal = () =>{
    this.setState(() =>{
      return {isModalopen: false}
    })
  }

  //set Total
  setTotal = () =>{
    let sum = 0;
    const tempCart = [...this.state.cart];
    tempCart.forEach(item => sum +=item.total);
    return this.setState(()=>{
      return {totalPrice: sum}
    })
  }

// set to the state Product
  setProduct = () =>{
    let tempProducts = [];
    storeProducts.forEach(item =>{
      const Singleitem = {...item}
      tempProducts =[...tempProducts,Singleitem];
    });
    this.setState(() =>{
      return{product: tempProducts}
    });
  }

  componentDidMount(){
    this.setProduct();
   }
  render(){
    return(
      <React.Fragment>
        <Productpro value={{...this.state,
          handleDetail:this.handleDetail,
          addtoCart:this.addtoCart,
          removeCart: this.removeCart,
          clearCart: this.clearCart,
          Increament: this.Increament,
          Decrement: this.Decrement,
          setTotal: this.setTotal,
          closeModal: this.closeModal,
          valueModal: this.valueModal}}>
          {this.props.children}
        </Productpro>
      </React.Fragment>
    )
  }
}

export default Productprovider;
