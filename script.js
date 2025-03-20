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

// Typing Text Code

const typed = new Typed(".multiple-text", {
  strings: ["Engineer", "Front-End Developer", "Video Editor"],
  typeSpeed: 45,
  backSpeed: 45,
  backDelay: 1200,
  loop: true,
});

document
  .getElementById("whatsapp-button")
  .addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
  });

document
  .getElementById("whatsapp-button")
  .addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });

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
