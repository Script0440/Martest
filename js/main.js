const menu = document.getElementById("#burgerMenu");
const btn = document.getElementById("#burgerButton");

const catalogInfo = document.getElementById("catalogInfo");

const catalogButtonLevel = document.getElementById("levelSelectButton");
const catalogButtonBranch = document.getElementById("branchSelectButton");

btn.addEventListener("click", openBurger);

function openBurger(e) {
  e.preventDefault();
  menu.classList.toggle("active");
}
