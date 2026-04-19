import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-fixed ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar">
          <div className="logo">Ecomstory.</div>
          <nav className="nav-links hidden-xs">
            <a href="#how-it-works">Skills</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <a href="#changelog">Changelog</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden-xs" style={{ fontWeight: 500 }}>Log In</a>
            <a href="#" className="btn btn-primary">Get Started — $20/mo</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
