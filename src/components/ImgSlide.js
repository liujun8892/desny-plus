import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'

function ImgSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/asserts/images/swiper-1.jpeg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/asserts/images/swiper-2.jpeg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/asserts/images/swiper-3.jpeg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/asserts/images/swiper-4.jpeg" alt="" />
      </Wrap>
    </Carousel>
  )
}

export default ImgSlide

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`
