import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mini Bowls I', href: '#mini-bowls-part-1' },
    { name: 'Mini Bowls II', href: '#mini-bowls-part-2' },
    { name: 'After Party Eats', href: '#after-party-eats' },
    { name: 'Terms & Conditions', href: '#terms-conditions' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__container">
        <a href="#" className="brand-wordmark" aria-label="Magic'n'Food Home">
          <span className="brand-wordmark__main">Magic’n’Food</span>
          <span className="brand-wordmark__sub">Gourmet Catering</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-nav__list">
            {navLinks.map((link) => (
              <li key={link.href} className="desktop-nav__item">
                <a href={link.href} className="desktop-nav__link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav__list">
            {navLinks.map((link) => (
              <li key={link.href} className="mobile-nav__item">
                <a
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
