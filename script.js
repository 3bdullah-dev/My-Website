let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Add click event listeners to all navigation links
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Typing Text Code

const typed = new Typed(".multiple-text", {
  strings: ["Engineer", "Front-End Developer", "Back-End Developer"],
  typeSpeed: 45,
  backSpeed: 45,
  backDelay: 1200,
  loop: true,
});

// document
//   .getElementById("whatsapp-button")
//   .addEventListener("mouseover", function () {
//     this.style.transform = "scale(1.1)";
//   });

// document
//   .getElementById("whatsapp-button")
//   .addEventListener("mouseout", function () {
//     this.style.transform = "scale(1)";
//   });

let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 860
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

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

// Add scroll event listener
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
