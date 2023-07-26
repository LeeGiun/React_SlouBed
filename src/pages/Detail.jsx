import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from './option/store'
import { Link } from 'react-router-dom'
import './style/Detail_Style.css'
import { useEffect } from 'react'


export default function Detail(props) {


  useEffect(() => {
    document.querySelector('html').style.backgroundColor = '#fff';
    document.querySelector('.App').style.backgroundColor = '#fff';
    return () => {
      document.querySelector('html').style.backgroundColor = '';
      document.querySelector('.App').style.backgroundColor = '';
    }
  }, [])



  const { mattressProducts, motionProducts, pillowProducts, topperProducts } = props;
  const { number } = useParams();
  const index = Number(number) + 1;
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [border, setBorder] = useState('1px solid #000')
  const [backgroundColor1, setBackgroundColor1] = useState('antiquewhite');
  const [backgroundColor2, setBackgroundColor2] = useState('white');
  const [backgroundColor3, setBackgroundColor3] = useState('white');
  const [backgroundColor4, setBackgroundColor4] = useState('white');
  const [backBorder1, setBackBorder1] = useState('1px solid orange')
  const [backBorder2, setBackBorder2] = useState('1px solid #000')
  const [backBorder3, setBackBorder3] = useState('1px solid #000')
  const [backBorder4, setBackBorder4] = useState('1px solid #000')
  const [selectedSize, setSelectedSize] = useState(null);

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

  const handleUpBtnClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const handleDownBtnClick = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleColorChange1 = () => {
    if (backgroundColor1 === 'white') {
      setBackgroundColor1('antiquewhite');
      setBackBorder1('1px solid orange')
      setBackgroundColor2('white');
      setBackBorder2('1px solid #000')
      setBackgroundColor3('white');
      setBackBorder3('1px solid #000')
      setBackgroundColor4('white');
      setBackBorder4('1px solid #000')
    } else {
      setBackgroundColor1('white');
      setBackBorder1('1px solid #000')
    }
  }

  const handleColorChange2 = () => {
    if (backgroundColor2 === 'white') {
      setBackgroundColor1('white');
      setBackBorder1('1px solid #000')
      setBackgroundColor2('antiquewhite');
      setBackBorder2('1px solid orange')
      setBackgroundColor3('white');
      setBackBorder3('1px solid #000')
      setBackgroundColor4('white');
      setBackBorder4('1px solid #000')
    } else {
      setBackgroundColor2('white');
      setBackBorder2('1px solid #000')
    }
  }

  const handleColorChange3 = () => {
    if (backgroundColor3 === 'white') {
      setBackgroundColor1('white');
      setBackBorder1('1px solid #000')
      setBackgroundColor2('white');
      setBackBorder2('1px solid #000')
      setBackgroundColor3('antiquewhite');
      setBackBorder3('1px solid orange')
      setBackgroundColor4('white');
      setBackBorder4('1px solid #000')
    } else {
      setBackgroundColor3('white');
      setBackBorder3('1px solid #000')
    }
  }

  const handleColorChange4 = () => {
    if (backgroundColor4 === 'white') {
      setBackgroundColor1('white');
      setBackBorder1('1px solid #000')
      setBackgroundColor2('white');
      setBackBorder2('1px solid #000')
      setBackgroundColor3('white');
      setBackBorder3('1px solid #000')
      setBackgroundColor4('antiquewhite');
      setBackBorder4('1px solid orange')
    } else {
      setBackgroundColor4('white');
      setBackBorder4('1px solid #000')
    }
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size === "none" ? "단품" : size);
  }


  return (
    <div className='Detail_box'>
      <div className='Detail_outer'>
        <div className='img_box'>
          <img src={`${process.env.PUBLIC_URL}${product.image}`} alt='product_img' style={{ width: 500 }} />
          <h2 className='Detail_title'>
            <Link to='/'>Home</Link>
            <span></span>
            <Link to={`/${product.catagory}`}>{product.catagory}</Link>
            <span></span>
            <h2> Detail</h2>
          </h2>
        </div>
        <div className="Detail_txt">
          <h4>{product.product_name}</h4>
          <div className='sizeBox'>
            {product.size && !product.size.includes("none") ? <p className='Detail_product_size' style={{ backgroundColor: backgroundColor1, border: backBorder1 }} onClick={() => { handleColorChange1(); handleSizeClick(product.size); }}>{product.size.replace(/\[|\]/g, "")}</p> : null}

            {product.size2 && !product.size2.includes("none") ? <p className='Detail_product_size2' style={{ backgroundColor: backgroundColor2, border: backBorder2 }} onClick={() => { handleColorChange2(); handleSizeClick(product.size2); }}>{product.size2.replace(/\[|\]/g, "")}</p> : null}

            {product.size3 && !product.size3.includes("none") ? <p className='Detail_product_size3' style={{ backgroundColor: backgroundColor3, border: backBorder3 }} onClick={() => { handleColorChange3(); handleSizeClick(product.size3); }}>{product.size3.replace(/\[|\]/g, "")}</p> : null}

            {product.size4 && !product.size4.includes("none") ? <p className='Detail_product_size4' style={{ backgroundColor: backgroundColor4, border: backBorder4 }} onClick={() => { handleColorChange4(); handleSizeClick(product.size4); }}>{product.size4.replace(/\[|\]/g, "")}</p> : null}
          </div>
          <div className='price_Box'>
            <p className='sale_price'>{product.sale}</p>
            <p className='Detail_after_price'>{(parseInt(product.after_price) * count).toLocaleString('ko-KR')}원</p>
            <p className='Detail_before_price'>{parseInt(product.before_price).toLocaleString('ko-KR')}원</p>
          </div>
          <div className='UpDownBtn'>
            <button className='Detail_upBtn' onClick={handleUpBtnClick}>+</button>
            <div>{count}</div>
            <button className='Detail_DownBtn' onClick={handleDownBtnClick}>-</button>
          </div>
          <div className="Detail_btn">
            <button>찜하기</button>
            <button onClick={() => dispatch(addItem({ id: product.id, product_name: product.product_name, size: selectedSize || product.size, count: count, image: product.image }))}>장바구니</button>
          </div>
        </div>
      </div>
    </div>
  )
}