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

// ScrollSpy 활성화
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

// 다크모드 토글 + 로컬스토리지 저장
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

// 프로젝트 상세 팝업 모달
function showProjectModal(project) {
  const modal = document.createElement("div");
  modal.className = "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50";
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

// 프로젝트 필터링 + 검색 + 팝업
function setupProjectFilter(data) {
  const container = document.getElementById('project-container');
  const filterBox = document.getElementById('project-filters');
  const searchInput = document.getElementById('project-search');
  if (!container || !filterBox) return;

  const tags = [...new Set(data.map(p => p.tag))];
  const buttons = ['All', ...tags];

  filterBox.innerHTML = buttons.map(tag => `
    <button class="filter-btn px-3 py-1 border rounded text-sm hover:bg-blue-100 dark:hover:bg-gray-700" data-tag="${tag}">${translateTag(tag)}</button>
  `).join(' ');

  function renderProjects(filterTag, keyword = "") {
    const filtered = data.filter(p => {
      const matchTag = filterTag === 'All' || p.tag === filterTag;
      const matchKeyword = p.title.toLowerCase().includes(keyword.toLowerCase()) || p.desc.toLowerCase().includes(keyword.toLowerCase());
      return matchTag && matchKeyword;
    });

    container.innerHTML = filtered.map(p => `
      <div class="card p-4 bg-white dark:bg-gray-800 rounded shadow cursor-pointer" data-aos="fade-up">
        <img src="assets/images/${p.img}" alt="${p.title}" class="rounded mb-4">
        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${p.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-2">${p.desc}</p>
        <a href="${p.link}" class="text-blue-600 hover:underline" target="_blank">GitHub</a>
      </div>
    `).join('');

    container.querySelectorAll('.card').forEach((card, idx) => {
      card.addEventListener('click', () => showProjectModal(filtered[idx]));
    });

    AOS.refresh();
  }

  let currentTag = 'All';
  renderProjects(currentTag);

  filterBox.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTag = btn.getAttribute('data-tag');
      renderProjects(currentTag, searchInput?.value || "");
      filterBox.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
      btn.classList.add('bg-blue-600', 'text-white');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProjects(currentTag, searchInput.value);
    });
  }
}

// 태그 다국어 번역 처리
function translateTag(tag) {
  const lang = detectBrowserLanguage();
  const dict = {
    ko: {
      All: '전체',
      "데이터 플랫폼": '데이터 플랫폼',
      "AI/ML 웹": 'AI/ML 웹',
      "AI 비전 웹": 'AI 비전 웹',
      "풀스택 AI": '풀스택 AI',
      "NLP AI": 'NLP AI',
      "컴퓨터 비전 AI": '컴퓨터 비전 AI'
    },
    en: {
      All: 'All',
      "데이터 플랫폼": 'Data Platform',
      "AI/ML 웹": 'AI/ML Web',
      "AI 비전 웹": 'AI Vision Web',
      "풀스택 AI": 'Fullstack AI',
      "NLP AI": 'NLP AI',
      "컴퓨터 비전 AI": 'Computer Vision AI'
    }
  };
  return dict[lang]?.[tag] || tag;
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
