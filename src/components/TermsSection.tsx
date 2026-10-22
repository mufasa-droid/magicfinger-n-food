import React from 'react';
import { termsData } from '../data/menuData';

export const TermsSection: React.FC = () => {
  return (
    <section id="terms-conditions" className="terms-section" aria-labelledby="terms-heading">
      <div className="terms-section__container">
        {/* Left Terms Content */}
        <div className="terms-section__content">
          <div className="section-badge">Booking Guidelines</div>
          <h2 id="terms-heading" className="section-title terms-title">
            Terms &amp; Conditions
          </h2>
          <p className="section-subtitle">
            Please review our event catering standards and reservation policies.
          </p>

          <div className="section-separator">
            <span className="section-separator__dash" />
            <span className="section-separator__leaf" aria-hidden="true">🍃</span>
            <span className="section-separator__dash" />
          </div>

          {/* General Terms List */}
          <div className="terms-block">
            <h3 className="terms-block__title">Order &amp; Booking Terms</h3>
            <ul className="terms-list">
              {termsData.generalTerms.map((term) => (
                <li key={term.id} className="terms-item">
                  <span className="terms-item__bullet" aria-hidden="true" />
                  <span className="terms-item__text">{term.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation & Refunds Box */}
          <div className="cancellation-card">
            <div className="cancellation-card__header">
              <span className="cancellation-badge">Policy</span>
              <h3 className="cancellation-card__title">{termsData.cancellationTitle}</h3>
            </div>
            <ul className="cancellation-list">
              {termsData.cancellationTerms.map((term) => (
                <li key={term.id} className="cancellation-item">
                  <span className="cancellation-item__marker" aria-hidden="true" />
                  <span className="cancellation-item__text">{term.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Food/Eco Containers Image */}
        <div className="terms-section__visual">
          <div className="terms-photo-card">
            <img
              src={termsData.image}
              alt={termsData.imageAlt}
              className="terms-photo-img"
              loading="lazy"
            />
            <div className="terms-photo-caption">
              <span className="terms-photo-caption__tag">Eco-Friendly Event Packaging</span>
              <span className="terms-photo-caption__text">Crafted for warm, fresh, fuss-free catering delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
