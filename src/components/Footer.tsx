import React from 'react';
import { brandInfo } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand">
          <span className="site-footer__logo">{brandInfo.name}</span>
          <span className="site-footer__dot">•</span>
          <span className="site-footer__year">{brandInfo.year}</span>
        </div>
        <p className="site-footer__closing-line">
          {brandInfo.closingQuote}
        </p>
        <p className="site-footer__tagline">
          {brandInfo.tagline}
        </p>
      </div>
    </footer>
  );
};
