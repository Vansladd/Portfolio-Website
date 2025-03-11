import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_f9pxxh7',
            'template_3g59y0n',
            refForm.current,
            'K1uEqbIQQgQydu8kc'
        )
        .then(
            () => {
                window.alert('Message Successfully Sent')
                window.location.reload(false)
            },
            () => {
                window.alert('Failed to send Message')
            }
        )

    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']} letterClass={letterClass} idx={15}/>
                    </h1>
                    <p>
                    I am always open to exciting opportunities in both front-end and back-end development. With expertise in React, JavaScript, Python, and Django, I enjoy building dynamic, user-friendly applications and scalable backend solutions. Whether it’s crafting seamless UI experiences or developing efficient server-side architectures, I am eager to contribute my skills to impactful projects. If you're looking for a dedicated and detail-oriented developer, feel free to reach out—I’d love to connect!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required >

                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Contact;