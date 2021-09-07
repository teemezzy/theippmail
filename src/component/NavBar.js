import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './asset/logo.svg'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand mx-5' to='/'>
          <img src={Logo} alt='' className='w-100' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/aboutus'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/news'>
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contactus'>
                Contact Us
              </Link>
            </li>
          </ul>
          <form className='d-flex mx-5'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
