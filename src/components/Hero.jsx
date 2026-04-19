import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section animate-fade-in">
      <div className="container">
        <div className="hero-glow"></div>
        <div className="badge pulse-badge">✨ Ecomplay Agent 1.0 is live — Weekly new skills added automatically</div>
        <h1 className="h1">
          One AI agent that replaces<br />
          your entire e-commerce team
        </h1>
        <p className="lead">
          Stop hiring marketers, designers, and analysts. Deploy one AI agent that runs your 
          Shopify store 24/7 — from market research to ad creation to campaign scaling. All on autopilot.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Always Running</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">$20</span>
            <span className="stat-label">Per Month</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">AI Skills</span>
          </div>
        </div>
        <div className="hero-cta">
          <a href="#pricing" className="btn btn-primary btn-lg">Deploy Agent Now</a>
          <a href="#how-it-works" className="btn btn-secondary btn-lg">Watch Demo</a>
        </div>
        <div className="hero-trust">
          <span className="trust-icon">🔒</span>
          <span>Private dedicated server • No access to your store data by default • Enterprise-grade security</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
