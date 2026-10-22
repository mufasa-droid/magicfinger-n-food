import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { TermsSection } from './components/TermsSection';
import { Footer } from './components/Footer';
import { menuCategories } from './data/menuData';

export const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main id="main-content">
        <Hero />
        <div className="menu-sections-wrapper">
          {menuCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
