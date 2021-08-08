import { useState } from 'react'
import './ContactUsForm.css'
import emailjs from 'emailjs-com'

function ContactUsForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        const templateParams = {
            name, email, message
        }
        const errs = []

        if (!name) errs.push('Please provide a value for name.')
        if (!email) errs.push('Please provide a value for email.')
        if (!message) errs.push('Please provide a value for message.')
        setErrors(errs)

        if (!errors) {
            emailjs.send('gmail', process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });
        }
    }

    return (
        <div className='contact-us-form-div'>
            <form onSubmit={onSubmit}>
                <div className='contact-us-content'>
                    <div className='contact-us-h3-container'>
                        <h3 className='contact-us-h3'>Contact Us</h3>
                    </div>
                    <div>
                        <div className='errors-container'>
                            <ul className='errors'>
                                {errors && errors.map((err, idx) => (
                                    <li key={idx}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='contact-us-inputs'>
                        <div>
                            <div className='contact-us-name-input'>
                                <label
                                    className='contact-us-label'
                                    htmlFor='name'>
                                    Name:
                                </label>
                                <input
                                    className='contact-us-input'
                                    name='name'
                                    type='text'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='contact-us-email-input'>
                                <label
                                    className='contact-us-label'
                                    htmlFor='email'>
                                    Email:
                                </label>
                                <input
                                    className='contact-us-input'
                                    name='email'
                                    type='text'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='contact-us-message-input'>
                                <label
                                    className='contact-us-label'
                                    htmlFor='message'>
                                    Message:
                                </label>
                                <input
                                    className='contact-us-input'
                                    name='message'
                                    type='message'
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='contact-us-btn-div'>
                        <button className='contact-us-btn'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactUsForm
