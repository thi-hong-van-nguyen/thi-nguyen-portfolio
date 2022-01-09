import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getActiveKey } from '../../redux/actions'
import bio3 from '../../photos/bio3.jpg'
import { projects, skills, work, education } from '../../data'

function Resume(props) {
    const { darkMode } = props

    useEffect(() => {
        props.getActiveKey('resume')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='resume-wrapper'>
            <section className={`top-section${darkMode === 'dark' ? '' : ' top-section-light-mode'}`}>
                <div className='top-section__container'>
                    <div className='resume-content'>
                        <h2>Online Resume</h2>
                        <div>download</div>
                    </div>
                </div>
            </section>
            <section className='bottom-section'>
                <div className='resume'>
                    <div className='resume__intro'>
                        <div className='intro-content'>
                            <h2>THI HONG VAN NGUYEN</h2>
                            <div className='career'>Full Stack Web Developer</div>
                        </div>
                        <div className='avatar'>
                            <img src={bio3} alt='avatar' />
                        </div>
                    </div>
                    <div className='resume__content'>
                        <div className='resume__content--container'>
                            <div className='resume-content__top'>
                                <div className='contact'>
                                    <h3>CONTACT</h3>
                                    <div className='contact__content'>
                                        <div className='navigation-item'>
                                            <i className="fas fa-envelope"></i>
                                            <a href='mailto:thinguyen.webdev@gmail.com'>thinguyen.webdev@gmail.com</a>
                                        </div>
                                        <div className='navigation-item'>
                                            <i className="fas fa-phone-alt"></i>
                                            <a href='tel:408-912-3535'>408-912-3535</a>
                                        </div>
                                        <div className='navigation-item'>
                                            <i className="fas fa-map-marker-alt"></i>
                                            San Jose, CA 95134
                                        </div>
                                        <div className='navigation-item'>
                                            <i className="fab fa-linkedin"></i>
                                            <a href='https://www.linkedin.com/in/thihongnguyen/'>linkedin.com/in/thihongnguyen/</a>
                                        </div>
                                        <div className='navigation-item'>
                                            <i className="fab fa-github"></i>
                                            <a href='https://github.com/thi-hong-van-nguyen'>github.com/thi-hong-van-nguyen</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile'>
                                    <h3>PROFILE</h3>
                                    <div className='profile__content'>
                                        <p>
                                            Dependable and self-motivated professional with an Accounting major. Currently working  towards full stack web developer certification at Bloom Tech and is seeking a full-time developer role at entry level. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='resume-content__bottom'>
                                <div className='resume-content__bottom--left'>
                                    <div className='dot dot1'></div>
                                    <div className='dot dot2'></div>
                                    <div className='dot dot3'></div>
                                    <div className='skills'>
                                        <h3>SKILLS</h3>
                                        <div className='skills__content'>
                                            {skills.map((skill, idx) => {
                                                return (
                                                    <div key={idx} className='skill resume-item-card'>
                                                        <h4>{skill.stack}</h4>
                                                        <ul>
                                                            {skill.list.map((skill, idx) => {
                                                                return (<li key={idx}>{skill}</li>)
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='education'>
                                        <h3>EDUCATION</h3>
                                        <div className='education__content'>
                                            {education.map(edu => {
                                                return (
                                                    <div className='school resume-item-card'>
                                                        <h4>
                                                            {edu.major}
                                                        </h4>
                                                        {edu.gpa !== '' ? <div>GPA: {edu.gpa}</div> : ''}
                                                        <div>{edu.school}</div>
                                                        <div>{edu.time}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='resume-content__bottom--right'>
                                    <div className='projects'>
                                        <h3>PROJECTS</h3>
                                        <div className='projects__content'>
                                            {projects.map(p => {
                                                return (
                                                    <div key={p.title} className='project resume-item-card'>
                                                        <div className='project__title'>
                                                            <div className='project__title--left'>
                                                                <h4>{p.title}</h4>
                                                                <div> | {p.time}</div>
                                                            </div>
                                                            <div className='project__title--right'>
                                                                <span><a href={p.code}>Code</a></span>
                                                                {p.webpage !== '' ? <span>|<a href={p.webpage}>Site</a></span> : ''}
                                                            </div>
                                                        </div>
                                                        <div className='summary'>
                                                            {p.content}
                                                        </div>
                                                        <ul>
                                                            {p.details.map((point, idx) => {
                                                                return (
                                                                    <li key={idx}>{point}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='work-experience'>
                                        <h3>WORK EXPERIENCE</h3>
                                        <div className='work-experience__content'>
                                            {work.map((job, idx) => {
                                                return (
                                                    <div key={idx} className='job resume-item-card'>
                                                        <div className='summary'>
                                                            <h4>{job.position}, </h4>
                                                            <span>{job.company} |</span>
                                                            <span>{job.time}</span>
                                                        </div>
                                                        <ul>
                                                            {job.details.map((detail, idx) => {
                                                                return (
                                                                    <li key={idx}>{detail}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
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

export default connect(mapStateToProps, { getActiveKey })(Resume)

