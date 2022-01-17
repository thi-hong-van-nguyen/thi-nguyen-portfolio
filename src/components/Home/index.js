import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from "react-elastic-carousel"

import javascript from '../../photos/javascript.svg'
import html from '../../photos/html.svg'
import css from '../../photos/css.svg'
import node from '../../photos/node.svg'
import python from '../../photos/python.svg'
import react from '../../photos/react.svg'
import sass from '../../photos/sass.svg'
import antdesign from '../../photos/antdesign.png'
import postgresql from '../../photos/postgresql.svg'
import sqlite from '../../photos/sqlite.svg'
import study from '../../photos/study.svg'
import MU from '../../photos/MU.svg'
import mongodb from '../../photos/mongodb.jpg'
import bio4 from '../../photos/bio4.jpg'
import { getActiveKey } from '../../redux/actions'
import { testimonials, projects } from '../../data'

function Home(props) {
    const navigate = useNavigate()
    const { darkMode } = props

    useEffect(() => {
        props.getActiveKey('about-me')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },

    ];

    return (
        <div className='home-wrapper'>
            <section className={`about-me-section ${darkMode === 'dark' ? 'about-me-section-dark-mode' : 'about-me-section-light-mode'}`}>
                <div className='about-me-section__container'>
                    <div className='bio'>
                        <h2>Thi Nguyen</h2>
                        <h3>Full Stack Web Developer</h3>
                        <div>
                            I'm a full-stack web developer specialized in developing the front & back end of modern progressive web apps. Want to see some of my work? Check out my <Link to='/portfolio'>portfolio</Link> and <Link to='/resume'>online resume</Link>
                        </div>
                        <div>
                            <button
                                type="button" className="btn btn-primary"
                                onClick={() => navigate('/portfolio')}
                            >
                                <i className="fas fa-arrow-circle-right"></i>
                                view portfolio
                            </button>
                            <button
                                type="button" className="btn btn-secondary"
                                onClick={() => navigate('/resume')}
                            >
                                <i className="fas fa-file-alt"></i>
                                view resume
                            </button>
                        </div>
                    </div>
                    <div className='avatar'>
                        <img src={bio4} alt='avatar' />
                    </div>
                </div>
            </section>

            <section className='skills-section'>
                <div className='skills-section__container'>
                    <div className='intro'>
                        <div className='topic-title'>
                            <h2>What I master</h2>
                        </div>
                        <div>Below is a quick overview of my main technical skill sets and technologies I use. Check out my <Link to='/portfolio'>portfolio</Link> and <Link to='/resume'>online resume</Link> for more information.</div>
                    </div>
                    <div className='skills-container'>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={javascript} alt='JavaScript icon' />
                            </div>
                            <h3>Vanilla JavaScript</h3>
                            <p>Vanilla JavaScript was my first choice of programming language because of its faster adoption of frameworks and libraries. I have learned that when you learn JSm, your ability to adopt new frameworks and libraries triples in speed. This is because you’re able to look at a piece of code and understand what it means.</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={html} alt='html icon' />
                                <img src={css} alt='css icon' className='css' />
                            </div>
                            <h3>HTML <small>&</small> CSS</h3>
                            <p>HTML and CSS are the very basic skills that I learned at Bloom Tech. I was amazed when I first saw the output in the console and in the browser even with only few basic codes.</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={python} alt='Python icon' />
                            </div>
                            <h3>Python</h3>
                            <p>My core knowlede are Data Structures and Algorithms. Learning Python allows me to focus on solving problems, rather than focusing on syntax, and it supplements for other programming languages that I have been learning.</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={sass} alt='SASS icon' />
                                <img src={MU} alt='Material UI icon' />
                                <img src={antdesign} alt='Ant Design icon' />
                            </div>
                            <h3>SASS <small>,</small> Material UI <small>&</small> Ant Design</h3>
                            <p>Along with basic CSS, SASS and Ant Design help my design more attractive, professional and more maintainable.</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={react} alt='React icon' />
                            </div>
                            <h3>React</h3>
                            <p>I love React! React is known as a remarkably flexible JavaScript Library which can be used on a vast variety of platforms to build high quality User Interfaces</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={node} alt='Node js icon' />
                            </div>
                            <h3>Node.js</h3>
                            <p>Building back end is something I always enjoy. I train myself to not only become a master in front end, but also back end because it allows me to work flexible in web developemnt section.</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={postgresql} alt='postgresql icon' />
                                <img src={sqlite} alt='postgresql icon' className='sqlite' />
                                <img src={mongodb} alt='postgresql icon' />
                            </div>
                            <h3>PostgreSQL <small>,</small> SQLite <small>,</small> MongoDB</h3>
                            <p>It's a good thing to know both relational and document-oriented database management system. PostgeSQL. SQLite and MongoDB are the first, and more to go!</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={study} alt='study icon' />
                            </div>
                            <h3>To Be Continued...</h3>
                            <p>Pushing myself forward to become a superb web developer is something that I consider obvious. Wait for my next skills and knowledge. I would surprise you for what I'd be willing to learn and achieve</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='testimonials-section'>
                <div
                    className={`testimonials-section__container${darkMode === 'dark' ? '' : ' testimonials-section__container--light-mode'}`}
                >
                    <div className='intro'>
                        <div className='topic-title'>
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className='testimonials'>
                        <Carousel
                            breakPoints={breakPoints}
                            enableInfiniteLoop
                            enableAutoPlay
                            autoPlaySpeed={5000}
                        >
                            {testimonials.map((t, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className={`testimonial-card${darkMode === 'dark' ? '' : ' testimonial-card-light-mode'}`}
                                    >
                                        <div className='quote-icon'>
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                        <div className='testimonial-card__content'>
                                            <p>{t.content}</p>
                                            <div className='testimonial-card__reviewer-info'>
                                                <img src={t.img} alt='reviewer' />
                                                <div className='testimonial-card__reviewer-info--info'>
                                                    <div className='name'>{t.reviewer}</div>
                                                    <div className='position'>{t.reviewer_position}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className='projects-section'>
                <div className='projects-section__container'>
                    <div className='intro'>
                        <div className='topic-title'>
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <div className='projects-wrapper'>
                        {projects.slice(1, 5).map((p, idx) => {
                            return (
                                <div key={idx} className={`project-card${darkMode === 'dark' ? '' : ' project-card-light-mode'}`}>
                                    <div className='card-before' >
                                        <div className='card-before__img'>
                                            <img src={p.img_url} alt='project' />
                                        </div>
                                        <div className='card-before__content'>
                                            <h3>{p.title}</h3>
                                            <div className='content'>{p.content}</div>
                                            <div className='client'>Client: {p.client}</div>
                                        </div>
                                    </div>
                                    <div className='card-after'>
                                        <button type="button" className="btn btn-dark btn-site">
                                            <i className="fas fa-eye"></i>
                                            <a href={p.site} target='blank'>View Site</a>
                                        </button>
                                        <button type="button" className="btn btn-dark btn-code">
                                            <i className="fas fa-eye"></i>
                                            <a href={p.code} target='blank'>View Code</a>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='portfolio'>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => navigate('/portfolio')}
                        >
                            <i className="fas fa-arrow-circle-right"></i>
                            View Portfolio
                        </button>
                    </div>

                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        darkMode: state.darkModeReducer.darkMode
    })
}

export default connect(mapStateToProps, { getActiveKey })(Home)
