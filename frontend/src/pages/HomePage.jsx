// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const HomePage = () => {
  // --- Styles ---
  const heroStyle = {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundColor: '#f4f7f6',
    borderRadius: '8px',
  };

  const achievementsSectionStyle = {
    textAlign: 'center',
    padding: '60px 20px',
  };

  const achievementsGridStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
  };

  const achievementBox = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const gallerySectionStyle = {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f4f7f6',
  };

  const imageGridStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
    flexWrap: 'wrap',
  };

  const imagePlaceholderStyle = {
    width: '300px',
    height: '200px',
    backgroundColor: '#ccc',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    fontSize: '1rem',
    textAlign: 'center',
    padding: '10px'
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1>Welcome to the Repurpose App</h1>
        <p style={{ fontSize: '1.2rem', color: '#555', margin: '20px 0' }}>
          Connecting generous hearts with those in need. Your old items can start a new story.
        </p>
        <div style={{ width: '200px', margin: '0 auto' }}>
            <Link to="/items" style={{ textDecoration: 'none' }}>
                <Button>Browse Items</Button>
            </Link>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={achievementsSectionStyle}>
        <h2>Our Impact</h2>
        <div style={achievementsGridStyle}>
          <div>
            <div style={achievementBox}>1,200+</div>
            <p>Items Donated</p>
          </div>
          <div>
            <div style={achievementBox}>50+</div>
            <p>NGOs Partnered</p>
          </div>
          <div>
            <div style={achievementBox}>3,000+</div>
            <p>Lives Touched</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={gallerySectionStyle}>
        <h2>Donations in Action</h2>
        <div style={imageGridStyle}>
          <div style={imagePlaceholderStyle}></div>
          <div style={imagePlaceholderStyle}></div>
          <div style={imagePlaceholderStyle}></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;