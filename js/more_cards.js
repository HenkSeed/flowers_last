// Открывает / скрывает дополнительные карточки цветов
// =======================================================
const hides = document.querySelectorAll('.hide');
const more = document.querySelector('.more');

more.addEventListener('click', (event) => {
	event.preventDefault();
	more.classList.toggle('more-up');
	more.classList.toggle('more-down');
	if (more.textContent === 'Все цветы') {
		console.log('more.textContent-1: ', more.textContent);
		more.textContent = 'Скрыть';
	} else {
		console.log('more.textContent-2: ', more.textContent);
		more.textContent = 'Все цветы';
	}
	hides.forEach((hide) => {
		hide.classList.toggle('goods__hidden');
	});
});
