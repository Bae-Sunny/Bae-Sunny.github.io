document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  const lang = detectBrowserLanguage();
  changeLanguage(lang);

  fetch('./data/projects.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('project-container');
      container.innerHTML = data.map(p => `
        <div class="bg-white rounded shadow p-4">
          <img src="assets/images/${p.img}" alt="${p.title}" class="rounded mb-4">
          <h3 class="text-xl font-bold mb-2">${p.title}</h3>
          <p class="text-gray-600 mb-2">${p.desc}</p>
          <a href="${p.link}" class="text-blue-600 hover:underline">GitHub</a>
        </div>
      `).join('');
    });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
