import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' text-center text-light text-lg-start pt-3'>
      {/* Grid container */}
      <div className='container p-4 pb-0 text-center'>
        <form action='' className=''>
          {/* <!--Grid row--> */}
          <div className='row'>
            {/* <!--Grid column--> */}
            <div className='col-auto mb-4 mb-md-0'>
              <p className='pt-2 footer-text'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className='col-md-5 col-12 mb-4 mb-md-0'>
              {/* <!-- Email input --> */}
              <div className='form-outline mb-4'>
                <input
                  type='email'
                  id='form5Example2'
                  className='form-control border'
                />
                <label className='form-label text-light' for='form5Example2'>
                  Email address
                </label>
              </div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className='col-auto mb-4 mb-md-0'>
              {/* <!-- Submit button --> */}
              <button type='submit' className='btn btn-rounded btn-success'>
                Subscribe
              </button>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </form>
      </div>
      {/* <!-- Grid container --> */}

      <div className='text-center'>
        <div className='container p-4 pb-0'>
          {/* <!-- Section: Social media --> */}
          <section className='mb-4'>
            {/* <!-- Facebook --> */}
            <Link
              className='btn btn-primary bg-sucess btn-floating m-1'
              to='/'
              role='button'
            >
              <i className='fab fa-facebook-f'></i>
            </Link>

            {/* <!-- Twitter --> */}
            <Link
              className='btn btn-primary bg-sucess btn-floating m-1'
              to='/'
              role='button'
            >
              <i className='fab fa-twitter'></i>
            </Link>

            {/* <!-- Google --> */}
            <Link
              className='btn btn-primary bg-danger btn-floating m-1'
              to='#!'
              role='button'
            >
              <i className='fab fa-google'></i>
            </Link>

            {/* <!-- Instagram --> */}
            <Link
              className='btn btn-primary bg-danger btn-floating m-1'
              to='/'
              role='button'
            >
              <i className='fab fa-instagram'></i>
            </Link>

            {/* <!-- Linkedin --> */}
            <Link
              className='btn btn-primary bg-sucess btn-floating m-1'
              to='#!'
              role='button'
            >
              <i className='fab fa-linkedin-in'></i>
            </Link>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
      </div>

      {/* <!-- Copyright --> */}
      <div className='text-center p-3'>© 2021 Copyright: THE IPPMAIL</div>
      {/* <!-- Copyright --> */}
    </footer>
  )
}

export default Footer
