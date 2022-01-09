import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import emailjs from '@emailjs/browser';

import { getActiveKey } from '../../redux/actions'

const init = {
    user_name: '',
    user_email: '',
    message: ''
}

function ContactMe(props) {
    const [showResult, setShowResult] = useState(false)
    const [err, setErr] = useState('')
    const [value, setValue] = useState(init)
    const { darkMode } = props

    useEffect(() => {
        props.getActiveKey('contact-me')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const form = useRef();

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const resetErr = () => {
        setTimeout(() => {
            setErr('')
        }, 5000)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (value.user_name === '' ||
            value.user_email === '' ||
            value.message === '') {
            setErr('Please fill in the form before submitting!')
            resetErr()
        } else {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
                .then((result) => {
                    setShowResult(true)
                    setTimeout(() => {
                        setShowResult(false)
                    }, 5000)
                }, (error) => {
                    setErr('There is something wrong. Please re-try. Thank you!')
                    resetErr()
                });
            setValue(init)
        }

    };

    return (
        <div className='contact-me-wrapper'>
            <section
                className={
                    `contact-me-top-section${darkMode === 'dark'
                        ? ''
                        : ' contact-me-top-section-light-mode'}`
                }
            >
                <div className='contact-me-top-section__container'>
                    <div className='contact-me'>
                        <h2>Contact me</h2>
                        <div>If you are interested in hiring me or just simply want to connect with me, you can fill your information and message in the form below. <br /> I will be response as soon as I recieve it. <br />Or you can contact me via email <a href='mailto: thinguyen.webdev@gmail.com'>thinguyen.webdev@gmail.com</a></div>
                    </div>
                </div>
            </section>
            <section className='contact-me-bottom-section'>
                <div className='contact-me-bottom-section__container'>
                    <div className='cat-video'>
                        <video loop muted autoPlay>
                            <source src={require('../../photos/cat1.mp4')} type='video/mp4' />
                        </video>
                    </div>
                    <div className='cm-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className={`cm-form__row${darkMode === 'dark' ? '' : ' row--light-mode'}`}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    onChange={handleChange}
                                    value={value.user_name}
                                />
                            </div>
                            <div className={`cm-form__row${darkMode === 'dark' ? '' : ' row--light-mode'}`}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    onChange={handleChange}
                                    value={value.user_email}
                                />
                            </div>
                            <div className={`cm-form__row${darkMode === 'dark' ? '' : ' row--light-mode'}`}>
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    value={value.message}
                                />
                            </div>
                            <div className='cm-form__row cm-form__btn '>
                                <button
                                    type="submit" className="btn btn-primary" value="Send"
                                >send</button>
                            </div>
                        </form>
                    </div>
                    <div className='message'>
                        {err ? <div className='message__error'>{err}</div> : <></>}
                        {showResult ? <div className='message__success'>Your message was successfully sent to me. I will check and response the email as soon as I received it. Thank you!</div> : <></>}
                    </div>
                </div >
            </section >
        </div >
    )
}

const mapStateToProps = state => {
    return ({
        darkMode: state.darkModeReducer.darkMode
    })
}


export default connect(mapStateToProps, { getActiveKey })(ContactMe)
