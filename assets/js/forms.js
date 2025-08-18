// Forms functionality with AJAX submission
export function initializeForms() {
  const forms = document.querySelectorAll('form.ajax-form');
  
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const status = form.querySelector('.form-status');
      const endpoint = form.getAttribute('data-form-endpoint');
      const honeypot = form.querySelector('input[name="company"]');
      
      // Basic spam protection
      if (honeypot && honeypot.value) {
        if (status) status.textContent = 'Thanks!';
        form.reset();
        return;
      }
      
      if (!endpoint) {
        if (status) status.textContent = 'Thanks! Your message was captured locally.';
        form.reset();
        return;
      }
      
      const formData = new FormData(form);
      
      if (status) {
        status.style.color = 'var(--ink-500)';
        status.textContent = 'Sending…';
      }
      
      fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function(res) {
        if (res.ok) {
          if (status) {
            status.style.color = 'var(--p-600)';
            status.textContent = 'Thank you! We\'ll be in touch.';
          }
          form.reset();
        } else {
          return res.json().catch(function(){ return {}; }).then(function(data){
            throw new Error(data.error || 'Submission failed.');
          });
        }
      })
      .catch(function(err) {
        if (status) {
          status.style.color = '#b00020';
          status.textContent = 'Oops, something went wrong. Please email hello@researchforeveryone.org';
        }
        console.error(err);
      });
    });
  });
}

// No auto-init; forms initialize inline in ContactForm component
