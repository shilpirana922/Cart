import React from "react"
import {Container, ListGroup, ListGroupItem,Button,Card, CardBody, CardHeader, CardFooter,Row, Col,} from "reactstrap";
 const Cart = ({cartItem,  buyNow, removeItem})=>{

    let amount =0;
    cartItem.forEach(item => {
        amount= parseFloat(amount)+ parseFloat(item.productPrice)
    });
   
     return(
         <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item =>(
                    <ListGroupItem key={item.id}>
                       <Row>
                           <Col>
                           <img height={80} src={item.tinyImage}/>
                           </Col>
                           <Col className="text-center">
                               <div className="text-primary">
                                   {item.productName}
                               </div>
                             <span>Price: RS {item.productPrice}</span>
                             <Button color="warning" onClick={()=> removeItem(item)}>Remove</Button>
                           </Col>
                       </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

        {/* if list is empty */}
        {
            cartItem.length >= 1 ? (
              <Card className="text-center mt-3">
                  <CardHeader>Grand Total</CardHeader>
                  <CardBody>
                      Your amount for {cartItem.length} product is RS: {amount}
                  </CardBody>
                    <CardFooter>
                        <Button className="text-warning" onClick={buyNow}>Pay Here</Button>
                    </CardFooter>
              </Card>
            ): 
            (<h1 className="text-warning">Cart is Empty</h1>)
        }
         </Container>
     )
 }

 export default Cart;