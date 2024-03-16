const menu = document.getElementById("#burgerMenu");
const btn = document.getElementById("#burgerButton");
const links = document.querySelectorAll(".nav-link");
const catalogInfo = document.getElementById("catalogInfo");

const catalogButtonLevel = document.getElementById("levelSelectButton");
const catalogButtonBranch = document.getElementById("branchSelectButton");

btn.addEventListener("click", openBurger);

function openBurger(e) {
  e.preventDefault();
  menu.classList.toggle("active");
}

links.forEach((item) =>
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  })
);
