import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getActiveKey, setDarkMode } from '../../redux/actions'
import { tabs, projects } from '../../data'

function Portfolio(props) {
    const [key, setKey] = useState(0)
    const [list, setList] = useState(projects)

    console.log('portfolio renders')
    console.log(key)
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
            <section className='intro-section'>
                <div className='intro-section__container'>
                    <h2>Portfolio</h2>
                    <p>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p>Want some help building your software or website?</p>
                    <button type="button" class="btn btn-primary">
                        <Link to='/contact-me'>
                            Hire Me
                        </Link>
                    </button>
                </div>
            </section>
            <section className='portfolio-section'>
                <div className='portfolio-section__container'>
                    <div className='tabs'>
                        {tabs.map((tab, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`tab${key === index ? ' active' : ''}`}
                                    onClick={() => { handleClick(index) }}
                                >
                                    {tab.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className='projects'>
                        {list.map((project, index) => {
                            return (
                                <div key={index} className='project-card'>
                                    <div className='project-card__before'>
                                        <img src={project.img_url} alt='project' />
                                        <div className='card-content'>
                                            <h3>{project.title}</h3>
                                            <p className='content'>{project.content}</p>
                                            <p className='client'>Client: {project.client}</p>
                                        </div>
                                    </div>
                                    <div className='project-card__after'>
                                        <button type="button" class="btn btn-dark btn-code">
                                            <a href={project.code}>
                                                <i class="fas fa-eye"></i>
                                                GitHub Repo
                                            </a></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}



export default connect(null, { getActiveKey })(Portfolio)
