import React from 'react';
import { brandInfo } from '../data/menuData';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Editorial Text Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge__year">{brandInfo.year}</span>
            <span className="hero-badge__dot">•</span>
            <span className="hero-badge__collection">OFFICIAL MENU</span>
          </div>

          <h1 className="hero-brand-title">
            <span className="hero-brand-title__accent">Magic’n’Food</span>
          </h1>

          <h2 className="hero-subtitle">
            MINI FOOD BOWLS &amp; AFTER PARTY MENU
          </h2>

          <div className="hero-divider">
            <span className="hero-divider__line" />
            <span className="hero-divider__symbol">✦</span>
            <span className="hero-divider__line" />
          </div>

          <blockquote className="hero-quote">
            “{brandInfo.tagline}”
          </blockquote>

          <div className="hero-categories-pills">
            <span className="hero-pill">MINI BOWLS</span>
            <span className="hero-pill-separator">•</span>
            <span className="hero-pill">AFTER PARTY EATS</span>
            <span className="hero-pill-separator">•</span>
            <span className="hero-pill">CHEF’S PORTIONS</span>
          </div>

          <div className="hero-action">
            <a href="#mini-bowls-part-1" className="hero-scroll-btn">
              <span>Explore The Menu</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Cover Food Photography Column */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src={brandInfo.heroImage}
              alt={brandInfo.heroImageAlt}
              className="hero-image"
              loading="eager"
            />
            <div className="hero-image-overlay" />
            <div className="hero-image-caption">
              <span className="hero-image-caption__tag">Signature Presentation</span>
              <span className="hero-image-caption__text">Gourmet Basmati &amp; Crispy Tiger Prawns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
