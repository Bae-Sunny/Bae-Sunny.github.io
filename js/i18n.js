// js/i18n.js

let currentLanguage = 'ko';

function detectBrowserLanguage() {
  const browserLang = navigator.language.split('-')[0];
  return translations[browserLang] ? browserLang : 'ko';
}

function getLanguageFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  return langParam && translations[langParam] ? langParam : null;
}

function changeLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    updateLanguage();
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
    closeAllDropdowns();
  }
}

function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[currentLanguage]?.[key] || translations['ko'][key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', translations[currentLanguage]?.[key] || translations['ko'][key]);
  });

  const currentLangDisplay = document.getElementById('current-language');
  if (currentLangDisplay) {
    currentLangDisplay.textContent = translations[currentLanguage]?.['language_name'] || translations['ko']['language_name'];
  }

  document.documentElement.setAttribute('lang', currentLanguage);
  if (typeof updateActiveNavLink === 'function') updateActiveNavLink();
}

function closeAllDropdowns() {
  document.querySelectorAll('.language-dropdown-content.open').forEach(dropdown => {
    dropdown.classList.remove('open');
  });
}

// 초기 설정
const urlLang = getLanguageFromURL();
const browserLang = detectBrowserLanguage();
currentLanguage = urlLang || browserLang;
