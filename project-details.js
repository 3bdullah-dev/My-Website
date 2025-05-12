// Menu Icon Functionality
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal Animation
function reveal() {
  var reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-rotate, .reveal-scale"
  );

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

// Gallery Slider
const slides = document.querySelectorAll(".gallery-slide");
const dots = document.querySelectorAll(".gallery-dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Auto slide
  setInterval(() => showSlide(currentSlide + 1), 5000);
}
