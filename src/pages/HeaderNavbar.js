import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Mattress from './Mattress'
import Motion from './Motion'
import Topper from './Topper'
import Pillow from './Pillow'
import './style/Style.css'

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


export default function HeaderNavbar() {

  const navigate = useNavigate()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className='Haeder'>
      <Navbar>
        <Container>
          <div className='Nav_logo' onClick={() => {navigate('./')}}>
            <img src={process.env.PUBLIC_URL + './images/logo.svg'} alt="" />
          </div>
          <Navbar.Brand onClick={() => {navigate('/')}} >HOME
          </Navbar.Brand>
          <Navbar.Brand onClick={() => {navigate('/Mattress')}}>매트리스
          </Navbar.Brand>
          <Navbar.Brand onClick={() => {navigate('/Motion')}}>모션베드
          </Navbar.Brand>
          <Navbar.Brand onClick={() => {navigate('/Topper')}}>토퍼
          </Navbar.Brand>
          <Navbar.Brand onClick={() => {navigate('/Pillow')}}>베개/커버
          </Navbar.Brand>
          <Navbar.Brand onClick={() => {navigate('/Cart')}}>장바구니
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
