document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });
  }

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Smooth scroll para anclas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Animación de cards al aparecer en viewport
  const promoCards = document.querySelectorAll('.promo-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.1 });

  promoCards.forEach(card => {
    observer.observe(card);
  });
});