// Navigation functionality
export function initializeNavigation() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open').toString());
    });
    
    // Close menu when clicking a link (mobile UX)
    nav.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializeNavigation);
