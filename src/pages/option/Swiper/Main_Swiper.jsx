import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { styled } from "styled-components";
import './Swiper.css'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper/core'

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const MainSwiper = () => {

  const MainSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
    background-color: #eee;
  `

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='visual' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/visualMain.jpg'})`, backgroundPosition: 'center' }}>
          <div className='visual_txt'>
            <p>Open 플래그십 스토어 논현</p>
            <h2>
              고밀도 수면의 가치를 담아낸<br />
              새로운 체험 공간
            </h2>
            <button className='viual_btn'>View  More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='visual' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/mainImg1.jpg'})`, backgroundPosition: 'center' }}>
          <div className='visual_txt'>
            <p>깊고도 꽉 찬 잠을 누릴 수 있는 수면경험을 선물합니다.</p>
            <h2>
              고밀도 수면 슬로우베드
            </h2>
            <button className='viual_btn'>View  More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='visual' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/mainImg2.jpg'})`, backgroundPosition: 'center' }}>
          <div className='visual_txt'>
            <p>슬로우베드의 새롭게 태어난 <br />NEW 토퍼 시리즈를 만나보세요</p>
            <h2>
              어떤 상황에서도<br /> 편안한 깊은 잠
            </h2>
            <button className='viual_btn'>View  More</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default MainSwiper;