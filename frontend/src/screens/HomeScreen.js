import React from 'react'
import products from '../products'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

function HomeScreen() {
 return (
  <div>
   <h1>latest one</h1>
   <Row>
    {products.map(product => (
     <Col key={product._id} sm = {12} ms = {6} lg = {4} xl={3} >
       <Product product={product}/>
     </Col>

    ))}
   </Row>
  </div>
 )
}

export default HomeScreen
