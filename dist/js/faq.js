// FAQ functionality
export function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('h4');
    const answer = item.querySelector('p');
    
    if (question && answer) {
      // Initially hide answer to keep list compact
      answer.style.display = 'none';
      question.style.cursor = 'pointer';
      question.setAttribute('tabindex', '0');
      question.setAttribute('role', 'button');
      question.setAttribute('aria-expanded', 'false');
      
      const toggleAnswer = function() {
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        question.setAttribute('aria-expanded', (!isOpen).toString());
      };
      
      question.addEventListener('click', toggleAnswer);
      question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleAnswer();
        }
      });
    }
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializeFAQ);
