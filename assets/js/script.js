// Obtenemos todas las imágenes de producto
var imagenesProductos = document.querySelectorAll('.producto img');

// Función para manejar el evento de aumento de tamaño
function aumentarTamaño() {
    // Aumentamos el tamaño de la imagen al 180%
    this.style.transform = 'scale(1.8)';
    // Ajustamos el z-index para que la imagen esté por encima de las demás
    this.style.zIndex = '1';
    // Agregamos una transición suave
    this.style.transition = 'transform 0.3s ease-in-out';
}

// Función para manejar el evento de restaurar tamaño
function restaurarTamaño() {
    // Revertimos al tamaño original
    this.style.transform = 'scale(1)';
    // Restablecemos el z-index al valor original
    this.style.zIndex = '0';
}

// Iteramos sobre cada imagen
imagenesProductos.forEach(function(imagen) {
    // Añadimos un evento para cuando el cursor se mueve sobre la imagen (para PC)
    imagen.addEventListener('mouseover', aumentarTamaño);
    
    // Añadimos un evento para cuando el cursor sale de la imagen (para PC)
    imagen.addEventListener('mouseout', restaurarTamaño);
    
    // Añadimos un evento para cuando se toca la imagen en dispositivos táctiles
    imagen.addEventListener('touchstart', aumentarTamaño);
    
    // Añadimos un evento para cuando se deja de tocar la imagen en dispositivos táctiles
    imagen.addEventListener('touchend', restaurarTamaño);
});

// Función para desplazar la página hacia la parte superior
function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth' // Esta línea hace que el desplazamiento sea suave
    });
}

// Espera a que la página se cargue completamente
window.addEventListener('load', function() {
    // Desplaza la página hacia la parte superior
    scrollToTop();
});
