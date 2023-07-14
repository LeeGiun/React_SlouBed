import React from 'react'
import topperData from './topperData.json'

import { Outlet, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addItem } from './option/store'

export default function Topper() {
  const products = topperData.topper.Slow_Product_Topper;

  const dispatch = useDispatch()

  return (
    <div>
      <Outlet></Outlet>
      <Container>
        <h2 className='title'>
          <Link to ={'/'}>Home</Link>
          <span></span>
          <Link to ={'/Topper'}> 토퍼</Link>
        </h2>
        <Row>
          {products.map((product, index) => (
            <Col key={index} className={product.id}>
              <Link to={`detail/${index}`}>
                <img src={product.image} alt='product_img'/>
                {product.size.includes("none") ? null : <p className='product_size'>{product.size.replace(/\[|\]/g,"")}</p>}
                <h2 className='product_name'>{product.product_name}</h2>
                <p className='sale_price'>{product.sale}</p>
                <p className='after_price'>{parseInt(product.after_price).toLocaleString('ko-KR')}원</p>
                <p className='before_price'>{parseInt(product.before_price).toLocaleString('ko-KR')}원</p>
              </Link>
              <div className='btn_Box'>
                <button>찜하기</button>
                <button onClick={() => {dispatch(addItem({id: product.id, product_name: product.product_name, count: 1}))}}>장바구니</button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  )
}