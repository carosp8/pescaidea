// Agregar Clase fade-in al nombre-frase-profesion //

document.addEventListener("DOMContentLoaded", function() {
    // Agregar la clase 'fade-in' a los elementos después de que la página haya cargado
    document.querySelector('.caro_nombre').classList.add('fade-in');
    document.querySelector('.caro_frase').classList.add('fade-in');
    document.querySelector('.caro_profesion').classList.add('fade-in');

    document.querySelector('.isaac_nombre').classList.add('fade-in');
    document.querySelector('.isaac_frase').classList.add('fade-in');
    document.querySelector('.isaac_profesion').classList.add('fade-in');
});

// Agregar Clase visible al nav //

const nav = document.getElementById('nav');
const abrirNav = document.getElementById('abrir');
const cerrarNav = document.getElementById('cerrar');
const contenedorNav = document.querySelector('.contenedor-nav');

abrirNav.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrarNav.addEventListener('click', () => {
    nav.classList.remove('visible');
})


