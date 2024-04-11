    // Obtenemos todas las imágenes de producto
    var imagenesProductos = document.querySelectorAll('.producto img');

    // Iteramos sobre cada imagen
    imagenesProductos.forEach(function(imagen) {
        // Añadimos un evento para cuando el cursor se mueve sobre la imagen
        imagen.addEventListener('mouseover', function() {
            // Aumentamos el tamaño de la imagen al 110%
            this.style.transform = 'scale(1.1)';
            // Agregamos una transición suave
            this.style.transition = 'transform 0.3s ease-in-out';
        });

        // Añadimos un evento para cuando el cursor sale de la imagen
        imagen.addEventListener('mouseout', function() {
            // Revertimos al tamaño original
            this.style.transform = 'scale(1)';
        });
    });
