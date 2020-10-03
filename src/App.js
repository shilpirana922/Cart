import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"

import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import BuyNow from "./components/BuyPage.js"
import Cart from "./components/Cart.js"
import {Container, Row ,Col} from "reactstrap"


function App() {

const [cartItem, setCartItem] = useState([])

//--It checks to add the item in cart
const addInCart = item =>{
  const isAlreadyAdded = cartItem.findIndex(function(array){
       return array.id===item.id
  })
  if(isAlreadyAdded !== -1){
    toast("Already Added In The Cart",{
      type : "error"
    })
    return;
  }

  setCartItem([...cartItem,item])
}

// -------Buy Function----
const buyNow = ()=>{
  setCartItem([]);
  toast("Purchase Complete",{
    type : "success"
  })
}

// Remove Function
const removeItem = (item)=>{
  setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
}


  return (
   <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyNow addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
   </Container>

  );
}

export default App;
