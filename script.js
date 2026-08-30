/* =========================================================
   PERSONAL WEBSITE — SCRIPT.JS
   Semua data pribadi ada di PERSONAL_CONFIG dan array-array
   di bawahnya. Ubah di situ saja, tidak perlu sentuh bagian
   fungsi yang lain.
   ========================================================= */

/* ---------- 1. KONFIGURASI UTAMA ---------- */
const PERSONAL_CONFIG = {
  name: "Hanafi",
  username: "@hanafi",
  status: "Available",
  bio: "Welcome to my personal website. Tempat aku menyimpan cerita, jadwal, karya, dan hal-hal kecil yang bikin hari terasa hidup.",
  profileImage: "images/images1.jpg",

  about: {
    name: "Hanafi",
    nickname: "ܓܓܛܓ",
    age: "16 tahun",
    hobby: "Coding, editing, gaming",
    interest: "Teknologi & desain",
    skillShort: "Web development",
    description: "Aku suka belajar hal baru, terutama yang berhubungan dengan teknologi dan kreativitas. Website ini adalah ruang pribadiku untuk berbagi aktivitas sehari-hari, progres belajar, dan beberapa hal kecil yang menurutku layak dikenang. Santai aja mampir-mampir sini.",
    descriptionExtra: "Aku percaya progres kecil yang konsisten lebih berarti daripada progres besar yang cuma sesekali. Makanya di sini juga ada jadwal harian dan catatan singkat biar aku bisa terus melacak diriku sendiri."
  },

  todayNote: "Keep learning, keep creating.",
  todayPlan: ["Belajar", "Mengerjakan project", "Editing", "Istirahat"],

  footerName: "Hanafi",

  social: {
    instagram: "https://www.instagram.com/azkastyawn_?igsi=ZjA0bDV3MG56Zng=",
    tiktok: "https://www.tiktok.com/@fii51q1?_r=1&_t=ZS-99JNzxV68zE",
    whatsapp: "0895335942467",
    discord: "https://discord.gg/XXXXXXX"
  }
};

/* ---------- 2. PLAYLIST MUSIK ---------- */
/* Ganti src & cover dengan file lokal milikmu sendiri di folder music/ & images/ */
const songs = [
  { title: "PemangilAnakInformatika", artist: "RRQ ASBUN", src: "music/LagupemangilanakIT1.mp3", cover: "images/images3.jpg" },
  { title: "YTTA", artist: "AKU?", src: "music/wiro.mp3", cover: "images/images5.jpg" }
];

/* ---------- 3. STATISTIK PRIBADI ---------- */
const stats = [
  { label: "Projects", value: 12 },
  { label: "Achievements", value: 8 },
  { label: "Skills", value: 10 },
  { label: "Years Active", value: 2 }
];

/* ---------- 4. JADWAL HARIAN ---------- */
/* format 24 jam "HH:MM" */
const schedule = [
  { time: "08:00", label: "Bangun" },
  { time: "09:00", label: "Belajar" },
  { time: "13:00", label: "Istirahat" },
  { time: "15:00", label: "Coding" },
  { time: "19:00", label: "Personal Time" },
  { time: "21:00", label: "Relax" }
];

/* ---------- ICON SET (SVG line-icon modern, bukan emoji) ---------- */
const ICONS = {
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z"/><path d="M7 5H4a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4"/><path d="M17 5h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4"/><path d="M12 13v3"/><path d="M9 20h6"/><path d="M10 17h4l.5 3h-5l.5-3Z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5c-1.5-1-3.5-1.5-6-1.5v13c2.5 0 4.5.5 6 1.5 1.5-1 3.5-1.5 6-1.5V5c-2.5 0-4.5.5-6 1.5Z"/><path d="M12 6.5V19"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z"/><circle cx="7.6" cy="10.6" r="1.1" fill="currentColor" stroke="none"/><circle cx="11" cy="7.4" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="8.6" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7.5" width="19" height="10" rx="5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="15.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="13" r="1" fill="currentColor" stroke="none"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 7 4 12 9 17"/><polyline points="15 7 20 12 15 17"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 13l9 5 9-5"/></svg>`,
  braces: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4c-1.7 0-2.5.9-2.5 2.3v2.4c0 1-.5 1.6-1.5 1.6v1.4c1 0 1.5.6 1.5 1.6v2.4C5.5 17 6.3 18 8 18"/><path d="M16 4c1.7 0 2.5.9 2.5 2.3v2.4c0 1 .5 1.6 1.5 1.6v1.4c-1 0-1.5.6-1.5 1.6v2.4c0 1.4-.8 2.3-2.5 2.3"/></svg>`,
  atom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.8"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)"/></svg>`,
  layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M3.5 9.5h17"/><path d="M9.5 9.5V20"/></svg>`,
  clapper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 10.5 5 5.5l13 3-1.3 5"/><rect x="3.5" y="10.5" width="17" height="8" rx="1.5"/><path d="m6.5 7 2 3.5M10.5 8l2 2.5"/></svg>`
};

