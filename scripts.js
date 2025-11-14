// small interactive pieces: mobile menu toggling, quick-track demo, form UX
document.addEventListener('DOMContentLoaded', () => {
  // mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const mobile = document.getElementById('mobile-menu');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (mobile) mobile.hidden = !mobile.hidden;
    });
  }

  // fill current year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // quick track UI (demo only — no real tracking)
  const trackForm = document.getElementById('quick-track');
  if (trackForm) {
    trackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('tracking-number');
      const status = document.getElementById('track-status');
      const val = input && input.value.trim();
      if (!val) {
        status.textContent = 'Please enter a tracking number.';
        return;
      }
      // Simulate lookup
      status.textContent = 'Searching for ' + val + ' …';
      setTimeout(() => {
        status.textContent = 'No live data (demo). Replace this with your tracking API integration.';
      }, 900);
    });
  }

  // contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Let form submit naturally for Netlify, but show success message
      const result = document.getElementById('form-result');
      result.textContent = 'Thanks — request received. We will contact you shortly.';
      result.hidden = false;
      
      // Reset form and hide message after 4 seconds
      setTimeout(() => {
        contactForm.reset();
        result.hidden = true;
      }, 4000);
    });
  }
});
