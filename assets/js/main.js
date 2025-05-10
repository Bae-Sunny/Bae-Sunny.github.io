/* assets/js/main.js */

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

document.addEventListener('DOMContentLoaded', async () => {
  AOS.init();

  const lang = detectBrowserLanguage();
  changeLanguage(lang);

  // 파셜 로드
  await Promise.all([
    loadHTML("#header-include", "partials/header.html"),
    loadHTML("#hero-include", "partials/hero.html"),
    loadHTML("#about-include", "partials/about.html"),
    loadHTML("#projects-include", "partials/projects.html"),
    loadHTML("#skills-include", "partials/skills.html"),
    loadHTML("#contact-include", "partials/contact.html"),
    loadHTML("#footer-include", "partials/footer.html")
  ]);

  // AOS 애니메이션 다시 초기화
  AOS.refresh();

  // 프로젝트 데이터 로딩
  fetch('./data/projects.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('project-container');
      if (!container) {
        console.warn('#project-container not found in DOM');
        return;
      }
      container.innerHTML = data.map(p => `
        <div class="card p-4 bg-white rounded shadow" data-aos="fade-up">
          <img src="assets/images/${p.img}" alt="${p.title}" class="rounded mb-4">
          <h3 class="text-xl font-bold mb-2 text-gray-900">${p.title}</h3>
          <p class="text-gray-600 mb-2">${p.desc}</p>
          <a href="${p.link}" class="text-blue-600 hover:underline" target="_blank">GitHub</a>
        </div>
      `).join('');
      AOS.refresh(); // 카드 삽입 후 AOS 재적용
    })
    .catch(error => {
      console.error('프로젝트 데이터를 불러오는 중 오류 발생:', error);
    });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
