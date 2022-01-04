import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import ContactMe from './components/ContactMe'

import './styles/css/App.css'

function App(props) {
  const { darkMode } = props

  console.log('app redners')

  return (
    <div className={`App ${darkMode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <div className='main-wrapper'>
        <main>
          <Routes>
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact-me' element={<ContactMe />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    darkMode: state.darkModeReducer.darkMode
  })
}

export default connect(mapStateToProps)(App);
