
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
var linkTimeline = document.querySelector('nav .container .timeline a');
var linkSubscribe = document.querySelector('nav .container .subscribe a');


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
linkTimeline.addEventListener("click", () => {
  container.classList.remove('active')
});
linkSubscribe.addEventListener("click", () => {
  container.classList.remove('active')
});

/////////////////////////////////////////////////////////////////////////
//Implementing Modal Window
const showModalBtn = document.querySelector('.btn--show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////////////
//Discover more button functionality
const section1 = document.querySelector('#about');
const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////////////////////////////
//Implementing AboutUs Auto-Slideshow
var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
