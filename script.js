/* =============================================
   배선화 Portfolio - Dashboard JavaScript
   ============================================= */

// =============================================
// Data
// =============================================

const TRANSLATIONS = {
  ko: {
    // Navigation
    'nav-about': '소개',
    'nav-timeline': '경력',
    'nav-projects': '프로젝트',
    'nav-skills': '스킬',
    'nav-contact': '연락처',
    
    // Header
    'header-title': '배선화',
    'header-badge': 'FULL-STACK',
    'header-stat-exp': '경력',
    'header-stat-projects': '프로젝트',
    'header-stat-skills': '스킬',
    
    // Tabs
    'tab-overview': '전체 보기',
    'tab-timeline': '경력',
    'tab-projects': '프로젝트',
    'tab-skills': '스킬',
    
    // Hero Card
    'hero-title': '사용자의 문제를<br><span class="highlight">기술로 해결</span>하는<br>풀스택 개발자',
    'hero-desc': '실사용 경험을 바탕으로 제품을 개선하고, 데이터 분석과 자동화로 효율을 높입니다.',
    'hero-stat-years': '년',
    'hero-stat-exp': '경력',
    'hero-stat-projects': '프로젝트',
    'hero-stat-dev': '개발자',
    
    // Timeline
    'timeline-current': '현재',
    'timeline-section': '경력 타임라인',
    
    // Projects Section
    'projects-section': '프로젝트',
    'projects-count': '8개 프로젝트',
    
    // Skills Section  
    'skills-section': '기술 스택',
    
    // Contact
    'contact-youtube': 'AI 영상 제작',
    
    // Progress Card
    'progress-label': '문서 & 기술',
    'progress-title': 'Tech Stack',
    'progress-sub': 'Frontend · Backend · AI/ML · DevOps',
    
    // Text Card
    'text-title': 'AI Platform Content Developer',
    'text-desc': '교육 및 기술 문서 작성에 집중하며, Vue.js 기술을 활용한 프로젝트 협업 개발에 참여. 코드 품질과 팀 협업을 위한 문서화 실천.',
  },
  en: {
    'nav-about': 'About',
    'nav-timeline': 'Timeline',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-contact': 'Contact',
    
    'header-title': 'Bae Sunhwa',
    'header-badge': 'FULL-STACK',
    'header-stat-exp': 'Experience',
    'header-stat-projects': 'Projects',
    'header-stat-skills': 'Skills',
    
    'tab-overview': 'Overview',
    'tab-timeline': 'Timeline',
    'tab-projects': 'Projects',
    'tab-skills': 'Skills',
    
    'hero-title': 'Solving User Problems<br><span class="highlight">with Technology</span><br>Full-stack Developer',
    'hero-desc': 'Improving products based on real-world experience, enhancing efficiency through data analysis and automation.',
    'hero-stat-years': ' Yrs',
    'hero-stat-exp': 'Experience',
    'hero-stat-projects': 'Projects',
    'hero-stat-dev': 'Developer',
    
    'timeline-current': 'Present',
    'timeline-section': 'Career Timeline',
    
    'projects-section': 'Projects',
    'projects-count': '8 Projects',
    
    'skills-section': 'Tech Stack',
    
    'contact-youtube': 'AI Video Creation',
    
    'progress-label': 'Docs & Tech',
    'progress-title': 'Tech Stack',
    'progress-sub': 'Frontend · Backend · AI/ML · DevOps',
    
    'text-title': 'AI Platform Content Developer',
    'text-desc': 'Focused on educational and technical documentation, participating in collaborative development projects using Vue.js technology.',
  },
  ja: {
    'nav-about': '紹介',
    'nav-timeline': '経歴',
    'nav-projects': 'プロジェクト',
    'nav-skills': 'スキル',
    'nav-contact': '連絡先',
    
    'header-title': 'ペ・ソンファ',
    'header-badge': 'FULL-STACK',
    'header-stat-exp': '経験',
    'header-stat-projects': 'プロジェクト',
    'header-stat-skills': 'スキル',
    
    'tab-overview': '全体',
    'tab-timeline': '経歴',
    'tab-projects': 'プロジェクト',
    'tab-skills': 'スキル',
    
    'hero-title': 'ユーザーの問題を<br><span class="highlight">技術で解決する</span><br>フルスタック開発者',
    'hero-desc': '実使用経験をもとに製品を改善し、データ分析と自動化で効率を高めます。',
    'hero-stat-years': '年',
    'hero-stat-exp': '経験',
    'hero-stat-projects': 'プロジェクト',
    'hero-stat-dev': '開発者',
    
    'timeline-current': '現在',
    'timeline-section': 'キャリアタイムライン',
    
    'projects-section': 'プロジェクト',
    'projects-count': '8プロジェクト',
    
    'skills-section': '技術スタック',
    
    'contact-youtube': 'AI動画制作',
    
    'progress-label': 'ドキュメント＆技術',
    'progress-title': 'Tech Stack',
    'progress-sub': 'Frontend · Backend · AI/ML · DevOps',
    
    'text-title': 'AIプラットフォームコンテンツ開発者',
    'text-desc': '教育・技術文書作成に集中し、Vue.js技術を活用したプロジェクト協業開発に参加。',
  }
};

