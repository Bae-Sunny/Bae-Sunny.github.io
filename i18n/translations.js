const translations = {
  ko: {
    hero_name: '배선화',
    hero_title: '데이터로 문제를 해결하고 기술로 가치를 만드는 개발자',
    nav_about: '소개',
    nav_projects: '프로젝트',
    nav_skills: '기술',
    nav_contact: '연락처',
    about_title: '성장 스토리',
    about_subtitle: '데이터의 가능성을 발견하고, 직접 솔루션을 만드는 개발자로 성장한 이야기',
    projects_title: '프로젝트',
    projects_subtitle: '기술과 데이터를 활용한 실전 프로젝트 경험',
    skills_title: '기술 스택',
    skills_subtitle: '문제 해결을 위한 기술 역량',
    contact_title: '함께 성장하고 싶습니다',
    contact_subtitle: '데이터와 기술로 함께 가치를 만들 기회를 기다립니다.',
    footer_copyright: '© 2025 배선화 포트폴리오. All rights reserved.'
  },
  en: {
    hero_name: 'Bae Sunny',
    hero_title: 'Developer Solving Problems with Data & Creating Value with Technology',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    about_title: 'My Growth Story',
    about_subtitle: 'From data discovery to solution-building developer',
    projects_title: 'Projects',
    projects_subtitle: 'Practical projects using data and technology',
    skills_title: 'Skills',
    skills_subtitle: 'Technical skills for solving problems',
    contact_title: 'Let’s Grow Together',
    contact_subtitle: 'Looking for a chance to create value with data and tech',
    footer_copyright: '© 2025 Bae Sunny Portfolio. All rights reserved.'
  }
};

function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key] || translations.ko[key];
  });
}

function detectBrowserLanguage() {
  const lang = navigator.language.split('-')[0];
  return translations[lang] ? lang : 'ko';
}
