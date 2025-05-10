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
