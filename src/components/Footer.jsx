import React from 'react';

const Footer = () => {
  return (
    <footer id="security" className="footer-section">
      <div className="container">
        {/* CTA Banner */}
        <div className="footer-cta">
          <h2 className="h2" style={{ color: 'white', marginBottom: '1rem' }}>Ready to replace your $18K/mo team?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Deploy your AI agent today. Start automating your entire e-commerce operation for just $20/month.
          </p>
          <a href="#" className="btn btn-cta">Deploy Agent — $20/mo</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem', marginTop: '4rem' }}>
          
          <div>
            <div className="logo" style={{ marginBottom: '1rem' }}>ecomplay.</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              AI-powered e-commerce operations platform. One agent to run your entire business.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ fontSize: '0.75rem' }}>ChatGPT</span>
              <span className="badge" style={{ fontSize: '0.75rem' }}>Claude</span>
              <span className="badge" style={{ fontSize: '0.75rem' }}>Gemini</span>
              <span className="badge" style={{ fontSize: '0.75rem' }}>Shopify</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Product</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#how-it-works" style={{ color: 'var(--text-secondary)' }}>AI Skills</a></li>
              <li><a href="#pricing" style={{ color: 'var(--text-secondary)' }}>Pricing</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Changelog</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Roadmap</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Resources</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Discord</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Security</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Shopify Setup</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Meta Ads Setup</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>WhatsApp Setup</a></li>
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

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-tertiary)', flexWrap: 'wrap', gap: '1rem' }}>
          <p>© 2026 Ecomplay by StoryClicks Inc. All rights reserved.</p>
          <p style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span>🔒</span> SOC 2 Compliant · Private Servers · Enterprise Security
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
