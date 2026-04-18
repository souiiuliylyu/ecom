import React from 'react';

const Header = () => {
  return (
    <header className="container" style={{ borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10 }}>
      <div className="navbar">
        <div className="logo">Ecomstory.</div>
        <nav className="nav-links hidden-xs">
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#changelog">Changelog</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden-xs" style={{ fontWeight: 500 }}>Log In</a>
          <a href="#" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
