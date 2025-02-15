import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, integrate with Formspree or another service for real submissions
    console.log("Booking submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Book an Appointment</h1>
      {submitted ? (
        <p>Thank you for booking an appointment! We will contact you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Phone:</label><br />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Date:</label><br />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div>
            <label>Time:</label><br />
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
          <div>
            <label>Message (Optional):</label><br />
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" style={{ marginTop: '1rem', backgroundColor: '#2e7d32', color: '#fff', border: 'none', padding: '0.5rem 1rem' }}>
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
