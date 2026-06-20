// ============ تهيئة AOS ============
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }
});

// ============ SCROLL PROGRESS ============
const scrollProgress = document.getElementById("scroll-progress");
window.addEventListener(
  "scroll",
  () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = scrollPercent + "%";
  },
  { passive: true },
);

// ============ HEADER SCROLL ============
const header = document.getElementById("header");
window.addEventListener(
  "scroll",
  () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  },
  { passive: true },
);

// ============ MOBILE MENU ============
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("active");
    const isExpanded = navbar.classList.contains("active");
    menuIcon.setAttribute("aria-expanded", isExpanded);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuIcon.classList.remove("active");
      menuIcon.setAttribute("aria-expanded", "false");
    });
  });
}

// ============ ACTIVE NAV LINK ============
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener(
  "scroll",
  () => {
    let current = "";
    const scrollPos = window.pageYOffset + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  },
  { passive: true },
);

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPos = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  });
});

// ============ TYPED.JS ============
document.addEventListener("DOMContentLoaded", () => {
  if (typeof Typed !== "undefined") {
    new Typed(".multiple-text", {
      strings: [
        "مونتير فيديوهات ريلز",
        "Reels Editor",
        "Shorts Creator",
        "TikTok Specialist",
        "Motion Designer",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
  }
});

// ============ COUNTER ANIMATION ============
const counters = document.querySelectorAll(".stat-number");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => counterObserver.observe(counter));

// ============ BACK TO TOP ============
const backToTop = document.getElementById("back-to-top");

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  },
  { passive: true },
);

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============ FORM SUBMISSION ============
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const submitBtn = this.querySelector(".submit-btn");
    const originalHTML = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<span>جاري الإرسال...</span> <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }, 3000);
  });
}

// ============ PARALLAX EFFECT ============
const orbs = document.querySelectorAll(".gradient-orb");
window.addEventListener(
  "scroll",
  () => {
    const scrolled = window.pageYOffset;
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.15;
      orb.style.transform = `translate(${scrolled * speed * 0.3}px, ${scrolled * speed * 0.5}px)`;
    });
  },
  { passive: true },
);

// ============ PERFORMANCE: LAZY LOAD IMAGES ============
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ============ CONSOLE EASTER EGG ============
console.log(
  "%c🎬 Abdullah Ahmed - Video Editor",
  "font-size: 24px; font-weight: bold; color: #38bdf8;",
);
console.log(
  "%cLooking for a video editor? Let's work together!",
  "font-size: 14px; color: #8b5cf6;",
);
