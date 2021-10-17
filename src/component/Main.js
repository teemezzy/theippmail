import React, { useState } from 'react'
import Carousel1 from './asset/carousel1.jpg'
import Carousel2 from './asset/carousel2.jpg'
import Carousel3 from './asset/carousel3.jpg'
import OnlineMedia from './asset/onlinemedia.svg'
import MobilePost from './asset/mobilepost.svg'


const Main = (props) => {
  const [post, setPost] = useState('')
  const [date, setDate] = useState('')

  return (
    <>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={Carousel1} className='d-block w-100 cc-carousel' alt='' />
          </div>
          <div className='carousel-item'>
            <img src={Carousel2} className='d-block w-100 cc-carousel' alt='' />
          </div>
          <div className='carousel-item '>
            <img src={Carousel3} className='d-block w-100 cc-carousel' alt='' />
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
        <div className='text-center cc-home'>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            molestiae?
          </p>
          <button className=''>Search</button>
        </div>
      </div>

      <div className=' mt-5 text-center '>
        <h3>Recent News Post</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          beatae odit quisquam qui mollitia, impedit, sequi perspiciatis,
          aspernatur provident alias modi. Molestiae sint, officiis asperiores
          ducimus iusto id expedita. Veritatis in earum qui ab, libero quibusdam
          magnam nobis eius nam illum sit, quisquam aspernatur accusantium quas,
          unde laudantium. Eius, reprehenderit.
        </p>

        <div>{}</div>
        <div>{}</div>
      </div>

      <article className='d-flex justify-content-center pt-5 mt-5 ill-1'>
        <img src={OnlineMedia} alt='' className='onlinemedia' />

        <div className='text-center mt-5 w-50'>
          <h5>Find News At Your Fingertips</h5>
          <p className='px-5 '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, velit! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Officia culpa minus facere voluptatum ad,
            excepturi ratione consequuntur exercitationem tempore in.
          </p>
        </div>
      </article>

      <article>
        <img src={MobilePost} alt='' className='mobilepost' />
      </article>
    </>
  )
}

export default Main
