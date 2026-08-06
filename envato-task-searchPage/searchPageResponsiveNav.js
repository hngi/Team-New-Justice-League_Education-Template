const navBar = document.querySelector(".nav-bar");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation li");
const navBtns = [...document.querySelectorAll("[data-link]")];

// script for responsive navbar

// this function uses transititon to smoothly animate the nav links when the burger is clicked by the user
function animateLinks(navBtns) {
  navBtns.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    }
  })
}
// this function helps to close the nav when the user clicks on any nav link
function toggleNavFromLink(navBtns) {
  navBtns.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      // animate Links
      animateLinks(navLinks);
      burger.classList.toggle("toggle");
    })
  })
}
const navSlide = ()=>{
  burger.addEventListener("click",()=>{
    nav.classList.toggle("nav-active");
    animateLinks(navBtns);
    burger.classList.toggle("toggle");
  })
  toggleNavFromLink(navBtns);
}
navSlide();
