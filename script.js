// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 0,
    anchorPlacement: 'top-bottom'
});

// Typed.js animation
new Typed(".multiple-text", {
    strings: ["مونتير فيديوهات", "Reels Editor", "Shorts Creator", "Video Editor"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Mobile menu toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-menu");
        menuIcon.classList.toggle("bx-x");
    });
}

// Close menu when clicking on a link
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        if (menuIcon) {
            menuIcon.classList.add("bx-menu");
            menuIcon.classList.remove("bx-x");
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Active section highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Parallax effect for home section
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const homeSection = document.querySelector(".home");
    const orbs = document.querySelectorAll(".gradient-orb");
    
    if (homeSection) {
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
        });
    }
});

// Form submission handler
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        // Form will submit to Formspree
        // You can add custom success message here if needed
        const submitBtn = this.querySelector(".submit-btn");
        if (submitBtn) {
            submitBtn.innerHTML = '<span>جاري الإرسال...</span><i class="bx bx-loader-alt bx-spin"></i>';
            submitBtn.disabled = true;
        }
    });
}

// Intersection Observer for video cards animation
const videoRows = document.querySelectorAll(".video-row");
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

videoRows.forEach((row, index) => {
    row.style.opacity = "0";
    row.style.transform = "translateY(30px)";
    row.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    videoObserver.observe(row);
});

// Add hover effect to video containers
videoRows.forEach(row => {
    const videoContainer = row.querySelector(".video-container");
    const iframe = videoContainer?.querySelector("iframe");
    
    if (videoContainer && iframe) {
        row.addEventListener("mouseenter", () => {
            videoContainer.style.transform = "scale(1.02)";
        });
        
        row.addEventListener("mouseleave", () => {
            videoContainer.style.transform = "scale(1)";
        });
    }
});

// Add loading animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});


