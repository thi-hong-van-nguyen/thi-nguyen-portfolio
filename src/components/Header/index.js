import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import avatar from '../../photos/avatar.jpg'
import { setDarkMode } from '../../redux/actions'

function Header(props) {
    const { active, darkMode, setDarkMode } = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/contact-me')
    }

    const toggleDarkMode = () => {
        if (darkMode === 'dark') {
            localStorage.setItem('dark-mode', 'light')
            setDarkMode('light')
        } else {
            localStorage.setItem('dark-mode', 'dark')
            setDarkMode('dark')
        }
    }

    const checkActiveKey = activeKey => {
        if (active === activeKey && darkMode === 'dark') {
            return 'dark'
        } else if (active === activeKey && darkMode === 'light') {
            return 'light'
        } else {
            return ''
        }

    }

    console.log('header renders')
    console.log('darkmode:', darkMode, 'localstorage:', localStorage.getItem('dark-mode'))

    return (
        <header className={darkMode === 'dark' ? 'header__dark' : 'header__light'}>
            <div className='menu'>
                <section className='menu__intro'>
                    <h1>Thi Nguyen</h1>
                    <div className='menu__intro--img'>
                        <img src={avatar} alt='avatar' />
                    </div>
                    <div className='menu__intro--bio'>
                        Hi, my name is Thi Nguyen and I'm a web developer. Welcome to <br /><span>my personal website!</span>
                    </div>
                    <div className='menu__intro--links'>
                        <a
                            href='https://www.linkedin.com/in/thihongnguyen/'
                            target='blank'
                        >
                            <i
                                className={`fab fa-linkedin-in fa-2x ${darkMode === 'dark' ? 'dark' : 'light'}`}
                            ></i>
                        </a>
                        <a
                            href='https://github.com/vannguyen141290'
                            target='blank'
                        >
                            <i className={`fab fa-github fa-2x ${darkMode === 'dark' ? 'dark' : 'light'}`}></i>
                        </a>
                        <a
                            href='https://www.facebook.com/van.singh.7169/'
                            target='blank'
                        >
                            <i className={`fab fa-facebook fa-2x ${darkMode === 'dark' ? 'dark' : 'light'}`}></i>
                        </a>
                        <a
                            href='https://www.instagram.com/thi.hong.van.nguyen/'
                            target='blank'
                        >
                            <i className={`fab fa-instagram fa-2x ${darkMode === 'dark' ? 'dark' : 'light'}`}></i>
                        </a>
                    </div>
                </section>
                <section className='menu__nav-bar'>
                    <div className='menu__nav-bar--links'>
                        <Link
                            to='/'
                            className={checkActiveKey('about-me')}
                        >
                            <i className="fas fa-user"></i>
                            about me</Link>
                        <Link
                            to='/portfolio'
                            className={checkActiveKey('portfolio')}
                        >
                            <i className="fas fa-laptop-code"></i>
                            portfolio</Link>
                        <Link
                            to='/resume'
                            className={checkActiveKey('resume')}
                        >
                            <i className="fas fa-file-alt"></i>
                            resume</Link>
                        <Link
                            to='/contact-me'
                            className={checkActiveKey('contact-me')}
                        >
                            <i className="fas fa-id-card-alt"></i>
                            contact me</Link>
                    </div>
                    <button
                        type="button"
                        className={`btn btn-primary hiremeBtn${darkMode === 'dark' ? '' : '-light'}`}
                        onClick={handleClick}
                    >
                        <i className="fas fa-paper-plane"></i>
                        hire me
                    </button>
                </section>
                <section className='menu__dark-mode'>
                    <div>&#9680; Dark Mode</div>
                    <div
                        className={darkMode === 'dark' ? 'dark' : 'light'}
                        onClick={toggleDarkMode}
                    >
                    </div>
                </section>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return ({
        active: state.activeReducer.active,
        darkMode: state.darkModeReducer.darkMode
    })
}

export default connect(mapStateToProps, { setDarkMode })(Header)
