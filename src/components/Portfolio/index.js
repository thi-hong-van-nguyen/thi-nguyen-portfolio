import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getActiveKey } from '../../redux/actions'
import { tabs, projects } from '../../data'

function Portfolio(props) {
    const [key, setKey] = useState(0)
    const [list, setList] = useState(projects)
    const { darkMode } = props

    console.log('portfolio renders')
    console.log('>>>>>>>>>>>>>>>>>>>', darkMode)
    useEffect(() => {
        props.getActiveKey('portfolio')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = index => {
        setKey(index)
        if (index === 0) {
            setList(projects)
        } else if (index === 1) {
            setList(projects.filter(p => p.type === 'full stack'))
        } else if (index === 2) {
            setList(projects.filter(p => p.type === 'front end'))
        } else {
            setList(projects.filter(p => p.type === 'back end'))
        }
    }

    return (
        <div className='portfolio-wrapper'>
            <section className={`intro-section${darkMode === 'dark' ? '' : ' intro-section-light-mode'}`}>
                <div className='intro-section__container'>
                    <h2>Portfolio</h2>
                    <p>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p>Want some help building your software or website?</p>
                    <button type="button" className="btn btn-primary">
                        <Link to='/contact-me'>
                            Hire Me
                        </Link>
                    </button>
                </div>
            </section>
            <section className='portfolio-section'>
                <div className='portfolio-section__container'>
                    <div className={`tabs${darkMode === 'dark' ? '' : ' tabs-light-mode'}`}>
                        {tabs.map((tab, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`tab${key === index ? ' active' : ''}${darkMode === 'dark' ? '' : ' tab-light-mode'}`}
                                    onClick={() => { handleClick(index) }}
                                >
                                    {tab.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className='projects'>
                        {list.length > 0
                            ? list.map((project, index) => {
                                return (
                                    <div key={index} className='project-card'>
                                        <div
                                            className={
                                                `project-card__before${darkMode === 'dark' ? '' : ' project-card__before--light-mode'}`
                                            }
                                        >
                                            <img src={project.img_url} alt='project' />
                                            <div className='card-content'>
                                                <h3>{project.title}</h3>
                                                <p className='content'>{project.content}</p>
                                                <p className='client'>Client: {project.client}</p>
                                            </div>
                                        </div>
                                        <div className='project-card__after'>
                                            <button type="button" className="btn btn-dark btn-code">
                                                <a href={project.code}>
                                                    <i className="fas fa-eye"></i>
                                                    GitHub Repo
                                                </a></button>
                                        </div>
                                    </div>
                                )
                            })
                            : <div className='empty'>
                                <div className='empty__container'>
                                    <video loop autoPlay={true}>
                                        <source src={require('../../photos/catvideo.mp4')} type='video/mp4' />
                                    </video>
                                    <h3>don't you worry</h3>
                                    <div>Many more on the way to be delivered!</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section >
        </div >
    )
}

const mapStateToProps = state => {
    return ({
        darkMode: state.darkModeReducer.darkMode
    })
}

export default connect(mapStateToProps, { getActiveKey })(Portfolio)
