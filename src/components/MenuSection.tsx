import React from 'react';
import type { MenuCategory } from '../types';

interface MenuSectionProps {
  category: MenuCategory;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  const isInverted = category.layoutVariant === 'inverted';

  return (
    <section
      id={category.id}
      className={`menu-section ${isInverted ? 'menu-section--inverted' : ''}`}
      aria-labelledby={`heading-${category.id}`}
    >
      <div className="menu-section__container">
        {/* Menu Text & Items Column */}
        <div className="menu-section__content">
          <div className="menu-section__header">
            {category.badge && (
              <span className="section-badge">{category.badge}</span>
            )}
            <h2 id={`heading-${category.id}`} className="section-title">
              {category.title}
            </h2>
            {category.subtitle && (
              <p className="section-subtitle">{category.subtitle}</p>
            )}

            {category.notice && (
              <div className="section-notice" role="note">
                <svg
                  className="section-notice__icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{category.notice}</span>
              </div>
            )}

            <div className="section-separator">
              <span className="section-separator__dash" />
              <span className="section-separator__leaf" aria-hidden="true">🍃</span>
              <span className="section-separator__dash" />
            </div>
          </div>

          {/* Menu Items List */}
          <ul className="menu-items-list">
            {category.items.map((item) => (
              <li key={item.id} className="menu-item">
                <div className="menu-item__indicator" aria-hidden="true" />
                <div className="menu-item__details">
                  <span className="menu-item__name">{item.name}</span>
                </div>
                <div className="menu-item__spacer" aria-hidden="true" />
                <div className="menu-item__price-wrap">
                  <span className="menu-item__price">{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual / Food Photography Column */}
        <div className="menu-section__visual">
          {category.secondaryImage ? (
            <div className="menu-photos-duo">
              <div className="menu-photo-card menu-photo-card--top">
                <img
                  src={category.primaryImage}
                  alt={category.primaryImageAlt}
                  className="menu-photo-img"
                  loading="lazy"
                />
              </div>
              <div className="menu-photo-card menu-photo-card--bottom">
                <img
                  src={category.secondaryImage}
                  alt={category.secondaryImageAlt}
                  className="menu-photo-img"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="menu-photo-card menu-photo-card--single">
              <img
                src={category.primaryImage}
                alt={category.primaryImageAlt}
                className="menu-photo-img"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
