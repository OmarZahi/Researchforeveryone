// Typewriter effect for hero headlines
export function initializeTypewriter() {
  const heroSpan = document.getElementById('hero-typed');
  
  if (heroSpan) {
    const dataset = heroSpan.getAttribute('data-phrases');
    let phrases = [];
    
    if (dataset && dataset.trim().length > 0) {
      phrases = dataset.split('|').map(str => str.trim()).filter(Boolean);
    }
    
    if (phrases.length === 0) {
      phrases = [
        'Safe, supervised lab access.',
        'Standardised training for researchers.',
        'Where readiness meets opportunity.'
      ];
    }
    
    const typeSpeed = 80;
    const eraseSpeed = 40;
    const delayBetween = 2000;
    let phraseIndex = 0;
    let charIndex = 0;

    function type() {
      const current = phrases[phraseIndex];
      heroSpan.textContent = current.substring(0, charIndex);
      
      if (charIndex < current.length) {
        charIndex++;
        setTimeout(type, typeSpeed);
      } else {
        setTimeout(erase, delayBetween);
      }
    }
    
    function erase() {
      const current = phrases[phraseIndex];
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
}

// No auto-init; initialize where used
