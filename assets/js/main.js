document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  const lang = detectBrowserLanguage();
  changeLanguage(lang);

  fetch('./data/projects.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('project-container');
      if (!container) {
        console.warn('#project-container not found in DOM');
        return;
      }
      container.innerHTML = data.map(p => `
        <div class="card p-4">
          <img src="assets/images/${p.img}" alt="${p.title}" class="rounded mb-4">
          <h3 class="text-xl font-bold mb-2">${p.title}</h3>
          <p class="text-gray-600 mb-2">${p.desc}</p>
          <a href="${p.link}" class="text-blue-600 hover:underline">GitHub</a>
        </div>
      `).join('');
    })
    .catch(error => {
      console.error('프로젝트 데이터를 불러오는 중 오류 발생:', error);
    });
});
