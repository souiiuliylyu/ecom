import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="section" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="badge">💸 PRICING</div>
          <h2 className="h2">Replace a $18,000/mo team. Pay $20.</h2>
          <p className="lead">One AI agent that runs your entire e-commerce operation 24/7 — for less than a dinner out.</p>
        </div>
        
        <div className="pricing-wrapper card">
          <div className="pricing-header">
             <div>Hiring a Team (Monthly)</div>
             <div><span className="logo">Ecomplay Agent</span></div>
          </div>
          <div className="pricing-row">
            <div>
              <div style={{ fontWeight: 600 }}>Media Buyer</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$4,000/mo</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Included
            </div>
          </div>
          <div className="pricing-row">
            <div>
              <div style={{ fontWeight: 600 }}>CRO Designer</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$3,500/mo</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Included
            </div>
          </div>
          <div className="pricing-row">
            <div>
              <div style={{ fontWeight: 600 }}>Copywriter</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$2,500/mo</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Included
            </div>
          </div>
          <div className="pricing-row">
            <div>
              <div style={{ fontWeight: 600 }}>Store Manager</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$3,000/mo</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Included
            </div>
          </div>
          <div className="pricing-row">
            <div>
              <div style={{ fontWeight: 600 }}>Market Researcher</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$3,000/mo</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Included
            </div>
          </div>
          <div className="pricing-row">
            <div>
              <div style={{ fontWeight: 600 }}>Growth Operator</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$2,000/mo</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Included
            </div>
          </div>
          <div className="pricing-row" style={{ backgroundColor: '#f8fafc' }}>
            <div style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-tertiary)' }}>Total Output</div>
              <div className="strike-through" style={{ fontSize: '2rem', fontWeight: 800 }}>$18,000/mo</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Based on average freelancer rates.</div>
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0f2fe' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)' }}>$20</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>per month, billed monthly</div>
              <a href="#pricing" className="btn btn-primary" style={{ width: '100%', maxWidth: '200px' }}>Deploy Agent</a>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div className="included-grid" style={{ marginTop: '4rem' }}>
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <h3 className="h3">Everything included in your $20/mo plan</h3>
          </div>
          <div className="included-items">
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>24/7 AI agent on autopilot</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Automated market research</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Ad creative generation</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Landing page builder</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Shopify store management</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Multi-channel ad management</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>WhatsApp & Telegram control</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Proactive campaign scaling</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>AI integrations (GPT, Claude, Gemini)</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Dedicated private server</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Enterprise-grade security</span>
            </div>
            <div className="included-item">
              <span className="included-check">✓</span>
              <span>Weekly new skills & updates</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
