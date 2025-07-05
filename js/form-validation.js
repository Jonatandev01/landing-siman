document.addEventListener('DOMContentLoaded', function() {
  const subscriptionForm = document.getElementById('subscriptionForm');
  
  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validar campos
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      let isValid = true;
      
      // Validar nombre
      if (name.value.trim() === '') {
        showError(name, 'Por favor ingresa tu nombre');
        isValid = false;
      } else {
        clearError(name);
      }
      
      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Por favor ingresa un email válido');
        isValid = false;
      } else {
        clearError(email);
      }
      
      if (isValid) {
        // Simular envío (en un proyecto real sería una petición AJAX)
        alert('¡Gracias por suscribirte! Te enviaremos nuestras mejores promociones.');
        this.reset();
      }
    });
    
    // Funciones auxiliares
    function showError(input, message) {
      const formGroup = input.parentElement;
      const errorText = formGroup.querySelector('.error-text') || document.createElement('small');
      
      errorText.className = 'error-text';
      errorText.style.color = 'var(--primary)';
      errorText.textContent = message;
      
      if (!formGroup.querySelector('.error-text')) {
        formGroup.appendChild(errorText);
      }
      
      input.style.borderColor = 'var(--primary)';
    }
    
    function clearError(input) {
      const formGroup = input.parentElement;
      const errorText = formGroup.querySelector('.error-text');
      
      if (errorText) {
        formGroup.removeChild(errorText);
      }
      
      input.style.borderColor = '';
    }
  }
});