/* ---------- 5. PRESTASI ---------- */
const achievements = [
  { title: "Website Project", year: "2026", description: "Successfully created my first personal website.", icon: ICONS.trophy, color: "primary", category: "Project" },
  { title: "Learning Milestone", year: "2025", description: "Menyelesaikan dasar-dasar HTML, CSS, dan JavaScript.", icon: ICONS.book, color: "secondary", category: "Belajar" },
  { title: "First Design", year: "2025", description: "Membuat desain UI pertama yang aku suka.", icon: ICONS.palette, color: "accent", category: "Desain" }
];

/* ---------- 6. PROJECTS ---------- */
const projects = [
  {
    thumbnailIcon: ICONS.globe,
    name: "Personal Website",
    description: "Website pribadi dengan dashboard, jadwal, dan galeri.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    demo: "#",
    source: "#"
  },
  {
    thumbnailIcon: ICONS.gamepad,
    name: "Mini Game",
    description: "Game sederhana untuk latihan logika JavaScript.",
    tech: ["JavaScript", "Canvas"],
    status: "In Progress",
    demo: "#",
    source: "#"
  },
  {
    thumbnailIcon: ICONS.camera,
    name: "Photo Journal",
    description: "Aplikasi jurnal foto harian yang sedang direncanakan.",
    tech: ["React"],
    status: "Coming Soon",
    demo: "#",
    source: "#"
  }
];

/* ---------- 7. SKILLS ---------- */
/* level: "Beginner" | "Intermediate" | "Advanced" */
const skills = [
  { name: "HTML", icon: ICONS.code, color: "primary", level: "Advanced" },
  { name: "CSS", icon: ICONS.layers, color: "secondary", level: "Advanced" },
  { name: "JavaScript", icon: ICONS.braces, color: "accent", level: "Intermediate" },
  { name: "React", icon: ICONS.atom, color: "primary", level: "Beginner" },
  { name: "UI Design", icon: ICONS.layout, color: "secondary", level: "Intermediate" },
  { name: "Editing", icon: ICONS.clapper, color: "accent", level: "Intermediate" },
  { name: "Gaming", icon: ICONS.gamepad, color: "primary", level: "Advanced" },
  { name: "Photography", icon: ICONS.camera, color: "secondary", level: "Beginner" }
];

/* ---------- 8. GALLERY ---------- */
/* Ganti path dengan foto milikmu sendiri di folder images/ */
const gallery = [
  { src: "images/images6.jpg", caption: "" },
  { src: "images/images7.jpg", caption: "" },
  { src: "images/images8.jpg", caption: "" },
  { src: "images/images9.jpg", caption: "" }
];

/* ---------- FALLBACK ASSETS (dipakai kalau file gambar belum ada) ---------- */
window.FALLBACK_AVATAR = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='100%' height='100%' fill='#6C5CE7'/><text x='50%' y='55%' font-size='72' fill='#fff' text-anchor='middle' font-family='sans-serif'>${(PERSONAL_CONFIG.name || "?").charAt(0).toUpperCase()}</text></svg>`
);
window.FALLBACK_COVER = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100%' height='100%' fill='#21B3A4'/><text x='50%' y='58%' font-size='42' fill='#fff' text-anchor='middle' font-family='sans-serif'>♪</text></svg>`
);
const FALLBACK_PHOTO = (label) => "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='#F1EFE9'/><text x='50%' y='52%' font-size='28' fill='#6B6478' text-anchor='middle' font-family='sans-serif'>${label}</text></svg>`
);

/* =========================================================
   RENDER: mengisi konten dari config ke dalam HTML
   ========================================================= */
