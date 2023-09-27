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