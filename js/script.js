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

abrirNav.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrarNav.addEventListener('click', () => {
    nav.classList.remove('visible');
})


// Proyecto Tarjetas //

const cards = document.querySelectorAll('.card');

cards.forEach(card =>{
    card.addEventListener('click', () =>{
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active')
    })
})