function renderContent() {
  document.getElementById("navBrandName").textContent = PERSONAL_CONFIG.name + ".";
  document.getElementById("heroName").textContent = PERSONAL_CONFIG.name;
  document.getElementById("heroUsername").textContent = PERSONAL_CONFIG.username;
  document.getElementById("heroBio").textContent = PERSONAL_CONFIG.bio;
  document.getElementById("statusText").textContent = PERSONAL_CONFIG.status;
  document.getElementById("profileImg").src = PERSONAL_CONFIG.profileImage;

  document.getElementById("aboutName").textContent = PERSONAL_CONFIG.about.name;
  document.getElementById("aboutNick").textContent = PERSONAL_CONFIG.about.nickname;
  document.getElementById("aboutAge").textContent = PERSONAL_CONFIG.about.age;
  document.getElementById("aboutHobby").textContent = PERSONAL_CONFIG.about.hobby;
  document.getElementById("aboutInterest").textContent = PERSONAL_CONFIG.about.interest;
  document.getElementById("aboutSkillShort").textContent = PERSONAL_CONFIG.about.skillShort;
  document.getElementById("aboutDesc").textContent = PERSONAL_CONFIG.about.description;
  document.getElementById("aboutDescExtra").textContent = PERSONAL_CONFIG.about.descriptionExtra;

  document.getElementById("todayNote").textContent = `"${PERSONAL_CONFIG.todayNote}"`;
  document.getElementById("notesText").textContent = `"${PERSONAL_CONFIG.todayNote}"`;
  document.getElementById("footerText").textContent = `© 2026 ${PERSONAL_CONFIG.footerName}`;

  const planList = document.getElementById("todayPlanList");
  planList.innerHTML = PERSONAL_CONFIG.todayPlan.map(item => `<li>${item}</li>`).join("");

  /* stats */
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = stats.map(s => `
    <div class="stat-card">
      <div class="stat-card__num" data-target="${s.value}">0</div>
      <div class="stat-card__label">${s.label}</div>
    </div>`).join("");

  /* schedule timeline */
  const timeline = document.getElementById("scheduleTimeline");
  timeline.innerHTML = schedule.map(item => `
    <div class="timeline-item" data-time="${item.time}">
      <span class="timeline-item__time">${item.time}</span>
      <span class="timeline-item__dot"></span>
      <div class="timeline-item__body">
        <span class="timeline-item__label">${item.label}</span>
        <span class="badge"></span>
      </div>
    </div>`).join("");

  /* achievements */
  const achvGrid = document.getElementById("achievementsGrid");
  achvGrid.innerHTML = achievements.map(a => `
    <div class="tile reveal">
      <div class="icon-badge icon-badge--${a.color}">${a.icon}</div>
      <div class="achv__title">${a.title}</div>
      <div class="achv__year">${a.year}</div>
      <p class="achv__desc">${a.description}</p>
      <span class="achv__cat">${a.category}</span>
    </div>`).join("");

  /* projects */
  const statusClass = { "Completed": "status--completed", "In Progress": "status--progress", "Coming Soon": "status--soon" };
  const projGrid = document.getElementById("projectsGrid");
  projGrid.innerHTML = projects.map(p => `
    <div class="tile project-card reveal">
      <div class="project-card__thumb"><span class="project-card__thumb-icon">${p.thumbnailIcon}</span></div>
      <div class="project-card__body">
        <span class="project-card__title">${p.name}</span>
        <p class="project-card__desc">${p.description}</p>
        <div class="project-card__tech">${p.tech.map(t => `<span class="tech-chip">${t}</span>`).join("")}</div>
        <span class="project-card__status ${statusClass[p.status] || ""}">${p.status}</span>
        <div class="project-card__links">
          <a href="${p.demo}" target="_blank" rel="noopener">Demo</a>
          <a href="${p.source}" target="_blank" rel="noopener">Source</a>
        </div>
      </div>
    </div>`).join("");

  /* skills */
  const levelClass = { "Beginner": "level--beginner", "Intermediate": "level--intermediate", "Advanced": "level--advanced" };
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = skills.map(s => `
    <div class="tile skill-tile reveal">
      <div class="icon-badge icon-badge--${s.color} icon-badge--sm">${s.icon}</div>
      <div class="skill-tile__name">${s.name}</div>
      <span class="skill-tile__level ${levelClass[s.level] || ""}">${s.level}</span>
    </div>`).join("");

  /* gallery */
  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = gallery.map((g, i) => `
    <div class="gallery-item reveal" data-index="${i}">
      <img src="${g.src}" alt="${g.caption}" loading="lazy"
           onerror="this.onerror=null;this.src=FALLBACK_PHOTO('${g.caption}');">
      <span class="gallery-item__caption">${g.caption}</span>
    </div>`).join("");

  /* social — logo asli tiap platform (SVG), bukan emoji bawaan */
  const socialIcons = {
    instagram: `<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="19" height="19" rx="6" stroke="#fff" stroke-width="1.8"/><circle cx="12" cy="12" r="4.3" stroke="#fff" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.15" fill="#fff"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 3c.4 2.3 2 4 4.2 4.3v3.2c-1.6 0-3-.5-4.2-1.4v6.5c0 3.6-2.9 6.4-6.4 6.4-1.7 0-3.2-.6-4.3-1.7a6.4 6.4 0 0 1 7-10.1v3.3a3 3 0 1 0 2.2 2.9V3h1.5z" fill="#fff"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5Zm0 17.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A7.7 7.7 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.9.8-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.2 3.6.6.3 1 .4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" fill="#fff"/></svg>`,
    discord: `<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.3 5.7a16 16 0 0 0-4-1.2l-.2.4c1.4.3 2.1.8 2.9 1.4a13.4 13.4 0 0 0-11.3 0c.8-.6 1.6-1.1 3-1.4l-.3-.4a16 16 0 0 0-4 1.2C3 8.9 2.3 12.1 2.6 15.3a16.3 16.3 0 0 0 5 2.5l.6-1c-.9-.3-1.7-.7-2.5-1.3l.4-.3c2.1 1 4.4 1.5 6.9 1.5s4.8-.5 6.9-1.5l.4.3c-.8.6-1.6 1-2.5 1.3l.6 1a16.3 16.3 0 0 0 5-2.5c.4-3.6-.6-6.8-2.9-9.6ZM9.6 14.1c-.9 0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7 1.6.8 1.6 1.7c0 .9-.7 1.7-1.6 1.7Zm4.9 0c-.9 0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7 1.6.8 1.6 1.7c0 .9-.7 1.7-1.6 1.7Z" fill="#fff"/></svg>`
  };
  const socialData = [
    { key: "instagram", cls: "ig", name: "Instagram", user: extractHandle(PERSONAL_CONFIG.social.instagram), desc: "Foto & momen sehari-hari." },
    { key: "tiktok", cls: "tt", name: "TikTok", user: extractHandle(PERSONAL_CONFIG.social.tiktok), desc: "Video singkat & konten random." },
    { key: "whatsapp", cls: "wa", name: "WhatsApp", user: "Chat langsung", desc: "Untuk ngobrol atau kerja sama." },
    { key: "discord", cls: "dc", name: "Discord", user: "Join server", desc: "Nongkrong bareng di server aku." }
  ];
  const socialGrid = document.getElementById("socialGrid");
  socialGrid.innerHTML = socialData.map(s => `
    <a class="tile social-tile reveal" href="${PERSONAL_CONFIG.social[s.key]}" target="_blank" rel="noopener">
      <span class="social-tile__icon social-tile__icon--${s.cls}">${socialIcons[s.key]}</span>
      <span class="social-tile__name">${s.name}</span>
      <span class="social-tile__user">${s.user}</span>
      <span class="social-tile__desc">${s.desc}</span>
      <span class="social-tile__link">Kunjungi →</span>
    </a>`).join("");

  const footerSocial = document.getElementById("footerSocial");
  footerSocial.innerHTML = socialData.map(s => `<a class="footer-social__icon footer-social__icon--${s.cls}" href="${PERSONAL_CONFIG.social[s.key]}" target="_blank" rel="noopener" aria-label="${s.name}">${socialIcons[s.key]}</a>`).join("");
}

