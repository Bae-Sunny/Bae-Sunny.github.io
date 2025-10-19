// assets/js/main.js

// Dynamically load HTML partials
async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    if (file) {
      try {
        const res = await fetch(file);
        if (res.ok) {
          el.innerHTML = await res.text();
        } else {
          console.error(`Failed to load ${file}: ${res.status}`);
        }
      } catch (err) {
        console.error(`Error fetching ${file}:`, err);
      }
    }
  }
  if (typeof AOS !== 'undefined') AOS.init();
  if (typeof updateLanguage === 'function') updateLanguage();
  if (typeof updateActiveNavLink === 'function') updateActiveNavLink();
}

document.addEventListener("DOMContentLoaded", includeHTML);

// Mobile menu toggle
window.addEventListener("click", function (e) {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && toggle.contains(e.target)) {
    menu.classList.toggle("hidden");
    toggle.querySelector(".hamburger-menu").classList.toggle("active");
  } else if (!menu.contains(e.target)) {
    menu.classList.add("hidden");
    toggle.querySelector(".hamburger-menu").classList.remove("active");
  }
});

// Language dropdown toggle
window.addEventListener("click", function (e) {
  const dropdowns = document.querySelectorAll(".language-dropdown");
  dropdowns.forEach(drop => {
    const button = drop.querySelector(".language-dropdown-button");
    const content = drop.querySelector(".language-dropdown-content");
    if (button.contains(e.target)) {
      content.classList.toggle("open");
    } else if (!content.contains(e.target)) {
      content.classList.remove("open");
    }
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// ===== Active Menu Link on Scroll =====
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
      if (navLink) navLink.classList.add("active");
    }
  });
}
window.addEventListener("scroll", updateActiveNavLink);

// ===== Project Card Hover Glow =====
document.querySelectorAll(".grid-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";
    card.style.boxShadow = "0 0 20px rgba(255,128,160,0.35), 0 10px 30px rgba(0,0,0,0.4)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
  });
});



