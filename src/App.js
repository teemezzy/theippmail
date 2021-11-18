import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import Main from './component/Main'
import Footer from './component/Footer'
import News from './component/pages/News'
import AboutUs from './component/pages/AboutUs'
import ContactUs from './component/pages/ContactUs'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/News'>
          <News />
        </Route>
        <Route exact path='/AboutUs'>
          <AboutUs />
        </Route>
        <Route exact path='/ContactUs'>
          <ContactUs />
        </Route>
      </Switch>
      
      <Footer />
    </>
  )
}

export default App
