import React, { useEffect, useState } from 'react'
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
import bio4 from '../../photos/bio4.jpg'
import { getActiveKey } from '../../redux/actions'
import { testimonials, projects } from '../../data'

function Home(props) {
    const navigate = useNavigate()
    const [cardShown, setCardShown] = useState(false)

    useEffect(() => {
        props.getActiveKey('about-me')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // const handleClick = () => {
    //     navigate('/portfolio')
    // }

    const breakPoints = [
        { width: 1, itemsToShow: 1 }
    ];

    const getTestimonials = (tes) => {
        return (
            tes.map((t, idx) => {
                return (
                    <div key={idx} className='testimonial-card' >
                        <div className='quote-icon'><i className="fas fa-quote-left"></i></div>
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
            })
        )
    }

    console.log('home renders')

    return (
        <div className='home-wrapper'>
            <section className='about-me-section'>
                <div className='about-me-section__container'>
                    <div className='bio'>
                        <h2>Thi Nguyen</h2>
                        <h3>Full Stack Web Developer</h3>
                        <div>
                            I'm a web developer specialized in both front end and back end for modern web apps. Want to know about my project? Check out my <Link to='/portfolio'>portfolio</Link> and <Link to='/resume'>online resume</Link>
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
                            <h2>What I Use For My Projects</h2>
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
                            <h3>HTML & CSS</h3>
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
                                <img src={antdesign} alt='Ant Design icon' />
                            </div>
                            <h3>SASS & Ant Design</h3>
                            <p>Along with basic CSS, SASS and Ant Design help my design more attractive, professional and more maintainable.</p>
                        </div>
                        <div className='skill'>
                            <div className='skill__icon'>
                                <img src={react} alt='React icon' />
                            </div>
                            <h3>React</h3>
                            <p>I love building web apps with React! React is easy to use and have tons of open sources that can assist me in the web building process. React is known as a remarkably flexible JavaScript Library which can be used on a vast variety of platforms to build high quality User Interfaces</p>
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
                                <img src={sqlite} alt='postgresql icon' />
                            </div>
                            <h3>PostgreSQL & SQLite</h3>
                            <p>SQLite is my favorite relational database management system to build DB using Node JS because of its simplicity yet efficiency. I, however, did not stop there but have been continuously learning new software, and PostgreSQL is the first.</p>
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
                <div className='testimonials-section__container'>
                    <div className='intro'>
                        <div className='topic-title'>
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className='testimonials'>
                        <Carousel breakPoints={breakPoints}>
                            <div className='testimonials__cards' >
                                {getTestimonials(testimonials.slice(0, 3))}
                            </div>
                            <div className='testimonials__cards' >
                                {getTestimonials(testimonials.slice(3, 6))}
                            </div>
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
                        {projects.map((p, idx) => {
                            return (
                                <div key={idx} className='project-card'>
                                    <div
                                        className='card-before'
                                        onMouseEnter={() => setCardShown(true)}
                                        onMouseLeave={() => setCardShown(false)}
                                    >
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
                                        <button type="button" class="btn btn-dark">
                                            <i class="fas fa-eye"></i>
                                            <a href={p.site}>View Site</a>
                                        </button>
                                        <button type="button" class="btn btn-dark">
                                            <i class="fas fa-eye"></i>
                                            <a href={p.code}>View Code</a>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='portfolio'>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => navigate('/portfolio')}
                        >
                            <i class="fas fa-arrow-circle-right"></i>
                            View Portfolio
                        </button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default connect(null, { getActiveKey })(Home)
