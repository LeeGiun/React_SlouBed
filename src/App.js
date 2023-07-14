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
          <Container>
            <div className='visual' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/visualMain.jpg'})` }}>
              <div className='visual_txt'>
                <p>Open 플래그십 스토어 논현</p>
                <h2>
                  고밀도 수면의 가치를 담아낸<br/>
                  새로운 체험 공간
                </h2>
                <button className='viual_btn'>View  More</button>
              </div>
            </div>
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
