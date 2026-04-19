import React from 'react';

const Features = () => {
  return (
    <section id="how-it-works" className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="badge">CORE CAPABILITIES</div>
          <h2 className="h2">Your Ecomplay Agent comes pre-installed with these e-com skills</h2>
          <p className="lead">Ecomplay doesn't wait for instructions. It monitors, creates, and executes on its own.</p>
        </div>
        
        {/* Full-width feature showcases */}
        <div className="feature-grid">
          {/* Feature 1: AI Agent */}
          <div className="feature-content" style={{ paddingRight: '2rem' }}>
            <div className="badge">🤖 AI AGENT</div>
            <h3 className="h3">One AI agent that runs your entire e-commerce business</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Instead of hiring a team of marketers, designers, and analysts — deploy one AI agent that handles everything.
              Works 24/7 on autopilot, even while you sleep.
            </p>
            <ul className="feature-list">
              <li>Replaces marketers, designers, and analysts</li>
              <li>Works 24/7 on complete autopilot</li>
              <li>You can control it or let it run automatically</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
              <img src="/dashboard_mockup_1776519508253.png" alt="AI Agent Dashboard" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>
          
          {/* Feature 2: Market Research */}
          <div className="feature-content" style={{ paddingLeft: '2rem' }}>
            <div className="badge">🔍 RESEARCH</div>
            <h3 className="h3">Automated deep market research running on autopilot</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Scrapes platforms like Reddit for real customer insights. Finds trends, competitor strategies, and product ideas continuously in the background.
            </p>
            <ul className="feature-list">
              <li>Scrapes Reddit, forums & social platforms</li>
              <li>Finds trends & competitor strategies</li>
              <li>Discovers winning product ideas</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
              <img src="/ads_mockup_1776519522648.png" alt="Market Research Dashboard" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>

          {/* Feature 3: Ad Creative */}
          <div className="feature-content" style={{ paddingRight: '2rem' }}>
            <div className="badge">🎥 AD CREATIVE</div>
            <h3 className="h3">Full creative pipeline from research to ready-to-run ads</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Converts research into ad scripts, video ads, and static creatives. Your entire creative pipeline handled automatically.
            </p>
            <ul className="feature-list">
              <li>UGC-style ad scripts</li>
              <li>Video ad production</li>
              <li>Static creative design</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
              <img src="/landing_page_mockup_1776519538735.png" alt="Ad Creative Pipeline" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>

          {/* Feature 4: Landing Pages */}
          <div className="feature-content" style={{ paddingLeft: '2rem' }}>
            <div className="badge">🌐 LANDING PAGES</div>
            <h3 className="h3">High-converting landing pages & funnels built automatically</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Creates landing pages, advertorials, and product pages. Matches pages with ad angles for maximum conversions.
            </p>
            <ul className="feature-list">
              <li>Landing pages & advertorials</li>
              <li>Product pages matched to ad angles</li>
              <li>Full funnel congruency</li>
            </ul>
          </div>
          <div className="feature-image">
            <div className="feature-image-container">
               <img src="/store_mockup_1776519553976.png" alt="Landing Page Builder" style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Bento Grid */}
      <div className="container" style={{ marginTop: '5rem' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="badge">MORE SKILLS</div>
          <h2 className="h2">Everything else your agent handles</h2>
        </div>
        <div className="bento-grid">
          
          <div className="bento-card bento-large">
            <div className="bento-icon">🛒</div>
            <h4 className="bento-title">Shopify Store Management</h4>
            <p className="bento-desc">Auto-manages product listings, images, and trend tracking. Keeps your store updated without manual work — like a virtual store manager.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon">📈</div>
            <h4 className="bento-title">Multi-Channel Marketing</h4>
            <p className="bento-desc">Runs ads on Meta, Google, TikTok. Handles email marketing, organic posting, and ad performance analysis.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon">⚡</div>
            <h4 className="bento-title">Proactive AI</h4>
            <p className="bento-desc">Doesn't wait for instructions. Automatically analyzes ad performance, creates new ads, and scales winning campaigns.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon">🔌</div>
            <h4 className="bento-title">AI Integrations</h4>
            <p className="bento-desc">Works with ChatGPT, Claude, and Gemini. Connects seamlessly with Shopify + all major ad platforms.</p>
          </div>

          <div className="bento-card bento-large">
            <div className="bento-icon">💬</div>
            <h4 className="bento-title">Chat-Based Control</h4>
            <p className="bento-desc">Control via WhatsApp or Telegram. Just say "Pause worst ads" or "Show revenue". No technical skills needed.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon">🔒</div>
            <h4 className="bento-title">Security & Privacy</h4>
            <p className="bento-desc">Dedicated private server. No access to your store data by default. Cannot perform risky actions like refunds or deleting products.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon">🔄</div>
            <h4 className="bento-title">Weekly New Skills</h4>
            <p className="bento-desc">New capabilities added every week automatically. No updates required from your side — your agent keeps getting smarter.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
