// Global interactive script for Research for Everyone
// Provides mobile navigation toggling, FAQ collapse, typewriter effect,
// scroll-triggered reveal animations and animated metrics counters.

document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }

  // FAQ toggle: collapse/expand answers on click
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var question = item.querySelector('h4');
    var answer = item.querySelector('p');
    if (question && answer) {
      // Initially hide answer to keep list compact
      answer.style.display = 'none';
      question.addEventListener('click', function() {
        var isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
      });
    }
  });

  /* Typewriter effect on the hero headline
     We cycle through an array of strings, typing each one character by character.
     Phrases can be specified via a data attribute on the span: data-phrases="Phrase1|Phrase2|Phrase3".
     If not provided, we fall back to a sensible default. */
  var heroSpan = document.getElementById('hero-typed');
  if (heroSpan) {
    var dataset = heroSpan.getAttribute('data-phrases');
    var phrases = [];
    if (dataset && dataset.trim().length > 0) {
      phrases = dataset.split('|').map(function(str) { return str.trim(); }).filter(Boolean);
    }
    if (phrases.length === 0) {
      phrases = [
        'Safe, supervised lab access.',
        'Standardised training for researchers.',
        'Where readiness meets opportunity.'
      ];
    }
    var typeSpeed = 80;
    var eraseSpeed = 40;
    var delayBetween = 2000;
    var phraseIndex = 0;
    var charIndex = 0;

    function type() {
      var current = phrases[phraseIndex];
      heroSpan.textContent = current.substring(0, charIndex);
      if (charIndex < current.length) {
        charIndex++;
        setTimeout(type, typeSpeed);
      } else {
        setTimeout(erase, delayBetween);
      }
    }
    function erase() {
      var current = phrases[phraseIndex];
      heroSpan.textContent = current.substring(0, charIndex);
      if (charIndex > 0) {
        charIndex--;
        setTimeout(erase, eraseSpeed);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 400);
      }
    }
    type();
  }

  // Removed theme toggling logic.  The site now operates exclusively in light mode.  Any
  // existing theme preference in localStorage is ignored, and no theme switcher is
  // rendered in the markup.

  // Scroll reveal using IntersectionObserver
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Animate counters inside this section, if any
          var counters = entry.target.querySelectorAll('.count[data-target]');
          counters.forEach(function(counter) {
            animateCount(counter);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    revealEls.forEach(function(el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function(el) { el.classList.add('visible'); });
  }

  // Counter animation
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    var current = 0;
    var increment = Math.ceil(target / 100);
    var interval = setInterval(function() {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(interval);
      } else {
        el.textContent = current;
      }
    }, 25);
  }
});