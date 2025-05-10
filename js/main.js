// 파셜 불러오기
function loadPartials() {
  fetch('/partials/header.html').then(res => res.text()).then(html => {
    document.getElementById('header').innerHTML = html;
  });
  fetch('/partials/footer.html').then(res => res.text()).then(html => {
    document.getElementById('footer').innerHTML = html;
  });
}

// 프로젝트 카드 불러오기
function loadProjects() {
  fetch('/data/projects.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('projects');
      container.innerHTML = data.map(p => `
        <div class="project-card">
          <img src="${p.image}" alt="${p.title}" />
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <p>${p.tech.join(', ')}</p>
          <a href="${p.github}">GitHub</a>
          <a href="${p.demo}">Demo</a>
        </div>
      `).join('');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartials();
  loadProjects();
});
