import { useState } from 'react'
import './ContactUsForm.css'
import emailjs from 'emailjs-com'

function ContactUsForm({setShowModal}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()

        const errs = []

        if (!name) errs.push('Please provide a value for name.')
        if (!email) errs.push('Please provide a value for email.')
        if (!message) errs.push('Please provide a value for message.')
        setErrors(errs)

        if (!errs.length) {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setShowModal(false)
                })
                // ,(error) => {
                //     console.log('FAILED...', error);
                // });
        }
    }

    return (
        <div className='contact-us-form-div'>
            <form className='contact-us-form' onSubmit={onSubmit}>
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
                            <div className='contact-us-inputs'>
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
                            <div className='contact-us-inputs'>
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
                            <div className='contact-us-inputs'>
                                <label
                                    className='contact-us-label'
                                    htmlFor='message'>
                                    Message:
                                </label>
                                <textarea
                                    className='contact-us-textarea'
                                    name='message'
                                    type='message'
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                >
                                </textarea>
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
