
// scrolling function
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// function to close menu after clicking on link
var container = document.querySelector('.container')
var linkHome = document.querySelector('nav .container .home a');
var linkAbout = document.querySelector('nav .container .about a');
var linkEvents = document.querySelector('nav .container .events a');
var linkContact = document.querySelector('nav .container .contact a');


linkHome.addEventListener("click", () => {
    container.classList.remove('active')
});
linkAbout.addEventListener("click", () => {
  container.classList.remove('active')
});
linkEvents.addEventListener("click", () => {
  container.classList.remove('active')
});
linkContact.addEventListener("click", () => {
  container.classList.remove('active')
});


