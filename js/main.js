const menu = document.getElementById("#burgerMenu");
const btn = document.getElementById("#burgerButton");
const links = document.querySelectorAll(".nav-link");
const catalogInfo = document.getElementById("catalogInfo");
const header = document.getElementById("header");
const catalogButtonLevel = document.getElementById("levelSelectButton");
const catalogButtonBranch = document.getElementById("branchSelectButton");

btn.addEventListener("click", openBurger);

function openBurger(e) {
  e.preventDefault();
  menu.classList.toggle("active");
  header.style.borderBottom = "1px solid #fff";
}
window.addEventListener("scroll", () => {
  header.style.borderBottom = "none";
  if (window.scrollY >= 100 || menu.classList.contains("active")) {
    header.style.borderBottom = "1px solid #fff";
    return;
  }
});

links.forEach((item) =>
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  })
);
