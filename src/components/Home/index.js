import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import javascript from '../../photos/javascript.svg'
import html from '../../photos/html.svg'
import css from '../../photos/css.svg'
import node from '../../photos/node.svg'
import python from '../../photos/python.svg'
import react from '../../photos/react.svg'
import sass from '../../photos/sass.svg'
import antdesign from '../../photos/antdesign.png'
import rupikaur from '../../photos/rupikaur.PNG'
import coderheroes from '../../photos/coderheroes.PNG'
import anywherefitness from '../../photos/anywherefitness.PNG'
import bio4 from '../../photos/bio4.jpg'
import { getActiveKey } from '../../redux/actions'

function Home(props) {
    const navigate = useNavigate()

    useEffect(() => {
        props.getActiveKey('about-me')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = () => {
        navigate('/portfolio')
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
                                type="button" class="btn btn-primary"
                                onClick={() => navigate('/portfolio')}
                            >
                                <i class="fas fa-arrow-circle-right"></i>
                                view portfolio
                            </button>
                            <button
                                type="button" class="btn btn-secondary"
                                onClick={() => navigate('/resume')}
                            >
                                <i class="fas fa-file-alt"></i>
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
                    <div className='skills-intro'>
                        <div><h2>What I Use For My Projects</h2></div>
                        <div>Below is a quick overview of my main technical skill sets and technologies I use. Check out my <Link to='/portfolio'>portfolio</Link> and <Link to='/resume'>online resume</Link> for more information.</div>
                    </div>
                    <div className='skills-container'>
                        <div className='skill'>
                            <div><img src={javascript} alt='JavaScript icon' style={{ width: '50px', height: '50px' }} /></div>
                            <h3>Vanilla JavaScript</h3>
                            <div>Vanilla JavaScript was my first choice of programming language because of its faster adoption of frameworks and libraries. I have learned that when you learn JSm, your ability to adopt new frameworks and libraries triples in speed. This is because you’re able to look at a piece of code and understand what it means.</div>
                        </div>
                        <div className='skill'>
                            <div><img src={html} alt='html-css icon' style={{ width: '50px', height: '50px' }} /><img src={css} alt='html-css icon' style={{ width: '50px', height: '50px' }} /></div>
                            <h3>HTML & CSS</h3>
                            <div>HTML and CSS are the very basic skills that I learned at Bloom Tech. I was amazed when I first saw the output in the console and in the browser even with only few basic codes.</div>
                        </div>
                        <div className='skill'>
                            <div><img src={python} alt='Python icon' style={{ width: '50px', height: '50px' }} /></div>
                            <h3>Python</h3>
                            <div>My core knowlede are Data Structures and Algorithms. Learning Python allows me to focus on solving problems, rather than focusing on syntax, and it supplements for other programming languages that I have been learning.</div>
                        </div>
                        <div className='skill'>
                            <div><img src={sass} alt='SASS icon' style={{ width: '50px', height: '50px' }} /><img src={antdesign} alt='Ant Design icon' style={{ width: '50px', height: '50px' }} /></div>
                            <h3>SASS & Ant Design</h3>
                            <div>Along with basic CSS, SASS and Ant Design help my design more attractive, professional and more maintainable.</div>
                        </div>
                        <div className='skill'>
                            <div><img src={react} alt='React icon' style={{ width: '50px', height: '50px' }} /></div>
                            <h3>React</h3>
                            <div>I love building web apps with React! React is easy to use and have tons of open sources that can assist me in the web building process. React is known as a remarkably flexible JavaScript Library which can be used on a vast variety of platforms to build high quality User Interfaces</div>
                        </div>
                        <div className='skill'>
                            <div><img src={node} alt='Node js icon' style={{ width: '50px', height: '50px' }} /></div>
                            <h3>Node.js</h3>
                            <div>Building back end is something I always enjoy. I train myself to not only become a master in front end, but also back end because it allows me to work flexible in web developemnt section.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='testimonials'>
                <div>
                    <h2>My Favorite Quotes/Poem</h2>
                    <div>
                        <div>
                            <div>it was when i stopped searching for home within others <br />
                                and lifted the foundations of home within myself<br />
                                i found there were no roots more intimate<br />
                                than those between a mind and body<br />
                                that have decided to be whole
                            </div>
                            <div>
                                <div><img src={rupikaur} alt='Node js icon' style={{ width: '50px', height: '50px' }} /></div>
                                <div>
                                    <div>Rupi Kaur</div>
                                    <div>Canadian poet, illustrator, photographer, and author</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>it was when i stopped searching for home within others <br />
                                and lifted the foundations of home within myself<br />
                                i found there were no roots more intimate<br />
                                than those between a mind and body<br />
                                that have decided to be whole
                            </div>
                            <div>
                                <div><img src={rupikaur} alt='Node js icon' style={{ width: '50px', height: '50px' }} /></div>
                                <div>
                                    <div>Rupi Kaur</div>
                                    <div>Canadian poet, illustrator, photographer, and author</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>it was when i stopped searching for home within others <br />
                                and lifted the foundations of home within myself<br />
                                i found there were no roots more intimate<br />
                                than those between a mind and body<br />
                                that have decided to be whole
                            </div>
                            <div>
                                <div><img src={rupikaur} alt='Node js icon' style={{ width: '50px', height: '50px' }} /></div>
                                <div>
                                    <div>Rupi Kaur</div>
                                    <div>Canadian poet, illustrator, photographer, and author</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>it was when i stopped searching for home within others <br />
                                and lifted the foundations of home within myself<br />
                                i found there were no roots more intimate<br />
                                than those between a mind and body<br />
                                that have decided to be whole
                            </div>
                            <div>
                                <div><img src={rupikaur} alt='Node js icon' style={{ width: '50px', height: '50px' }} /></div>
                                <div>
                                    <div>Rupi Kaur</div>
                                    <div>Canadian poet, illustrator, photographer, and author</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Projects</h2>
                <div>
                    <div>
                        <div>
                            <img src={coderheroes} alt='coder heroes' />
                        </div>
                        <div>
                            <h3>Coder Heroes</h3>
                            <div>A web application for a real non-profit organization, Code Your Dreams,  to aid in the cause of helping underprivileged youth in the Chicagoland area break into tech by offering coding courses</div>
                            <div>Bloom Tech</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={anywherefitness} alt='anywhere fitness' />
                        </div>
                        <div>
                            <h3>Anywhere Fitness</h3>
                            <div>An individual project covered from front end to backend whose product is a React web application for clients to register and health coaches to create fitness classes anywhere around the nation</div>
                            <div>Bloom Tech</div>
                        </div>
                    </div>

                </div>
                <div>
                    <button
                        onClick={() => navigate('/portfolio')}
                    >
                        View Portfolio
                    </button>
                </div>
            </section>
        </div>
    )
}

export default connect(null, { getActiveKey })(Home)
