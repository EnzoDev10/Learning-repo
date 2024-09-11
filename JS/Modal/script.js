const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

function toggleModal() {
	// if the modal is not visible, opens it and shows the blur effect
	if (modal.classList.contains('hidden')) {
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	}
}

function close() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

openBtn.addEventListener('click', toggleModal);

closeBtn.addEventListener('click', close);

overlay.addEventListener('click', close);

/* If the user presses "Esc" and the modal is open, it closes it */
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		close();
	}
});
