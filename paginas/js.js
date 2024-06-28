      // Cambiar imagen al pasar el mouse
      document.getElementById("seriefav").addEventListener("mouseover", function() {
        this.src = "../imagenes/CAMBIO.gif"; // Cambia la ruta de la imagen según sea necesario
    });
    
    document.getElementById("seriefav").addEventListener("mouseout", function() {
        this.src = "../imagenes/peli.jpeg"; // Imagen original
    });

        // Animación de los títulos al pasar el mouse
        function saltarTitulo(element) {
            element.style.transition = "transform 0.5s";
            element.style.transform = "scale(1.2)";
        }

        function restaurarTitulo(element) {
            element.style.transition = "transform 0.5s";
            element.style.transform = "scale(1)";
        }

        // Función para rotar una imagen al pasar el mouse sobre ella
        function rotarImagen(elemento) {
            elemento.style.transform = "rotateY(180deg)";
        }

        // Función para restaurar la rotación de la imagen
        function restaurarRotacion(elemento) {
            elemento.style.transform = "";
        }

        // Función para cambiar la imagen principal al pasar el mouse sobre el logo
        function cambiarImagen() {
            document.getElementById('seriefav').src = '../imagenes/otra_imagen.jpg';
        }

        // Función para restaurar la imagen original del logo al quitar el mouse
        function restaurarImagen() {
            document.getElementById('seriefav').src = '../imagenes/peli.jpeg';
        }

        // Función cambiar color al pasar el mouse sobre los enlaces del menú
        function agrandarYCambiarColor() {
            // Obtener todos los enlaces dentro de la lista de etiquetas
            var enlaces = document.querySelectorAll('.etiquetas .niveles a');

            // 
            enlaces.forEach(function (enlace) {
                // Agregar evento al pasar el mouse sobre el enlace
                enlace.addEventListener('mouseover', function () {
                    this.style.color = '#FF5733'; // Cambiar color
                });

                // Agregar evento al quitar el mouse del enlace para restaurar estado original
                enlace.addEventListener('mouseout', function () {
                    this.style.color = '#45b40d'; // Restaurar color original
                });
            });
        }
        //
        document.addEventListener('DOMContentLoaded', function () {
            agrandarYCambiarColor();
        });
        
           // Cambiar color y tamaño del título al cargar la página
           document.addEventListener("DOMContentLoaded", function() {
            var titulo = document.getElementById("pelicula");
            titulo.style.color = "#bf9b46";
            titulo.style.fontSize = "65px"; // Puedes ajustar el tamaño según sea necesario
        });

        // Función cambiar color al pasar el mouse sobre los enlaces del menú
        function agrandarYCambiarColor() {
            // Obtener todos los enlaces dentro de la lista de etiquetas
            var enlaces = document.querySelectorAll('.etiquetas .niveles a');

            // Agregar eventos a los enlaces
            enlaces.forEach(function (enlace) {
                enlace.addEventListener('mouseover', function () {
                    this.style.color = '#FF5733'; // Cambiar color
                });

                enlace.addEventListener('mouseout', function () {
                    this.style.color = '#45b40d'; // Restaurar color original
                });
            });
        }

        document.addEventListener('DOMContentLoaded', function () {
            agrandarYCambiarColor();
        });