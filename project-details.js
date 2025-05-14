// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("fa-times");
    });

    // Hide menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
        menuIcon.classList.remove("fa-times");
      }
    });
  }

  // Header Scroll Effect
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 100);
    });
  }

  // Gallery Slider
  const slides = document.querySelectorAll(".gallery-slide");
  const dots = document.querySelectorAll(".gallery-dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const galleryContainer = document.querySelector(".gallery-slider");

  if (slides.length === 0 || !galleryContainer) return;

  let currentSlide = 0;
  let slideInterval = null;

  // Function to show specific slide
  function showSlide(n) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Calculate the correct slide index
    currentSlide = ((n % slides.length) + slides.length) % slides.length;

    // Add active class to current slide and dot
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Function to move to next slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Function to move to previous slide
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Function to start auto-sliding
  function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Function to stop auto-sliding
  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      prevSlide();
      // Restart the interval to prevent quick transitions
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      nextSlide();
      // Restart the interval to prevent quick transitions
      startAutoSlide();
    });
  }

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      showSlide(index);
      // Restart the interval when manually changing slides
      startAutoSlide();
    });
  });

  // Add hover pause functionality
  galleryContainer.addEventListener("mouseenter", stopAutoSlide);
  galleryContainer.addEventListener("mouseleave", startAutoSlide);

  // Add touch support for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  galleryContainer.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  galleryContainer.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      startAutoSlide();
    }
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      startAutoSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      startAutoSlide();
    }
  });

  // Initialize the slider
  showSlide(0);
  startAutoSlide();
});
