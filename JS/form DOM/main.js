const form = document.querySelector("#form");
const showcase = document.querySelector("#showcase");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = new FormData(form);
	for (const [name, value] of data) {
        showcase.innerHTML = name + ":" + " " + value;
	}
});
