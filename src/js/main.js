// Import the global CSS so Vite bundles styles with the JS entry point
import '../css/main.css';

// Feature modules: each one enhances a section of the site
import initNavigation from './navigation.js';
import { initContactForm } from './forms.js';

// Wait until the DOM is ready before touching the page
const prefersMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');

const triggerHeroAnimation = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.classList.remove('is-animated');
  // Force a reflow so animations restart cleanly
  void hero.offsetWidth;
  hero.classList.add('is-animated');
};

document.addEventListener('DOMContentLoaded', () => {
  // Set up navigation behaviors (e.g., mobile toggles)
  initNavigation();
  // Enhance the contact form when present
  initContactForm();

  if (prefersMotion.matches) {
    triggerHeroAnimation();
  }
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted && prefersMotion.matches) {
    triggerHeroAnimation();
  }
});
