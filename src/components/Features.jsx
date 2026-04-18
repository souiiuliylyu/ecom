import React from 'react';

const Features = () => {
  return (
    <section id="how-it-works" className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="h2">Your OpenClaw comes pre-installed with these e-com skills</h2>
          <p className="lead">Ecomstory doesn't wait for instructions. It monitors, creates, and executes on its own.</p>
        </div>
        
        <div className="feature-grid">
          {/* Feature 1 */}
          <div className="feature-content" style={{ paddingRight: '2rem' }}>
            <div className="badge">RESEARCH</div>
            <h3 className="h3">Deep market research and competitor analysis running on autopilot.</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Scrape Reddit threads, get inside your customers' heads, and understand what they actually want.
            </p>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
              <img src="/dashboard_mockup_1776519508253.png" alt="Dashboard Mockup" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-content" style={{ paddingLeft: '2rem' }}>
            <div className="badge">AD CREATIVE</div>
            <h3 className="h3">Turn your research into ready-to-run ad concepts.</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              From creative strategy to UGC scripts, video production, and static ad design. Your entire creative pipeline from insight to asset.
            </p>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
              <img src="/ads_mockup_1776519522648.png" alt="Ads Dashboard Mockup" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-content" style={{ paddingRight: '2rem' }}>
            <div className="badge">LANDING PAGES</div>
            <h3 className="h3">Generate landing pages that match your ad angles for full funnel congruency.</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              From listicles to advertorials, every page is built to convert the exact traffic you are sending to it.
            </p>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
               <img src="/landing_page_mockup_1776519538735.png" alt="Landing Page Mockup" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-content" style={{ paddingLeft: '2rem' }}>
            <div className="badge">STORE MANAGEMENT</div>
            <h3 className="h3">Manage your entire Shopify store hands-free.</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Design product images, create optimized listings, and track trending products in your niche. Your store stays fresh without you lifting a finger.
            </p>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
               <img src="/store_mockup_1776519553976.png" alt="Store Mockup" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
