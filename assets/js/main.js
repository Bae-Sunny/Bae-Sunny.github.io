// HTML 파셜을 fetch하여 해당 위치에 삽입하는 함수
async function loadHTML(selector, filePath) {
  const res = await fetch(filePath);
  if (!res.ok) {
    console.error(`파일 로드 실패: ${filePath}`);
    return;
  }
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}

function activateScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-blue-600", "font-bold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-blue-600", "font-bold");
      }
    });
  });
}

function setupDarkMode() {
  const toggle = document.querySelector("#dark-mode-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") html.classList.add("dark");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });
}

function showProjectModal(project) {
  const modal = document.createElement("div");
  modal.className = "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur";
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-lg w-full">
      <button class="float-right text-gray-400 hover:text-red-500 text-lg" onclick="this.closest('div').parentNode.remove()">&times;</button>
      <h2 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">${project.title}</h2>
      <img src="assets/images/${project.img}" alt="${project.title}" class="rounded mb-4">
      <p class="text-gray-700 dark:text-gray-300 mb-4">${project.desc}</p>
      <a href="${project.link}" class="text-blue-600 hover:underline" target="_blank">GitHub →</a>
    </div>
  `;
  document.body.appendChild(modal);
}

// 공유 링크 복사
function setupSectionSharing() {
  document.querySelectorAll("section[id]").forEach(section => {
    section.addEventListener("contextmenu", e => {
      e.preventDefault();
      const url = `${location.origin}${location.pathname}#${section.id}`;
      navigator.clipboard.writeText(url).then(() => alert(`📎 섹션 링크 복사됨: ${url}`));
    });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  AOS.init();

  const lang = detectBrowserLanguage();
  changeLanguage(lang);

  await Promise.all([
    loadHTML("#header-include", "partials/header.html"),
    loadHTML("#hero-include", "partials/hero.html"),
    loadHTML("#about-include", "partials/about.html"),
    loadHTML("#projects-include", "partials/projects.html"),
    loadHTML("#skills-include", "partials/skills.html"),
    loadHTML("#contact-include", "partials/contact.html"),
    loadHTML("#footer-include", "partials/footer.html")
  ]);

  AOS.refresh();
  setupDarkMode();
  activateScrollSpy();
  setupSectionSharing();

  fetch('./data/projects.json')
    .then(res => res.json())
    .then(data => {
      setupProjectFilter(data);
    })
    .catch(error => {
      console.error('프로젝트 데이터를 불러오는 중 오류 발생:', error);
    });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
