import React, { useState } from 'react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with Formspree or similar services for actual submission
    console.log("Contact submitted:", contactForm);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for reaching out! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input type="text" name="name" value={contactForm.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" value={contactForm.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Message:</label><br />
            <textarea name="message" value={contactForm.message} onChange={handleChange} required />
          </div>
          <button type="submit" style={{ marginTop: '1rem', backgroundColor: '#2e7d32', color: '#fff', border: 'none', padding: '0.5rem 1rem' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
