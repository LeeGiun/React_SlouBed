import React from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, addItem, subCount, deleteItem } from './store'

export default function Cart() {

  const state = useSelector((state => state))
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='Cart_title'>장바구니</h1>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>개수</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{state.cart[i].product_name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>
                    <button onClick={() => {dispatch(addCount(state.cart[i].id))}}>+</button>
                    <button onClick={() => {dispatch(subCount(state.cart[i].id))}}>-</button>
                    <button onClick={() => {dispatch(deleteItem(state.cart[i].id))}}>삭제</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}
