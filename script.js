window.addEventListener('load', function() {
  if (!sessionStorage.getItem('formularioCompletado')) {
    var edad = prompt('Por favor, ingresa tu edad:');

    if (edad >= 18) {
      var resideEnSanNicolas = confirm('¿Vivis en la ciudad de San Nicolás de los Arroyos?');
      if (resideEnSanNicolas) {
        alert('¡Bienvenido/a! Recibirás un descuento especial del 50% en nuestros servicios.');
      } else {
        alert('¡Bienvenido/a! No aplicamos descuentos a residentes fuera de San Nicolás de los Arroyos.');
      }
    } else {
      alert('Lo sentimos, debes ser mayor de edad para ingresar a esta página.');
      window.location.href = 'https://www.google.com';
    }

    // Almacenar el valor en sessionStorage para indicar que se completó el formulario
    sessionStorage.setItem('formularioCompletado', 'true');
  }
});




