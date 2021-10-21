import React from 'react'
import './contact.sass'

const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <div className="container">
                <div className="contact-form">
                    <form>
                        <p className='form-title'>Contact form is in progress</p>
                        <input disabled placeholder='Name' type="text" className="contact-name" />
                        <input disabled placeholder='Email' className="contact-email" type="email"/>
                        <textarea disabled placeholder='Message' className="contact-message"></textarea>
                    </form>
                </div>
                <div className="contact-info">
                    <p className="info-title">Contact info</p>
                    <p className='link-title'>
                        Email: <a href="mailto:as.egiev@yandex.ru">as.egiev@yandex.ru</a>
                    </p>
                    
                    <p className='link-title'>
                        Tel: <a href="tel:+79991558461">+7 (999) 155-84-61</a>
                    </p>
                    <p className='link-title'>
                        Github: <a href="github.com/kartegi">github.com/kartegi</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact