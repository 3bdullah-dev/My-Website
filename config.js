// ============ إعدادات الموقع ============
const siteConfig = {
  profile: {
    name: "Abdullah Ahmed",
    nameAr: "عبدالله أحمد",
    tagline: "مونتير فيديوهات ريلز محترف",
    email: "your@email.com",
    whatsapp: "201000000000",
    instagram: "yourusername",
  },
  projects: [
    {
      id: 1,
      title: "Reel — Hook قوي مع موشن جرافيك",
      description: "Hook قوي + موشن جرافيك + ترجمات جذابة + موسيقى تريند",
      videoId: "L956zYHjPMs",
      thumbnail: "https://img.youtube.com/vi/L956zYHjPMs/maxresdefault.jpg",
      tags: ["موشن جرافيك", "ترجمات"],
    },
    {
      id: 2,
      title: "Reel — تصحيح ألوان سينمائي",
      description: "تعديل سريع + تصحيح ألوان سينمائي + تأثيرات انتقال سلسة",
      videoId: "aY1pQbV9vnk",
      thumbnail: "https://img.youtube.com/vi/aY1pQbV9vnk/maxresdefault.jpg",
      tags: ["تصحيح ألوان", "تأثيرات"],
    },
    {
      id: 3,
      title: "YouTube Short — Storytelling",
      description: "ستوري تيلينج + نصوص متحركة + إيقاع سريع",
      videoId: "2zZlqrjOe8g",
      thumbnail: "https://img.youtube.com/vi/2zZlqrjOe8g/maxresdefault.jpg",
      tags: ["نصوص متحركة", "ستوري تيلينج"],
    },
    {
      id: 4,
      title: "TikTok — تريند سريع",
      description: "محتوى تريندي بإيقاع سريع ومؤثرات صوتية",
      videoId: "mLpMI7qb9Ec",
      thumbnail: "https://img.youtube.com/vi/mLpMI7qb9Ec/maxresdefault.jpg",
      tags: ["تريند", "مؤثرات"],
    },
  ],
};

// ============ تحميل المشاريع مع Skeleton + Video Lightbox ============
function loadProjects() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const validProjects = siteConfig.projects.filter(
    (p) => p.videoId && !p.videoId.startsWith("VIDEO_ID"),
  );

  // بناء الكروت الحقيقية
  const cardsHTML = validProjects
    .map(
      (project) => `
      <div class="video-card real-card" data-aos="fade-up" data-card-id="${project.id}">
        <div class="video-container">
          <div class="video-placeholder"
               data-video-id="${project.videoId}"
               data-project-id="${project.id}"
               role="button" tabindex="0"
               aria-label="تشغيل ${project.title}">
            ${
              project.thumbnail
                ? `<img src="${project.thumbnail}" alt="${project.title}" class="video-thumb" loading="lazy" onerror="this.style.display='none'" />`
                : ``
            }
            <div class="play-btn" aria-hidden="true"><i class="fas fa-play"></i></div>
            <div class="video-overlay" aria-hidden="true"></div>
          </div>
        </div>
        <div class="video-info">
          <h3 class="video-title">${project.title}</h3>
          <p class="video-desc">${project.description}</p>
          <div class="video-tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>`,
    )
    .join("");

  // استبدال الـ Skeleton بالكروت الحقيقية بعد delay قصير لإظهار الـ skeleton أولاً
  setTimeout(() => {
    grid.innerHTML = cardsHTML;
    // إعادة تهيئة AOS للعناصر الجديدة
    if (typeof AOS !== "undefined") AOS.refresh();
    bindAllPlaceholders();
  }, 600);
}

// ============ Video Lightbox Handlers ============
function openVideoLightbox(videoId) {
  const lightbox = document.getElementById("video-lightbox");
  const frame = document.getElementById("video-lightbox-frame");
  if (!lightbox || !frame) return;

  frame.innerHTML = `<iframe
    src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    title="فيديو من أعمالي"></iframe>`;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVideoLightbox() {
  const lightbox = document.getElementById("video-lightbox");
  const frame = document.getElementById("video-lightbox-frame");
  if (!lightbox) return;

  lightbox.classList.remove("active");
  document.body.style.overflow = "";

  // إيقاف الفيديو بعد الـ animation
  setTimeout(() => {
    if (frame) frame.innerHTML = "";
  }, 300);
}

// ============ ربط الـ placeholders ============
function bindAllPlaceholders() {
  document.querySelectorAll(".video-placeholder").forEach((placeholder) => {
    const handler = function () {
      const videoId = this.dataset.videoId;
      if (videoId) openVideoLightbox(videoId);
    };
    placeholder.addEventListener("click", handler);
    placeholder.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handler.call(this);
      }
    });
  });
}

// ============ Lightbox Close Handlers ============
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();

  const videoClose = document.getElementById("video-close");
  const videoLightbox = document.getElementById("video-lightbox");

  if (videoClose) {
    videoClose.addEventListener("click", closeVideoLightbox);
  }
  if (videoLightbox) {
    videoLightbox.addEventListener("click", (e) => {
      if (e.target === videoLightbox) closeVideoLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      videoLightbox &&
      videoLightbox.classList.contains("active")
    ) {
      closeVideoLightbox();
    }
  });
});
