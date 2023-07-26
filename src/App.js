/*global Pds*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import mattressData from './pages/mattressData.json'
import motionData from './pages/motionData.json'
import topperData from './pages/topperData.json'
import pillowData from './pages/pillowData.json'

import Mattress from './pages/Mattress'
import Motion from './pages/Motion'
import Topper from './pages/Topper'
import Pillow from './pages/Pillow'
import Detail from './pages/Detail';

import Cart from './pages/option/Cart'
import HeaderNavbar from './pages/HeaderNavbar'
import './pages/style/Style.css'

import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from './pages/option/store'

import Main_Swiper from './pages/option/Swiper/Main_Swiper'


function App() {
  const mattressProducts  = mattressData.mattress.Slow_Product_Mattress;
  const motionProducts = motionData.motion.Slow_Product_Motion;
  const pillowProducts = pillowData.pillow.Slow_Product_Pillow;
  const topperProducts = topperData.topper.Slow_Product_Topper;


  return (
    <div className="App">
      <HeaderNavbar></HeaderNavbar>
      <Routes>
        <Route path='/' element = {
          <Container className='Swiper_Container'>
            <Main_Swiper>

            </Main_Swiper>
          </Container>
        }/>
        <Route path='Mattress' element={<Mattress/>}/>
        <Route path='Motion' element={<Motion/>}/>
        <Route path='Topper' element={<Topper/>}/>
        <Route path='Pillow' element={<Pillow/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path="/Mattress/Detail/:number" element={<Detail mattressProducts={mattressProducts} />} />
        <Route path="/Motion/Detail/:number" element={<Detail motionProducts={motionProducts} />} />
        <Route path="/Pillow/Detail/:number" element={<Detail pillowProducts={pillowProducts} />} />
        <Route path="/Topper/Detail/:number" element={<Detail topperProducts={topperProducts} />} />
      </Routes>
    </div>
  );
}

export default App;
