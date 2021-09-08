import React from 'react'
import Carousel1 from './asset/carousel1.jpg'
import Carousel2 from './asset/carousel2.jpg'
import Carousel3 from './asset/carousel3.jpg'

const Main = () => {
  return (
    <>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={Carousel1} className='d-block w-100' alt='' />
          </div>
          <div className='carousel-item'>
            <img src={Carousel2} className='d-block w-100' alt='' />
          </div>
          <div className='carousel-item'>
            <img src={Carousel3} className='d-block w-100' alt='' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <div className='text-center'>
        <h3>Recent News Post</h3>
        <div>this.props.title </div>
      </div>
      <h1>Main Page</h1>
    </>
  )
}

export default Main
