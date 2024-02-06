import React, {useState} from 'react'
import './style.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    const emailVal = email => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        const validationError = {}
        if (!formData.name.trim()) {
            validationError.name = 'Name is required!';
        }
        if (!formData.email.trim()) {
            validationError.email = 'Email is required!';
        } else if (!emailVal(formData.email)) {
            validationError.email = 'Email is invalid!'
        }
        if (!formData.message.trim()) {
            validationError.message = 'Message is required!';
        }

        // Check if errors exist
        if (Object.keys(validationError).length > 0) {
            setErrors(validationError);
            return;
        }

        setErrors({})
    }

  return (
    <div className='contact-div'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor='name'>Name:</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange}/>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} />
            <label htmlFor="message">Message:</label>
            <textarea type="text" id='message' name='message' value={formData.message} onChange={handleChange} />
            {Object.keys(errors).length > 0 && (
                <p className='form-error'>{Object.values(errors).map((error, index) => (
                    <span key={index}>{error}</span>
                ))}</p>
            )}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
