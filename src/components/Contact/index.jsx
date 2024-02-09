import React, {useState} from 'react'
import './style.css'

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Validation logic...
      
        if (Object.keys(validationError).length > 0) {
          setErrors(validationError);
          return;
        }
      
        setErrors({});
      
        try {
          const response = await fetch('/.netlify/functions/submitForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            // Handle success, e.g., show a success message to the user
            console.log('Form submitted successfully');
          } else {
            // Handle error, e.g., show an error message to the user
            console.error('Error submitting form');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      

  return (
    <div className='contact-div'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor='name'>Name:</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Message:</label>
            <textarea type="text" id='message' name='message' value={formData.message} onChange={handleChange} required/>
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