function extractHandle(url) {
  try {
    const clean = url.replace(/\/$/, "");
    return "@" + clean.split("/").pop().replace("@", "");
  } catch (e) { return ""; }
}

/* =========================================================
   NAVBAR: scroll blur + mobile hamburger
   ========================================================= */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("navMenu");
  const hamburger = document.getElementById("hamburgerBtn");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  hamburger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   THEME TOGGLE (dark / light) — tersimpan di localStorage
   ========================================================= */
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("site-theme");

  if (saved) {
    root.setAttribute("data-theme", saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("site-theme", next);
  });
}

/* =========================================================
   WELCOME TOAST
   ========================================================= */
function initToast() {
  const toast = document.getElementById("welcomeToast");
  setTimeout(() => toast.classList.add("show"), 500);
  setTimeout(() => toast.classList.remove("show"), 3800);
}

/* =========================================================
   SCROLL REVEAL (fade + slide up saat masuk viewport)
   ========================================================= */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* =========================================================
   COUNTER ANIMATION untuk Personal Stats
   ========================================================= */
function initCounters() {
  const counters = document.querySelectorAll(".stat-card__num");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => observer.observe(c));
}

/* =========================================================
   "APA HARI INI?" — jam realtime & tanggal lokal
   ========================================================= */
