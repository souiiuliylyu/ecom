import React from 'react';

const Hero = () => {
  return (
    <section className="section text-center animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="badge">✨ Ecomstory Agent 1.0 is live</div>
        <h1 className="h1">
          The AI that runs your entire<br />
          e-commerce brand 24/7
        </h1>
        <p className="lead">
          Replace your entire e-commerce team with one AI agent. From research to content to store management — fully automated, always on.
        </p>
        <div className="flex justify-center items-center gap-4" style={{ marginTop: '3rem' }}>
          <a href="#" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Deploy Agent</a>
          <a href="#" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>View Demo</a>
        </div>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
          <span>🔒</span> Your data stays 100% private and secure
        </p>
      </div>
    </section>
  );
};

export default Hero;
