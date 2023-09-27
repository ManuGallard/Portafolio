const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');
const enlace = document.getElementById('enlace-externo')

const datos = [
	{
		id: '1',
		titulo: 'Aikido México',
		texto: 'Aikido México es una escuela localizada en la Ciudad de México. Su aplicación móvil permite a los usuarios poder inscribirse así como conocer otros apartados de la escuela, como sus profesores o instalaciones',
		enlace: '../aikido.html',
		texto_enlace: "Ver caso práctico",
		
	},
	{
		id: '2',
		titulo: 'México Adopta',
		texto: 'México Adopta es una fundación dedicada al rescate de animales. Se pidió realizar un sitio web y móvil con el fin de permitirles a las personas interesadas, ver a los animales que han sido rescatados y poder iniciar un proceso de adopcion',
		enlace: '../adopta.html',
		texto_enlace: "Ver caso práctico",
	},
	{
		id: '3',
		titulo: 'Batabit',
		texto: 'Landing page de Batabit',
		enlace: 'https://manugallard.github.io/Bata-bit/Resposive_Design_Mobile_First/index.html',
		texto_enlace: "Ver sitio",
	},
	{
		id: '4',
		titulo: 'Blog',
		texto: 'Sitio web cuya finalidad es la de subir blogs personales, así como proyectos realizados por el usuario. Adaptado a sitios moviles, tablets y computadoras',
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