const TIMELINE = [
  {
    date: { ko: '2025.11 ~ 현재', en: '2025.11 ~ Present', ja: '2025.11 ~ 現在' },
    title: { 
      ko: '자사 플랫폼 개발자 (Full-stack)', 
      en: 'In-house Platform Developer (Full-stack)', 
      ja: '自社プラットフォーム開発者 (Full-stack)' 
    },
    desc: { 
      ko: '자사 AI 솔루션 서비스 풀스택 개발 및 유지보수. AI 서비스 배포 자동화 및 구축 템플릿 개발', 
      en: 'Full-stack development and maintenance of in-house AI solution services. AI service deployment automation', 
      ja: '自社AIソリューションサービスのフルスタック開発・保守。AIサービス配備自動化' 
    }
  },
  {
    date: { ko: '2025.08 ~ 2025.10', en: '2025.08 ~ 2025.10', ja: '2025.08 ~ 2025.10' },
    title: { ko: 'QA & 제품 기획', en: 'QA & Product Planning', ja: 'QA・プロダクト企画' },
    desc: { 
      ko: '영상 편집 솔루션의 품질 검증과 신규 기능 기획. AI 기능 테스트 및 UX 개선안 제안', 
      en: 'Quality verification and new feature planning for video editing solutions', 
      ja: '動画編集ソリューションの品質検証と新機能企画' 
    }
  },
  {
    date: { ko: '2024.10 ~ 2025.05', en: '2024.10 ~ 2025.05', ja: '2024.10 ~ 2025.05' },
    title: { ko: '금융 시스템 운영 & 자동화 기획', en: 'Financial System Operations & Automation', ja: '金融システム運営・自動化企画' },
    desc: { 
      ko: '법인카드 시스템 운영, 데이터 분석 기반 자동화 로직 기획 및 비용 절감', 
      en: 'Corporate card system operations, automation logic planning based on data analysis', 
      ja: '法人カードシステム運営、データ分析ベースの自動化ロジック企画' 
    }
  },
  {
    date: { ko: '2024.02 ~ 2024.08', en: '2024.02 ~ 2024.08', ja: '2024.02 ~ 2024.08' },
    title: { ko: '풀스택 개발 역량 집중', en: 'Full-stack Development Training', ja: 'フルスタック開発力集中' },
    desc: { 
      ko: '1,120시간 교육 이수, AI 면접 피드백 서비스 개발로 최우수 프로젝트 선정', 
      en: 'Completed 1,120 hours of training, selected as best project for AI interview feedback service', 
      ja: '1,120時間の教育修了、AI面接フィードバックサービスで最優秀プロジェクト選定' 
    }
  },
  {
    date: { ko: '2021.08 ~ 2023.08', en: '2021.08 ~ 2023.08', ja: '2021.08 ~ 2023.08' },
    title: { ko: '인사 시스템 디지털 전환', en: 'HR System Digital Transformation', ja: '人事システムデジタル転換' },
    desc: { 
      ko: '복리후생 프로세스 온라인화 프로젝트 참여, 사용자 인터뷰·업무 분석·개선안 설계 주도', 
      en: 'Participated in welfare process digitalization project, led user interviews and improvement design', 
      ja: '福利厚生プロセスオンライン化プロジェクト参加、ユーザーインタビュー・改善案設計を主導' 
    }
  }
];

