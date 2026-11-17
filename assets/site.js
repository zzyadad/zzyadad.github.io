"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navigationItems = [...document.querySelectorAll(".nav-links a")];

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  navLinks.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navigationItems.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});
document.addEventListener("click", event => {
  if (!event.target.closest(".navigation")) closeMenu();
});

// Update the active link from the section nearest the top of the viewport.
const sections = navigationItems.map(link => document.querySelector(link.getAttribute("href")));
let scrollScheduled = false;
function updateActiveSection() {
  const active = sections
    .filter(section => section.getBoundingClientRect().top <= 150)
    .sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top)[0] || sections[0];
  navigationItems.forEach(link => {
    if (link.getAttribute("href") === `#${active.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollScheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    window.requestAnimationFrame(updateActiveSection);
  }
}, { passive: true });
updateActiveSection();

const dialog = document.querySelector("#figure-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#figure-dialog-title");
const originalImageLink = document.querySelector("#original-image-link");
let previousFocus = null;

document.querySelectorAll("[data-lightbox]").forEach(link => {
  link.addEventListener("click", event => {
    // The original link remains usable in browsers without native dialog support.
    if (typeof dialog.showModal !== "function") return;
    event.preventDefault();
    previousFocus = link;
    dialogImage.src = link.getAttribute("href");
    dialogTitle.textContent = link.dataset.title;
    const publication = link.closest(".publication");
    dialogImage.alt = publication.querySelector(".publication-figure img").alt;
    originalImageLink.href = link.getAttribute("href");
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  if (previousFocus) previousFocus.focus({ preventScroll: true });
});

document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());

// Quiet, slowly moving points and connections behind the academic content panel.
const ambientCanvas = document.querySelector("#ambient-canvas");
const ambientContext = ambientCanvas.getContext("2d");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let ambientWidth = 0;
let ambientHeight = 0;
let ambientPoints = [];
let ambientFrame = null;
let ambientLastTime = 0;

function resizeAmbient() {
  ambientWidth = window.innerWidth;
  ambientHeight = window.innerHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
  ambientCanvas.width = Math.round(ambientWidth * ratio);
  ambientCanvas.height = Math.round(ambientHeight * ratio);
  ambientContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = Math.min(52, Math.max(20, Math.floor(ambientWidth / 27)));
  ambientPoints = Array.from({ length: count }, () => ({
    x: Math.random() * ambientWidth,
    y: Math.random() * ambientHeight,
    vx: (Math.random() - 0.5) * 0.13,
    vy: (Math.random() - 0.5) * 0.13,
    radius: 1 + Math.random() * 1.2
  }));
  drawAmbient(false);
}

function drawAmbient(move) {
  ambientContext.clearRect(0, 0, ambientWidth, ambientHeight);
  for (let i = 0; i < ambientPoints.length; i += 1) {
    const point = ambientPoints[i];
    if (move) {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < -8 || point.x > ambientWidth + 8) point.vx *= -1;
      if (point.y < -8 || point.y > ambientHeight + 8) point.vy *= -1;
    }
    ambientContext.fillStyle = "rgba(73, 117, 168, 0.25)";
    ambientContext.beginPath();
    ambientContext.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
    ambientContext.fill();
    for (let j = i + 1; j < ambientPoints.length; j += 1) {
      const next = ambientPoints[j];
      const distance = Math.hypot(point.x - next.x, point.y - next.y);
      if (distance < 180) {
        ambientContext.strokeStyle = `rgba(79, 117, 162, ${0.12 * (1 - distance / 180)})`;
        ambientContext.lineWidth = 0.7;
        ambientContext.beginPath();
        ambientContext.moveTo(point.x, point.y);
        ambientContext.lineTo(next.x, next.y);
        ambientContext.stroke();
      }
    }
  }
}

function animateAmbient(time) {
  if (time - ambientLastTime >= 32) {
    drawAmbient(true);
    ambientLastTime = time;
  }
  ambientFrame = window.requestAnimationFrame(animateAmbient);
}

function updateAmbientAnimation() {
  if (ambientFrame !== null) window.cancelAnimationFrame(ambientFrame);
  ambientFrame = null;
  if (!document.hidden && !reducedMotion.matches) ambientFrame = window.requestAnimationFrame(animateAmbient);
  else drawAmbient(false);
}

if (ambientContext) {
  resizeAmbient();
  updateAmbientAnimation();
  window.addEventListener("resize", resizeAmbient, { passive: true });
  document.addEventListener("visibilitychange", updateAmbientAnimation);
  reducedMotion.addEventListener("change", updateAmbientAnimation);
}
