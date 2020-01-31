const hamburger_menu = document.querySelector("div:not([class])");
const hamburger_menu_dropdown = document.querySelector("main div:not([class])");

hamburger_menu.addEventListener("click", open_hamburger_menu);

function open_hamburger_menu() {
  hamburger_menu.style.display = "none";
  // hamburger_menu_dropdown.style.backgroundColor = "red";
  // hamburger_menu.addClass('open');
  // hamburger_menu.classList.add("is-active");
  hamburger_menu_dropdown.classList.toggle('active');
}


const hamburger = document.querySelector('.hamburger');
const line = document.querySelector('.line');
const navigation = document.querySelector('.navigation');


hamburger.addEventListener('click', animateHamburger);

function animateHamburger() {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
};

console.log('dit werkt');
