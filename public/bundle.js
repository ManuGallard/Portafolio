'use strict';

const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const ventanaCorreo = document.getElementById('ventana-correo');

botonesEmail.forEach((boton) =>
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		ventanaCorreo.classList.add('ventana--active');
	})
);

// Eventlistener para cerrar ventana con el boton.
ventanaCorreo.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventanaCorreo.classList.remove('ventana--active');
});

// Eventlistener para cerrar ventana con el overlay.
ventanaCorreo.querySelector('.ventana__overlay').addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.matches('.ventana__overlay')) {
		ventanaCorreo.classList.remove('ventana--active');
	}
});

const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver(
	(entries) => {
		// Nos aseguramos de que haya pasado al menos medio segundo.
		if (entries[0].isIntersecting) {
			const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');
			trabajos.forEach((trabajo, index) => {
				setTimeout(() => {
					trabajo.classList.add('trabajos__trabajo--visible');
				}, index * 200);
			});
		}
	},
	{
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.25,
	}
);

window.addEventListener('load', observer.observe(galeria));

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');
const enlace = document.getElementById('enlace-externo');

const datos = [
	{
		id: '1',
		titulo: 'Aikido México',
		texto: 'Aikido México es una escuela localizada en la Ciudad de México. Para este proyecto se pidió realizar una aplicación móvil la cual le permita a los usuarios poder inscribirse así como conocer otros apartados de la escuela, como sus profesores o historia',
		enlace: 'https://manugallard.github.io/Portafolio/aikido.html',
		texto_enlace: "Ver caso práctico",
		
	},
	{
		id: '2',
		titulo: 'México Adopta',
		texto: 'México Adopta es una fundación dedicada al rescate de animales. En este proyecto se pidió realizar un sitio web y móvil con el fin de permitirles a las personas interesadas, ver a los animales que han sido rescatados y poder iniciar un proceso de adopción',
		enlace: 'https://manugallard.github.io/Portafolio/adopta.html',
		texto_enlace: "Ver caso práctico",
	},
	{
		id: '3',
		titulo: 'Batabit',
		texto: 'Landing page de Batabit, adaptada a sitios móviles, tablets y computadoras',
		enlace: 'https://manugallard.github.io/Bata-bit/Resposive_Design_Mobile_First/index.html',
		texto_enlace: "Ver sitio",
	},
	{
		id: '4',
		titulo: 'Blog',
		texto: 'Sitio web cuya finalidad es la de subir blogs personales, así como proyectos realizados por el usuario. Adaptado a sitios móviles, tablets y computadoras',
		enlace: 'https://manugallard.github.io/Blog/index.html',
		texto_enlace: "Ver sitio",
	},
	{
		id: '5',
		titulo: 'Café Europa',
		texto: 'Sitio web de una cafetería llamada "Café Europa", realizado con HTML, CSS y JS',
		enlace: 'https://manugallard.github.io/Restaurante/index.html',
		texto_enlace: "Ver sitio",
	},
	{
		id: '6',
		titulo: 'Trabajo #6',
		texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
	},
];

trabajos.addEventListener('click', (e) => {
	e.preventDefault();
	// Comprobamos que el usuario de click en un trabajo
	const trabajoClickeado = e.target.closest('.trabajos__trabajo');

	if (trabajoClickeado) {
		// Obtenemos el id del trabajo clickeado
		const id = trabajoClickeado.dataset.id;

		// Extraemos la info del trabajo
		const trabajo = datos.filter((trabajo) => {
			if (trabajo.id === id) {
				return trabajo;
			}
		});

		ventanaTrabajos.querySelector('.ventana__titulo').innerText = trabajo[0].titulo;
		ventanaTrabajos.querySelector('.ventana__parrafo').innerText = trabajo[0].texto;
		ventanaTrabajos.querySelector('.ventana__enlace').innerText = trabajo[0].texto_enlace;
		ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;
		enlace.setAttribute('href', trabajo[0].enlace);
		ventanaTrabajos.classList.add('ventana--active');
	}	
});

// Eventlistener para cerrar ventana con el boton.
ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventanaTrabajos.classList.remove('ventana--active');
});

const nav = document.querySelector('#header_menu');
const abrir = document.querySelector('#abrir_menu');
const cerrar = document.querySelector('#cerrar_menu');

window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
    nav.classList.add("header__position");
    if (window.scrollY==0) {
        nav.classList.remove("header__position");
    }
});

abrir.addEventListener("click", () => {
    nav.classList.add("header__visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("header__visible");
});

/**
 * Funcion que se encarga de animar nuestros textos.
 * @param {DOMElement} texto Elemento del dom que queremos animar.
 */

const animarTexto = (texto, delay = 0) => {
	const numeroDeLetras = texto.dataset.texto.length;

	// Activamos el cursor cuando comienza la animacion.
	const cursor = texto.querySelector('.hero__cursor');
	cursor.classList.add('hero__cursor--visible');

	// Por cada letra, la agregamos al DOM con 100ms de separacion.
	for (let i = 0; i < numeroDeLetras; i++) {
		setTimeout(() => {
			const letra = document.createElement('span');
			letra.append(texto.dataset.texto[i]);
			texto.append(letra);
		}, 100 * i);
	}

	// Cambiamos la clase del cursor cuando termine la animacion de letras.
	setTimeout(() => {
		// Obtenemos los cursores.
		const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];
		// Obtenemos el index del cursor actual.
		const indexCursorActual = cursores.indexOf(cursor);

		// Comprobamos que el cursor no sea el ultimo.
		if (indexCursorActual < cursores.length - 1) {
			// Si no es el ultimo, ocultamos el cursor.
			cursor.classList.remove('hero__cursor--visible');
		} else {
			// Si es el ultimo, le ponemos la clase de active.
			cursor.classList.add('hero__cursor--active');
		}
	}, 100 * numeroDeLetras);

	// Retornamos una promesa para saber cuando la animacion acabo.
	return new Promise((resolve) => setTimeout(resolve, 100 * numeroDeLetras));
};

// Ejecutamos las animaciones cuando termina de cargar.
window.addEventListener('load', async () => {
	await animarTexto(document.querySelector('.hero__titulo--uno'));
	await animarTexto(document.querySelector('.hero__titulo--dos'));

	document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
	document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
	document.querySelectorAll('.hero__burbuja')[2].classList.add('hero__burbuja--active-3');
	document.querySelector('.hero__foto').classList.add('hero__foto--active');
});
//# sourceMappingURL=bundle.js.map
