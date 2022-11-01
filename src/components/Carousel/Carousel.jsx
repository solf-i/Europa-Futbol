import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../sources/slide1.png'
import slide2 from '../../sources/slide2.png'
//import clubes3 from '../../sources/clubes3.jpeg'
//import clubes4 from '../../sources/clubes4.jpeg'

const CarouselInf = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img className='d-block w-100' src={slide1} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={slide2} alt='Second slide' />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselInf
