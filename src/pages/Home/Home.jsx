import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Cafe Demo</h1>
          <p>Delicious coffee & pastries made with love</p>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>At Cafe Demo, we believe in the perfect cup of coffee. Our beans are sourced from the best plantations and roasted to perfection.</p>
        <p>We also offer fresh pastries, sandwiches, and a cozy environment to enjoy your favorite beverages.</p>
      </section>

      <section className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-card">
            <h3>Espresso</h3>
            <p>Rich, bold, and full of flavor.</p>
            <p>₹120</p>
          </div>
          <div className="menu-card">
            <h3>Cappuccino</h3>
            <p>Creamy and smooth, perfect for mornings.</p>
            <p>₹150</p>
          </div>
          <div className="menu-card">
            <h3>Latte</h3>
            <p>A gentle blend of espresso and steamed milk.</p>
            <p>₹160</p>
          </div>
          <div className="menu-card">
            <h3>Chocolate Cake</h3>
            <p>Rich, moist, and chocolatey.</p>
            <p>₹180</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
