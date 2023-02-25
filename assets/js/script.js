// Toggle Menu
var navLinks = document.getElementById("navLinks");

function hideMenu() {
  navLinks.style.right = "-200px";
}

function showMenu() {
  navLinks.style.right = "0";
}


// FAQ SHOW ANSWER
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle("show-text");
	});
});
