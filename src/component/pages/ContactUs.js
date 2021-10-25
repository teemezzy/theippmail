import React, { useState } from 'react'
// import firebase from './component/Firebase'

const ContactUs = () => {
  const handleSubmit = () => {}
  const handleInputChange = () => {}

  return (
    <div className='contact-head'>
      <div className='contact-top'>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          repudiandae minus officiis accusantium iure perferendis cum officia
          expedita, eligendi culpa!
        </p>
      </div>
      <div className='contact'>
        <div className='contact-text'>
          <h3>Address:</h3>
          <p>Glodanif Energy Limited</p>
          <p>Block E4, Rose Garden, FHA, Shagari Estate, Ipaja, Lagos state.</p>
          <p>
            <span>Telephone: </span>
            <a href='tel://+2348030639373'>+2348030639373</a>
            {' , '}
            <a href='tel://+23408185801176'>+23408185801176</a>
          </p>

          <p>
            <span>
              Email:
              <a href='mailto:ippmail01@gmail.com'> ippmail01@gmail.com</a>
            </span>
          </p>
        </div>

        <div className='contact-body'>
          Contact Form
          <form action='#' className='form-contact' onSubmit={handleSubmit}>
            <div className=''>
              <label className='form-label text-align-left' for='name'>
                Name
              </label>
              <input
                className='form-control'
                list='datalistOptions'
                id='exampleDataList'
                placeholder='Firstname and Lastname'
                type='text'
                onChange={handleInputChange}
              />
            </div>
            <div className='input-field'>
              <label className='form-label' for='email'>
                Email
              </label>
              <input
                className='form-control'
                list='datalistOptions'
                id='exampleDataList'
                placeholder='Email Address'
                type='email'
                onChange={handleInputChange}
              />
            </div>
            <div className='input-field'>
              <label className='form-label' for='exampleFormControlTextarea1'>
                Message
              </label>
              <textarea
                required
                cols='50'
                rows='5'
                className='form-control'
                placeholder='Enter Your Message'
                id='exampleFormControlTextarea1'
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type='submit'
              className='btn btn--theme contact__btn'
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
