// js/main.js

// 구성 요소 목록
const components = ['header', 'hero', 'about', 'projects', 'skills', 'contact', 'footer'];

// 각 partial HTML을 비동기로 로드하여 지정된 ID에 삽입
components.forEach(id => {
  fetch(`partials/${id}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
});

// AOS 초기화 및 기타 공통 로직
window.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 800, once: true, offset: 100 });

  // 다국어 초기화
  if (typeof updateLanguage === 'function') {
    updateLanguage();
  }

  // 스크롤 내비 활성화 로직 (옵셔널)
  window.addEventListener('scroll', () => {
    if (typeof updateActiveNavLink === 'function') {
      updateActiveNavLink();
    }
  });
});
