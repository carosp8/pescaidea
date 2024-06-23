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
const menuItems = document.querySelectorAll('.menu a');

abrirNav.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrarNav.addEventListener('click', () => {
    nav.classList.remove('visible');
})

// Cerrar el menú al hacer clic en un enlace de la lista
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('visible');
    });
});


// Proyecto Tarjetas //

const cards = document.querySelectorAll('.card');

cards.forEach(card =>{
    card.addEventListener('click', () =>{
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active')
    })
})

// Servicios //
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
    let stt = 0;
    const isSmallScreen = window.matchMedia("(min-width: 200px) and (max-width: 636px)").matches;
    
    // Resetea el estilo del elemento activo
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Aplica el estilo a los elementos siguientes al activo
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        if (isSmallScreen) {
            // Transformación vertical
            items[i].style.transform = `translateY(${100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateX(-1deg)`;
        } else {
            // Transformación horizontal
            items[i].style.transform = `translateX(${100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        }
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(2px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;

    // Aplica el estilo a los elementos anteriores al activo
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        if (isSmallScreen) {
            // Transformación vertical
            items[i].style.transform = `translateY(${-100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateX(1deg)`;
        } else {
            // Transformación horizontal
            items[i].style.transform = `translateX(${-100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        }
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(2px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

// Ejecuta loadShow inicialmente
loadShow();

// Añade el evento a los botones de navegación
next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

// Escucha los cambios en el tamaño de la ventana y ajusta el slider
window.addEventListener('resize', loadShow);

// Validar formulario

let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!errorEmail()){
        e.preventDefault();
    }else {
        form.submit();
    }
})

let errorEmail = () => {
    let email = document.getElementById('email').value.trim(); // Obtener el valor y eliminar espacios en blanco al inicio y final
    let parrafoEmail = document.getElementById('parrafo-email');
    let spanEmail = document.getElementById('span-email')

    if (email === '') {
        let parrafoEmail = document.getElementById('parrafo-email');
        console.log(parrafoEmail);
        spanEmail.style.color = "red"
        parrafoEmail.textContent = "¡Falta tu email! ¿Nos lo compartes?"
        return false; // Devolver false para indicar que la validación ha fallado
    } else {
        // Expresión regular para validar el formato de correo electrónico de manera más completa
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            spanEmail.style.color = "red"
            parrafoEmail.textContent = "¡Oops! Parece que ese email tiene un toque mágico... de los que no funcionan."
            return false; // Devolver false para indicar que la validación ha fallado
        }
    }

    // Si todas las validaciones pasan, se puede devolver true o realizar más acciones
    return true;
}

// Efecto secciones

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('section-visible');
            } else {
                section.classList.remove('section-visible');
            }
        });
    };

    // Aplicar el manejo del scroll al cargar la página y al hacer scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar la página para animar las secciones visibles
});

// Efecto enlaces al seleccionarlos

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.menu li a');
    const sections = document.querySelectorAll('section');

    // Añadir evento click a cada enlace para resaltar cuando se haga clic
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remover la clase 'active' de todos los enlaces
            navLinks.forEach(link => link.classList.remove('activo'));
            // Añadir la clase 'active' al enlace seleccionado
            this.classList.add('activo');
        });
    });

    const handleScroll = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Usar window.scrollY en lugar de pageYOffset
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Remover la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove('activo'));
        
        // Añadir la clase 'active' al enlace correspondiente basado en la sección visible
        if (current) {
            const activeLink = document.querySelector(`.menu li a[href="#${current}"]`);
            if (activeLink) {
                activeLink.classList.add('activo');
            }
        }
    };

    // Aplicar el manejo del scroll al cargar la página y al hacer scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar la página para animar las secciones visibles
});


