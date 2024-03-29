import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'


function ProductListScreen({history, match}) {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() =>  {
    if(userInfo && userInfo.isAdmin){
      dispatch(listProducts())

    }else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  const deleteHandler = (id) => {
    if(window.confirm("Are you sure you want to delete this product?")){
    // delete products
    }

  }

  const CreateProductHandler = (product) => {
    // create product 
  }
  return (
    <div>
      <Row className='align-items-center'>
        <Col>
        <h1>Products</h1>
        </Col>
        <Col className='text-rigth'>
        <Button className='my-3' onClick={CreateProductHandler}>
           <i className='fas fa-plus'></i> Create product
        </Button>
        </Col>
         
      </Row>

      {loading 
      ? (<Loader />)
      :error
      ?(<Message variant = 'danger'> {error}</Message>)
      :(
        <Table hover responsive className="table-sm">
          <thead>
            <tr>
              <th> ID </th>
              <th> NAME </th>
              <th> PRICE </th>
              <th> CATEGORY </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
                <tr key = {product._id}>

                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}> 
                      <Button variant='light' className='bnt-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                      </LinkContainer>

                      <Button variant='danger' className='bnt-sm' onClick={() => deleteHandler(product._id)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                      </td>

                </tr>
            ))}
          </tbody>

        </Table>
      )}
    </div>
  )
}

export default ProductListScreen
