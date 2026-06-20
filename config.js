// ============ إعدادات الموقع ============
const siteConfig = {
  // المعلومات الشخصية
  profile: {
    name: "Abdullah Ahmed",
    nameAr: "عبدالله أحمد",
    tagline: "مونتير فيديوهات ريلز محترف",
    email: "your@email.com",
    phone: "+201000000000",
    whatsapp: "201000000000",
    instagram: "yourusername",
    location: "مصر",
  },

  // المشاريع - كل الأعمال في مكان واحد بدون فئات
  projects: [
    {
      id: 1,
      title: "Reel - Hook قوي مع موشن جرافيك",
      description: "Hook قوي + موشن جرافيك + ترجمات جذابة + موسيقى تريند",
      videoId: "L956zYHjPMs",
      tags: ["موشن جرافيك", "ترجمات"],
    },
    {
        id: 2,
        title: "Reel - تصحيح ألوان سينمائي",
        description: "تعديل سريع + تصحيح ألوان سينمائي + تأثيرات انتقال سلسة",
        videoId: "aY1pQbV9vnk",
      tags: ["تصحيح ألوان", "تأثيرات"],
    },
    {
      id: 3,
      title: "YouTube Short - Storytelling",
      description: "ستوري تيلينج + نصوص متحركة + إيقاع سريع",
      videoId: "2zZlqrjOe8g",
      tags: ["نصوص متحركة", "ستوري تيلينج"],
    },
    {
      id: 4,
      title: "TikTok - تريند سريع",
      description: "محتوى تريندي بإيقاع سريع ومؤثرات صوتية",
      videoId: "mLpMI7qb9Ec",
      tags: ["تريند", "مؤثرات"],
    },
    {
      id: 5,
      title: "إعلان تجاري - منتج",
      description: "فيديو إعلاني احترافي مع CTA قوي",
      videoId: "VIDEO_ID_5",
      tags: ["إعلان", "CTA"],
    },
    {
      id: 6,
      title: "Reel - موشن متقدم",
      description: "موشن جرافيك احترافي مع انتقالات سلسة",
      videoId: "VIDEO_ID_6",
      tags: ["موشن", "انتقالات"],
    },
  ],

  // الإحصائيات
  stats: {
    videos: 150,
    clients: 50,
    views: 10,
    years: 3,
  },
};

// ============ دالة تحميل المشاريع ============
function loadProjects() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.innerHTML = siteConfig.projects
    .map(
      (project) => `
        <div class="video-card">
            <div class="video-container">
                <div class="video-placeholder" data-video-id="${project.videoId}">
                    <div class="play-btn">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${project.title}</h3>
                <p class="video-desc">${project.description}</p>
                <div class="video-tags">
                    ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  // إضافة حدث النقر على الفيديو
  document.querySelectorAll(".video-placeholder").forEach((placeholder) => {
    placeholder.addEventListener("click", function () {
      const videoId = this.dataset.videoId;
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.title = "فيديو من أعمالي";
      this.parentNode.replaceChild(iframe, this);
    });
  });
}

// تحميل المشاريع عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
});
