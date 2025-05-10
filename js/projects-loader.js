fetch('data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('projects');
    if (!container) return;

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10';

    projects.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'project-card bg-white rounded-xl overflow-hidden';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', index * 100);

      card.innerHTML = `
        <div class="project-image-container h-60">
          <img src="${project.image}" alt="${project.title}" class="project-image w-full h-full object-cover">
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-semibold">${project.title}</h3>
            <span class="tag inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${project.tag}</span>
          </div>
          <p class="text-gray-600 text-sm mb-4">${project.desc}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${project.stack.map(tag => `<span class="tag px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">${tag}</span>`).join('')}
          </div>
          <div class="flex space-x-4 pt-3 border-t border-gray-100 text-sm">
            ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium flex items-center"><i class="fas fa-link mr-1 text-xs"></i> 상세보기</a>` : ''}
            ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="text-gray-600 hover:text-gray-900 font-medium flex items-center"><i class="fab fa-github mr-1 text-xs"></i> GitHub</a>` : ''}
            ${project.links.ppt ? `<a href="${project.links.ppt}" target="_blank" class="text-gray-600 hover:text-gray-900 font-medium flex items-center"><i class="fas fa-file-powerpoint mr-1 text-xs"></i> 발표자료</a>` : ''}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // 삽입
    container.innerHTML = `
      <section class="py-24 bg-gradient-to-b from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block" data-i18n="projects_title">프로젝트</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="projects_subtitle">데이터와 기술을 활용해 아이디어를 현실로 만든 프로젝트 경험</p>
          </div>
          ${grid.outerHTML}
        </div>
      </section>
    `;

    AOS.refresh(); // 새 요소에 AOS 적용
  });
