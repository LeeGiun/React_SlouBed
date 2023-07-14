import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from './option/store'

export default function Detail(props) {
  const { mattressProducts, motionProducts, pillowProducts, topperProducts } = props;
  const { number } = useParams();
  const index = Number(number) + 1;
  const dispatch = useDispatch();

  let product;
  if (mattressProducts) {
    product = mattressProducts.find(product => product.number === index);
  } else if (motionProducts) {
    product = motionProducts.find(product => product.number === index);
  } else if (pillowProducts) {
    product = pillowProducts.find(product => product.number === index);
  } else if (topperProducts) {
    product = topperProducts.find(product => product.number === index);
  }

  if (!product) {
    console.log('number:', number);
    console.log('mattressProducts:', mattressProducts);
    console.log('motionProducts:', motionProducts);
    console.log('pillowProducts:', pillowProducts);
    console.log('topperProducts:', topperProducts);
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Detail</h1>
      <img src={`${process.env.PUBLIC_URL}${product.image}`} alt='product_img' style={{ width: 500 }}/>
      <h4>{product.product_name}</h4>
      <p>{product.after_price}</p>
      <p>{product.before_price}</p>
      <button onClick={() => dispatch(addItem({ id: product.id, product_name: product.product_name, count: 1 }))}>장바구니</button>
    </div>
  )
}