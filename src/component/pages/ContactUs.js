import React from 'react'

const ContactUs = () => {
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
        <div>
          <h3>Address:</h3>
          <p>Glodanif Energy Limited</p>
          <p>Block E4, Rose Garden, FHA, Shagari Estate, Ipaja, Lagos state.</p>
          <p>Telephone +2348030639373, +23408185801176</p>.
          <p>Email: ippmail01@gmail.com</p>
        </div>

        <div className='contact-body'>
          Contact Form
          <form action='#' className='form-contact'>
            <div className=''>
              <label className='form-label' for='name'>
                Name
              </label>
              <input
                className='form-control'
                list='datalistOptions'
                id='exampleDataList'
                placeholder='Name'
                type='text'
              />
            </div>
            <div className='-field'>
              <label className='form-label' for='email'>
                Email
              </label>
              <input
                className='form-control'
                list='datalistOptions'
                id='exampleDataList'
                placeholder='Email Address'
                type='email'
              />
            </div>
            <div className='-field'>
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
              ></textarea>
            </div>
            <button type='submit' className='btn btn--theme contact__btn'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
