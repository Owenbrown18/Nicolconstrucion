// Import the global CSS so Vite bundles styles with the JS entry point
import '../css/main.css';

// Feature modules: each one enhances a section of the site
import initNavigation from './navigation.js';
import { initContactForm } from './forms.js';

// Wait until the DOM is ready before touching the page
document.addEventListener('DOMContentLoaded', () => {
  // Set up navigation behaviors (e.g., mobile toggles)
  initNavigation();
  // Enhance the contact form when present
  initContactForm();
});