const PROJECTS = [
  {
    title: { ko: '🏟️ KBO 리그 통합 데이터 플랫폼', en: '🏟️ KBO League Data Platform', ja: '🏟️ KBOリーグデータプラットフォーム' },
    tag: { ko: '데이터 플랫폼', en: 'Data Platform', ja: 'データプラットフォーム' },
    desc: { ko: 'KBO 리그 데이터를 수집·통합·분석해 정보 제공', en: 'Collecting and analyzing KBO league data', ja: 'KBOリーグデータを収集・統合・分析' },
    img: 'assets/images/project1.png',
    tech: ['JavaScript', 'Python', 'Oracle'],
    link: 'https://scandalous-lady-ca4.notion.site/KBO-4818ecc4ff1a4744b10b00b0b6f0a9a3'
  },
  {
    title: { ko: '☕ 커피 원두 등급 예측 서비스', en: '☕ Coffee Bean Grade Prediction', ja: '☕ コーヒー豆等級予測サービス' },
    tag: { ko: 'AI/ML 웹', en: 'AI/ML Web', ja: 'AI/ML Web' },
    desc: { ko: 'KNN 기반 예측 결과를 웹으로 제공', en: 'Web-based prediction using KNN algorithm', ja: 'KNNベースの予測結果をWebで提供' },
    img: 'assets/images/project2.png',
    tech: ['Vue.js', 'Spring Boot', 'KNN'],
    link: 'https://scandalous-lady-ca4.notion.site/e816b04935b0481e94943cdbce21fb3b'
  },
  {
    title: { ko: '🎭 AI 이미지 분석', en: '🎭 AI Image Analysis', ja: '🎭 AI画像分析' },
    tag: { ko: 'AI 비전 웹', en: 'AI Vision Web', ja: 'AIビジョンWeb' },
    desc: { ko: 'TensorFlow, OpenCV와 웹을 결합한 이미지 분석', en: 'Image analysis with TensorFlow and OpenCV', ja: 'TensorFlow、OpenCVとWebを結合した画像分析' },
    img: 'assets/images/project3.png',
    tech: ['Vue.js', 'Spring Boot', 'TensorFlow'],
    link: 'https://scandalous-lady-ca4.notion.site/AI-c8520be1e0a44c8b82c79be1d9e3c346'
  },
  {
    title: { ko: '🚀 AI 면접 포함 취업 지원 서비스', en: '🚀 Job Support with AI Interview', ja: '🚀 AI面接を含む就職支援サービス' },
    tag: { ko: '풀스택 AI', en: 'Full-stack AI', ja: 'フルスタックAI' },
    desc: { ko: 'AI 면접 기능을 갖춘 구직 지원 서비스', en: 'Job search platform with AI interview', ja: 'AI面接機能を備えた求職支援サービス' },
    img: 'assets/images/project4.png',
    tech: ['React', 'Spring Boot', 'AI/ML'],
    link: 'https://scandalous-lady-ca4.notion.site/AI-e638492c79bc423eadad200877af0c9d'
  },
  {
    title: { ko: '🎤 인터뷰 답변 분석기', en: '🎤 Interview Response Analyzer', ja: '🎤 インタビュー回答分析機' },
    tag: { ko: 'NLP AI', en: 'NLP AI', ja: 'NLP AI' },
    desc: { ko: 'KoBERT로 의도 분석 및 피드백', en: 'Intent analysis with KoBERT', ja: 'KoBERTで意図分析およびフィードバック' },
    img: 'assets/images/project5.png',
    tech: ['Python', 'KoBERT', 'NLP'],
    link: 'https://scandalous-lady-ca4.notion.site/11006503eb5880da95ead45c99ff0f61'
  },
  {
    title: { ko: '🎨 퍼스널 컬러 진단 알고리즘', en: '🎨 Personal Color Diagnosis', ja: '🎨 パーソナルカラー診断' },
    tag: { ko: 'CV AI', en: 'CV AI', ja: 'CV AI' },
    desc: { ko: '얼굴/눈 색상 분석으로 시즌 진단', en: 'Season diagnosis through face/eye analysis', ja: '顔・目の色分析でシーズン診断' },
    img: 'assets/images/project6.png',
    tech: ['Python', 'OpenCV', 'Scikit-learn'],
    link: 'https://scandalous-lady-ca4.notion.site/11006503eb58805da19dca00169207ef'
  },
  {
    title: { ko: '🤖 ChatGPT 기반 서비스 기획', en: '🤖 ChatGPT Service Planning', ja: '🤖 ChatGPTベースのサービス企画' },
    tag: { ko: 'AI 기획', en: 'AI Planning', ja: 'AI企画' },
    desc: { ko: '보이스피싱 대응 시뮬레이션 서비스 기획', en: 'Voice phishing simulation service planning', ja: 'ボイスフィッシング対応シミュレーション企画' },
    img: 'assets/images/project7.png',
    tech: ['OpenAI GPT', 'Genspark', 'CodePen'],
    link: 'https://scandalous-lady-ca4.notion.site/ChatGPT-20406503eb588076be44ce38d2f35a42'
  },
  {
    title: { ko: '🛍️ 스마트스토어 FAQ RAG 챗봇', en: '🛍️ Smart Store FAQ RAG Chatbot', ja: '🛍️ スマートストアFAQ RAGチャットボット' },
    tag: { ko: '풀스택 AI', en: 'Full-stack AI', ja: 'フルスタックAI' },
    desc: { ko: '벡터 검색 기반 FAQ 챗봇', en: 'FAQ chatbot based on vector search', ja: 'ベクトル検索ベースのFAQチャットボット' },
    img: 'assets/images/project8.png',
    tech: ['Django', 'RAG', 'LangChain'],
    link: 'https://scandalous-lady-ca4.notion.site/FAQ-RAG-20f06503eb5880efa171d8b3e203bd52'
  }
];

