// Función para mostrar el contenido de una pestaña específica
function mostrarContenido(categoria) {
    // Ocultar todo el contenido
    var contenido = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contenido.length; i++) {
      contenido[i].style.display = 'none';
    }
    // Mostrar el contenido de la categoría seleccionada
    var contenidoCategoria = document.getElementById(categoria);
    contenidoCategoria.style.display = 'block';
  }

 function cambiarColor(elemento) {
      // Obtener todos los elementos de navegación y eliminar la clase 'active'
      var elementosNavegacion = document.getElementsByTagName('a');
      for (var i = 0; i < elementosNavegacion.length; i++) {
        elementosNavegacion[i].classList.remove('active');
      }
      
      // Agregar la clase 'active' al elemento seleccionado
      elemento.classList.add('active');
    }
  

    // Llamar a la función para mostrar la pestaña "home" por defecto
    mostrarContenido("home");
    