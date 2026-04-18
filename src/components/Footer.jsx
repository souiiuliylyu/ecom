import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem 0', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          <div>
            <div className="logo" style={{ marginBottom: '1rem' }}>ecomstory.</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              AI-powered e-commerce operations platform. One agent to run your entire business.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Product</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#how-it-works" style={{ color: 'var(--text-secondary)' }}>How It Works</a></li>
              <li><a href="#pricing" style={{ color: 'var(--text-secondary)' }}>Pricing Comparison</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Changelog</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Resources</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Discord</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Security</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Shopify Setup</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Meta Ads Setup</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>About</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Affiliates</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
          <p>© 2026 Ecomstory by StoryClicks Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
