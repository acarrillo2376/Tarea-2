// back.js

document.addEventListener('DOMContentLoaded', function() {
    // Crear el botón flotante
    const backButton = document.createElement('button');
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i>'; // Usar icono de Font Awesome
    backButton.style.position = 'fixed';
    backButton.style.bottom = '20px';
    backButton.style.left = '20px';
    backButton.style.backgroundColor = '#007bff';
    backButton.style.color = 'white';
    backButton.style.width = '50px';   // Hacerlo circular
    backButton.style.height = '50px';  // Hacerlo circular
    backButton.style.borderRadius = '50%'; // Hacerlo circular
    backButton.style.border = 'none';
    backButton.style.cursor = 'pointer';
    backButton.style.fontSize = '20px'; // Tamaño del icono
    backButton.style.display = 'flex';   // Centrar el icono
    backButton.style.justifyContent = 'center'; // Centrar el icono
    backButton.style.alignItems = 'center';   // Centrar el icono
    backButton.style.zIndex = '1000'; // Asegurar que esté por encima de otros elementos
  
    // Agregar el botón al body
    document.body.appendChild(backButton);
  
    // Agregar el evento de click al botón
    backButton.addEventListener('click', function() {
      // Redirigir a landing.html
      window.location.href = '../landing.html';
    });
  });