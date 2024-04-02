let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Check if dark mode is enabled
// If it's enabled, turn it off
// If it's disabled, turn it on

const enableDarkMode = () => {
	// 1. Add the class darkmode to the body
	document.body.classList.add("darkmode");
	// 2. update darkmode in the localStorage
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	// 1. Add the class darkmode to the body
	document.body.classList.remove("darkmode");
	// 2. update darkmode in the localStorage
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
