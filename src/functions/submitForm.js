// functions/submitForm.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Add your nodemailer configuration here
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'maria.binte.afzal@gmail.com',
        pass: '',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error submitting form' }),
    };
  }
};
