// Main script - imports modular functionality
// This approach follows Astro best practices by keeping functionality separated

// Import individual modules
import { initializeNavigation } from './navigation.js';
import { initializeFAQ } from './faq.js';
import { initializeTypewriter } from './typewriter.js';
import { initializeForms } from './forms.js';
import { initializeHeroCanvas } from './hero-canvas.js';

// Global counter animation function for components
window.animateCounter = function(element) {
  const target = parseInt(element.dataset.target || '0', 10);
  const duration = parseFloat(element.dataset.duration || '2') * 1000;
  const suffix = element.dataset.suffix || '';
  
  let current = 0;
  const startTime = Date.now();
  
  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    current = Math.floor(easeOutCubic * target);
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target + suffix;
    }
  }
  
  requestAnimationFrame(update);
};

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize core functionality
  initializeNavigation();
  initializeFAQ();
  initializeTypewriter();
  initializeForms();
  initializeHeroCanvas();
  
  // Counter animation with Intersection Observer
  const counters = document.querySelectorAll('.count[data-target]');
  if ('IntersectionObserver' in window && counters.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          window.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    
    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  }
});