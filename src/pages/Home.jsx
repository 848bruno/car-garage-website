import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Car Garage</h1>
      <p>
        Your trusted partner for quality car repairs, maintenance, and service.
      </p>
      <img
        src="https://via.placeholder.com/800x400?text=Car+Garage+Showroom"
        alt="Car Garage Showroom"
        style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '1rem' }}
      />
    </div>
  );
};

export default Home;
