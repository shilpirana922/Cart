import React , {useState, useEffect} from "react";

import Axios from "axios";
import {random , commerce} from "faker";
import {Container, Col, Row} from "reactstrap";
import CardItem from "./CardItem.js";

const apiKey = "INSER_IT_HERE";
const localUrl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyNow = ({addInCart})=>{
   
    const [product, setProduct] = useState([]);

    //----Fetching Photos Data From API-----
    const fetchPhotos = async() => {
        const {data} = await Axios.get(localUrl);
    
    const {photos} = data;
     const allPhotos = photos.map(photo => {
        return {
            smallImage : photo.src.medium,
            tinyImage : photo.src.tiny,
            productName : random.word(),
            productPrice :commerce.price(),
            id :random.uuid()
     }
     })

      
     setProduct(allPhotos)
    }


    useEffect(()=>{
       fetchPhotos();
    },[]);


    return <Container fluid>
           <h1 className="text-success text-center">Buy Page</h1>
           <Row>
               {product.map(product=>(
                  <Col md={4} key={product.id}>
                      <CardItem product={product} addInCart={addInCart} ></CardItem>
                  </Col> 
               ))}
           </Row>
    </Container>
}
export default BuyNow;