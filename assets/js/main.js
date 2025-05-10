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

  // 초기 상태 적용
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") html.classList.add("dark");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });
}

// 프로젝트 필터링
function setupProjectFilter(data) {
  const container = document.getElementById('project-container');
  const filterBox = document.getElementById('project-filters');
  if (!container || !filterBox) return;

  const tags = [...new Set(data.map(p => p.tag))];
  const buttons = ['All', ...tags];

  filterBox.innerHTML = buttons.map(tag => `
    <button class="filter-btn px-3 py-1 border rounded text-sm hover:bg-blue-100 dark:hover:bg-gray-700" data-tag="${tag}">${translateTag(tag)}</button>
  `).join(' ');

  function renderProjects(filterTag) {
    const filtered = filterTag === 'All' ? data : data.filter(p => p.tag === filterTag);
    container.innerHTML = filtered.map(p => `
      <div class="card p-4 bg-white dark:bg-gray-800 rounded shadow" data-aos="fade-up">
        <img src="assets/images/${p.img}" alt="${p.title}" class="rounded mb-4">
        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${p.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-2">${p.desc}</p>
        <a href="${p.link}" class="text-blue-600 hover:underline" target="_blank">GitHub</a>
      </div>
    `).join('');
    AOS.refresh();
  }

  renderProjects('All');

  filterBox.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-tag');
      renderProjects(selected);
      filterBox.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
      btn.classList.add('bg-blue-600', 'text-white');
    });
  });
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