const SKILLS = [
  { group: 'Frontend', items: ['React', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Spring Boot', 'Django', 'Java', 'Python', 'REST API'] },
  { group: 'Database', items: ['Oracle', 'MySQL', 'Redis', 'SQL'] },
  { group: 'AI/ML', items: ['TensorFlow', 'OpenCV', 'KoBERT', 'Pandas', 'NumPy'] },
  { group: 'DevOps', items: ['AWS EC2', 'Docker', 'GitHub Actions'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Jira', 'Figma', 'Notion'] }
];

// =============================================
// State
// =============================================
let currentLang = 'ko';
let currentTab = 'overview';

// =============================================
// DOM Elements
// =============================================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// =============================================
// Language Switching
// =============================================
function switchLanguage(lang) {
  currentLang = lang;
  
  // Update active button
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all translatable elements
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = TRANSLATIONS[lang][key];
      } else {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    }
  });
  
  // Re-render dynamic content
  renderContent();
}

// =============================================
// Tab Switching
// =============================================
function switchTab(tab) {
  currentTab = tab;
  
  $$('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  
  renderContent();
}

// =============================================
// Render Functions
// =============================================
function renderContent() {
  const grid = $('#cardsGrid');
  if (!grid) return;
  
  let html = '';
  
  switch (currentTab) {
    case 'overview':
      html = renderOverview();
      break;
    case 'timeline':
      html = renderTimeline();
      break;
    case 'projects':
      html = renderProjects();
      break;
    case 'skills':
      html = renderSkills();
      break;
  }
  
  grid.innerHTML = html;
  
  // Re-apply animations
  setTimeout(() => {
    $$('.card').forEach((card, i) => {
      card.style.animationDelay = `${i * 0.05}s`;
    });
  }, 10);
}

function renderOverview() {
  const t = TRANSLATIONS[currentLang];
  
  // Hero Card
  let html = `
    <div class="card card-hero">
      <div>
        <h2>${t['hero-title']}</h2>
        <p>${t['hero-desc']}</p>
      </div>
      <div class="card-hero-stats">
        <div class="hero-stat">
          <div class="hero-stat-number">4${t['hero-stat-years']}</div>
          <div class="hero-stat-label">${t['hero-stat-exp']}</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number">8+</div>
          <div class="hero-stat-label">${t['hero-stat-projects']}</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number">Full-stack</div>
          <div class="hero-stat-label">${t['hero-stat-dev']}</div>
        </div>
      </div>
    </div>
  `;
  
  // Latest Timeline (2 items)
  TIMELINE.slice(0, 2).forEach(item => {
    html += `
      <div class="card card-timeline">
        <div class="card-timeline-header">
          <h3>${t['timeline-section']}</h3>
          <span class="card-timeline-date">${item.date[currentLang].split(' ~ ')[0]}</span>
        </div>
        <div class="card-timeline-body">
          <h4>${item.title[currentLang]}</h4>
          <p>${item.desc[currentLang]}</p>
        </div>
      </div>
    `;
  });
  
  // Text Card
  html += `
    <div class="card card-text">
      <div>
        <h3>${t['text-title']}</h3>
        <p>${t['text-desc']}</p>
      </div>
      <div class="card-text-footer">
        <span class="card-text-stat"><i class="fa-solid fa-heart"></i> 128</span>
        <span class="card-text-stat"><i class="fa-solid fa-comment"></i> 34</span>
      </div>
    </div>
  `;
  
  // Progress Card
  html += `
    <div class="card card-progress">
      <span class="card-progress-label">${t['progress-label']}</span>
      <h2>${t['progress-title']}</h2>
      <span class="card-progress-sub">${t['progress-sub']}</span>
      <div class="card-progress-footer">
        <span class="card-progress-count">6 / 6</span>
        <div class="card-progress-arrow"><i class="fa-solid fa-arrow-right"></i></div>
      </div>
    </div>
  `;
  
  // Featured Projects (4 items)
  PROJECTS.slice(0, 4).forEach(project => {
    html += renderProjectCard(project);
  });
  
  // Skills (2 items)
  SKILLS.slice(0, 2).forEach(skill => {
    html += renderSkillCard(skill);
  });
  
  // Contact Cards
  html += `
    <a href="mailto:bshwa0563@gmail.com" class="card card-contact">
      <i class="fa-regular fa-envelope"></i>
      <h3>Email</h3>
      <p>bshwa0563@gmail.com</p>
    </a>
    <a href="https://github.com/Bae-Sunny" target="_blank" class="card card-contact github">
      <i class="fa-brands fa-github"></i>
      <h3>GitHub</h3>
      <p>github.com/Bae-Sunny</p>
    </a>
    <a href="https://www.youtube.com/@Coding_Gumi" target="_blank" class="card card-contact youtube">
      <i class="fa-brands fa-youtube"></i>
      <h3>YouTube</h3>
      <p>${t['contact-youtube']}</p>
    </a>
  `;
  
  return html;
}

function renderTimeline() {
  const t = TRANSLATIONS[currentLang];
  let html = '';
  
  TIMELINE.forEach(item => {
    html += `
      <div class="card card-timeline">
        <div class="card-timeline-header">
          <h3>${t['timeline-section']}</h3>
          <span class="card-timeline-date">${item.date[currentLang]}</span>
        </div>
        <div class="card-timeline-body">
          <h4>${item.title[currentLang]}</h4>
          <p>${item.desc[currentLang]}</p>
        </div>
      </div>
    `;
  });
  
  return html;
}

function renderProjects() {
  let html = '';
  PROJECTS.forEach(project => {
    html += renderProjectCard(project);
  });
  return html;
}

function renderProjectCard(project) {
  return `
    <a href="${project.link}" target="_blank" class="card card-project">
      <img src="${project.img}" alt="${project.title[currentLang]}" class="card-project-image" 
           onerror="this.style.background='linear-gradient(135deg, #243447 0%, #1a2332 100%)'; this.style.display='block';">
      <div class="card-project-content">
        <span class="card-project-tag">${project.tag[currentLang]}</span>
        <h4 class="card-project-title">${project.title[currentLang]}</h4>
        <p class="card-project-desc">${project.desc[currentLang]}</p>
        <div class="card-project-tech">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </a>
  `;
}

function renderSkills() {
  let html = '';
  SKILLS.forEach(skill => {
    html += renderSkillCard(skill);
  });
  return html;
}

function renderSkillCard(skill) {
  return `
    <div class="card card-skill">
      <h3>${skill.group}</h3>
      <div class="skill-items">
        ${skill.items.map(item => `<span class="skill-item">${item}</span>`).join('')}
      </div>
    </div>
  `;
}

// =============================================
// Mobile Menu
// =============================================
function toggleMobileMenu() {
  const sidebar = $('.sidebar');
  const overlay = $('.sidebar-overlay');
  
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
  const sidebar = $('.sidebar');
  const overlay = $('.sidebar-overlay');
  
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// =============================================
// Event Listeners
// =============================================
function initEventListeners() {
  // Language Switcher
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
  });
  
  // Tabs
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  
  // Navigation Items
  $$('.nav-item[data-tab]').forEach(item => {
    item.addEventListener('click', () => {
      $$('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      switchTab(item.dataset.tab);
      closeMobileMenu();
    });
  });
  
  // Mobile Menu
  const mobileMenuBtn = $('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Sidebar Overlay
  const overlay = $('.sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }
  
  // Search Box (for demo purposes)
  const searchInput = $('.search-box input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      // Could implement search filtering here
      console.log('Search:', e.target.value);
    });
  }
}

// =============================================
// Initialize
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  renderContent();
});