function initTodayClock() {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  function tick() {
    const now = new Date();
    document.getElementById("todayDay").textContent = days[now.getDay()];
    document.getElementById("todayFull").textContent = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    document.getElementById("todayClock").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    updateScheduleStatus(now);
  }
  tick();
  setInterval(tick, 1000);
}

/* =========================================================
   SCHEDULE STATUS: Upcoming / Ongoing / Done
   ========================================================= */
function updateScheduleStatus(now) {
  const items = Array.from(document.querySelectorAll(".timeline-item"));
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const times = schedule.map(s => {
    const [h, m] = s.time.split(":").map(Number);
    return h * 60 + m;
  });

  items.forEach((el, i) => {
    const startMin = times[i];
    const endMin = i < times.length - 1 ? times[i + 1] : 24 * 60;
    const badge = el.querySelector(".badge");

    el.classList.remove("is-ongoing", "is-done");
    badge.classList.remove("badge--upcoming", "badge--ongoing", "badge--done");

    if (nowMinutes >= startMin && nowMinutes < endMin) {
      el.classList.add("is-ongoing");
      badge.classList.add("badge--ongoing");
      badge.textContent = "Ongoing";
    } else if (nowMinutes >= endMin) {
      el.classList.add("is-done");
      badge.classList.add("badge--done");
      badge.textContent = "Done";
    } else {
      badge.classList.add("badge--upcoming");
      badge.textContent = "Upcoming";
    }
  });
}

/* =========================================================
   "READ MORE" untuk About Me
   ========================================================= */
function initReadMore() {
  const btn = document.getElementById("readMoreBtn");
  const extra = document.getElementById("aboutDescExtra");
  btn.addEventListener("click", () => {
    const isHidden = extra.hasAttribute("hidden");
    if (isHidden) { extra.removeAttribute("hidden"); btn.textContent = "Read Less"; }
    else { extra.setAttribute("hidden", ""); btn.textContent = "Read More"; }
  });
}

/* =========================================================
   MUSIC PLAYER
   ========================================================= */
function initMusicPlayer() {
  const audio = document.getElementById("audio");
  const player = document.getElementById("player");
  const toggleBtn = document.getElementById("playerToggle");
  const closeBtn = document.getElementById("playerClose");

  const playBtn = document.getElementById("playerPlay");
  const playIcon = document.getElementById("playerPlayIcon");
  const prevBtn = document.getElementById("playerPrev");
  const nextBtn = document.getElementById("playerNext");
  const muteBtn = document.getElementById("playerMute");
  const muteIcon = document.getElementById("playerMuteIcon");
  const volumeSlider = document.getElementById("playerVolume");
  const seekSlider = document.getElementById("playerSeek");
  const currentTimeEl = document.getElementById("playerCurrent");
  const durationEl = document.getElementById("playerDuration");
  const titleEl = document.getElementById("playerTitle");
  const artistEl = document.getElementById("playerArtist");
  const coverEl = document.getElementById("playerCover");
  const coverMiniEl = document.getElementById("playerCoverMini");

  const ICON_PLAY = '<path d="M8 5v14l11-7z" fill="currentColor"/>';
  const ICON_PAUSE = '<path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/>';
  const ICON_VOLUME = '<path d="M3 10v4h4l5 5V5L7 10H3z" fill="currentColor"/>';
  const ICON_MUTED = '<path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2 2.6-2.6-1.1-1.1L15.4 11l-2.6-2.6-1.1 1.1L14.3 12l-2.6 2.6 1.1 1.1 2.6-2.6 2.6 2.6 1.1-1.1z" fill="currentColor"/>';

  let index = 0;

  function loadSong(i, autoplay) {
    index = (i + songs.length) % songs.length;
    const song = songs[index];
    audio.src = song.src;
    titleEl.textContent = song.title;
    artistEl.textContent = song.artist;
    coverEl.src = song.cover;
    coverMiniEl.src = song.cover;
    if (autoplay) attemptPlay();
  }

  /* Coba putar otomatis begitu website dibuka. Kalau browser memblokir
     autoplay bersuara, jalan dulu dalam kondisi muted lalu otomatis
     unmute begitu ada interaksi pertama (klik/scroll/ketik) di halaman —
     jadi user tinggal buka player dan matikan kalau tidak mau dengar. */
  function attemptPlay() {
    const p = audio.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        audio.muted = true;
        audio.play().catch(() => {});
        armUnmuteOnInteraction();
      });
    }
  }

  function armUnmuteOnInteraction() {
    const unmute = () => {
      audio.muted = false;
      muteIcon.innerHTML = ICON_VOLUME;
      audio.play().catch(() => {});
      events.forEach((ev) => document.removeEventListener(ev, unmute));
    };
    const events = ["pointerdown", "keydown", "touchstart", "wheel"];
    events.forEach((ev) => document.addEventListener(ev, unmute, { once: true, passive: true }));
  }

  function formatTime(sec) {
    if (!isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function setFill(input) {
    const min = Number(input.min) || 0;
    const max = Number(input.max) || 100;
    const pct = ((input.value - min) / (max - min)) * 100;
    input.style.setProperty("--fill", `${pct}%`);
  }

  toggleBtn.addEventListener("click", () => {
    player.classList.toggle("open");
  });
  closeBtn.addEventListener("click", () => player.classList.remove("open"));

  playBtn.addEventListener("click", () => {
    if (!songs.length) return;
    if (!audio.src) loadSong(0, true);
    else if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });

  prevBtn.addEventListener("click", () => loadSong(index - 1, true));
  nextBtn.addEventListener("click", () => loadSong(index + 1, true));

  audio.addEventListener("play", () => { playIcon.innerHTML = ICON_PAUSE; player.classList.add("is-playing"); });
  audio.addEventListener("pause", () => { playIcon.innerHTML = ICON_PLAY; player.classList.remove("is-playing"); });
  audio.addEventListener("ended", () => loadSong(index + 1, true));

  audio.addEventListener("loadedmetadata", () => { durationEl.textContent = formatTime(audio.duration); });
  audio.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    if (audio.duration) {
      seekSlider.value = (audio.currentTime / audio.duration) * 100;
      setFill(seekSlider);
    }
  });
  seekSlider.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = (seekSlider.value / 100) * audio.duration;
    setFill(seekSlider);
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
    audio.muted = false;
    muteIcon.innerHTML = ICON_VOLUME;
    setFill(volumeSlider);
  });
  audio.volume = volumeSlider.value;
  setFill(volumeSlider);
  setFill(seekSlider);

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteIcon.innerHTML = audio.muted ? ICON_MUTED : ICON_VOLUME;
  });

  if (!songs.length) {
    titleEl.textContent = "Belum ada lagu";
    artistEl.textContent = "Tambahkan di array songs";
    return;
  }

  loadSong(0, true);
}

/* =========================================================
   GALLERY LIGHTBOX
   ========================================================= */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  let current = 0;

  function open(i) {
    current = i;
    const item = gallery[current];
    img.src = item.src;
    img.alt = item.caption;
    img.onerror = () => { img.onerror = null; img.src = FALLBACK_PHOTO(item.caption); };
    lightbox.classList.add("open");
  }
  function close() { lightbox.classList.remove("open"); }
  function nav(delta) { open((current + delta + gallery.length) % gallery.length); }

  document.getElementById("galleryGrid").addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) open(Number(item.dataset.index));
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => nav(-1));
  nextBtn.addEventListener("click", () => nav(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") nav(-1);
    if (e.key === "ArrowRight") nav(1);
  });
}

/* =========================================================
   VISITOR COUNTER (localStorage — per perangkat/browser saja)
   ========================================================= */
function initVisitorCounter() {
  const count = (parseInt(localStorage.getItem("visitor-count") || "0", 10)) + 1;
  localStorage.setItem("visitor-count", String(count));
  document.getElementById("visitorCount").textContent = count;
}

/* =========================================================
   SMOOTH SCROLL untuk anchor link
   ========================================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* =========================================================
   INIT SEMUA
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initNavbar();
  initTheme();
  initToast();
  initReveal();
  initCounters();
  initTodayClock();
  initReadMore();
  initMusicPlayer();
  initLightbox();
  initVisitorCounter();
  initSmoothScroll();
});
