// ==================== CURRENT LANGUAGE ====================
let currentLang = 'ko';

// ==================== TRANSLATIONS ====================
const TRANSLATIONS = {
  ko: {
    'hero-title-1': '문제를 정의하고,',
    'hero-title-2': '끝까지 해결',
    'hero-title-3': '하는',
    'hero-title-4': '풀스택 개발자',
    'hero-subtitle-1': '기능보다',
    'hero-subtitle-2': '왜 이 문제가 생겼는지',
    'hero-subtitle-3': '를 먼저 봅니다.',
    'hero-subtitle-4': '실제 서비스에서 부딪힌 문제를 코드로 해결해왔습니다.',
    'projects-title': 'All Projects',
    'projects-subtitle': '실제 업무·학습·실험 과정에서 발생한 문제를 해결한 결과물입니다.',
    'experience-title': 'Experience',
    'experience-subtitle': '문제 해결이 필요한 순간, 직접 설계하고 구현했습니다.',
    'contact-title': 'Contact',
    'contact-subtitle': '함께 문제를 풀어보고 싶다면 언제든지 연락 주세요.',
    'contact-email': 'Email',
    'role-label': 'Role.',
    'view-detail': '상세보기 →'
  },
  en: {
    'hero-title-1': 'Defining problems,',
    'hero-title-2': 'solving them',
    'hero-title-3': 'to the end',
    'hero-title-4': 'Full-stack Developer',
    'hero-subtitle-1': 'I look at',
    'hero-subtitle-2': 'why this problem occurred',
    'hero-subtitle-3': 'before features.',
    'hero-subtitle-4': 'I\'ve been solving real problems in actual services with code.',
    'projects-title': 'All Projects',
    'projects-subtitle': 'Real-world solutions from work, learning, and experimentation.',
    'experience-title': 'Experience',
    'experience-subtitle': 'When problems arose, I designed and implemented solutions.',
    'contact-title': 'Contact',
    'contact-subtitle': 'Let\'s solve problems together.',
    'contact-email': 'Email',
    'role-label': 'Role.',
    'view-detail': 'View Details →'
  },
  ja: {
    'hero-title-1': '問題を定義し、',
    'hero-title-2': '最後まで解決',
    'hero-title-3': 'する',
    'hero-title-4': 'フルスタック開発者',
    'hero-subtitle-1': '機能より',
    'hero-subtitle-2': 'なぜこの問題が起きたのか',
    'hero-subtitle-3': 'を先に見ます。',
    'hero-subtitle-4': '実際のサービスで直面した問題をコードで解決してきました。',
    'projects-title': 'All Projects',
    'projects-subtitle': '実務・学習・実験過程で発生した問題を解決した成果物です。',
    'experience-title': 'Experience',
    'experience-subtitle': '問題解決が必要な瞬間、直接設計し実装しました。',
    'contact-title': 'Contact',
    'contact-subtitle': '一緒に問題を解決しませんか。',
    'contact-email': 'Email',
    'role-label': 'Role.',
    'view-detail': '詳細を見る →'
  }
};

// ==================== PROJECTS ====================
const PROJECTS = [
  {
    title: {
      ko: "KBO 리그 통합 데이터 플랫폼",
      en: "KBO League Integrated Data Platform",
      ja: "KBOリーグ統合データプラットフォーム"
    },
    desc: {
      ko: "KBO 리그 데이터를 자동 수집·정제하여 분석 가능한 형태로 제공",
      en: "Automated collection and refinement of KBO league data for analysis",
      ja: "KBOリーグデータを自動収集・精製し、分析可能な形式で提供"
    },
    role: {
      ko: "데이터 수집·정제 파이프라인 설계 및 백엔드 구현",
      en: "Data pipeline design and backend implementation",
      ja: "データ収集・精製パイプライン設計およびバックエンド実装"
    },
    img: "assets/images/project1.png",
    tags: {
      ko: ["대용량 데이터", "데이터 정합성", "자동 수집"],
      en: ["Large-scale Data", "Data Integrity", "Auto Collection"],
      ja: ["大容量データ", "データ整合性", "自動収集"]
    },
    tech: ["Python", "Oracle"],
    link: "https://scandalous-lady-ca4.notion.site/KBO-4818ecc4ff1a4744b10b00b0b6f0a9a3"
  },
  {
    title: {
      ko: "커피 원두 등급 예측 서비스",
      en: "Coffee Bean Grade Prediction Service",
      ja: "コーヒー豆等級予測サービス"
    },
    desc: {
      ko: "머신러닝 예측 결과를 사용자가 바로 확인할 수 있는 웹 서비스로 구현",
      en: "Web service for real-time ML prediction results",
      ja: "機械学習予測結果をユーザーがすぐに確認できるWebサービス実装"
    },
    role: {
      ko: "모델 서빙 구조 설계 및 프론트–백엔드 연동",
      en: "Model serving architecture and full-stack integration",
      ja: "モデルサービング構造設計およびフロント・バックエンド連動"
    },
    img: "assets/images/project2.png",
    tags: {
      ko: ["모델 실서비스", "예측 정확도"],
      en: ["Model Deployment", "Prediction Accuracy"],
      ja: ["モデル実サービス", "予測精度"]
    },
    tech: ["Vue.js", "Spring Boot", "ML"],
    link: "https://scandalous-lady-ca4.notion.site/e816b04935b0481e94943cdbce21fb3b"
  },
  {
    title: {
      ko: "AI 이미지 분석 웹",
      en: "AI Image Analysis Web",
      ja: "AI画像分析Web"
    },
    desc: {
      ko: "이미지 업로드 기반 분석 결과를 웹으로 제공",
      en: "Web-based image analysis with upload functionality",
      ja: "画像アップロードベースの分析結果をWebで提供"
    },
    role: {
      ko: "이미지 처리 로직 설계 및 AI 결과 시각화",
      en: "Image processing logic design and AI visualization",
      ja: "画像処理ロジック設計およびAI結果の視覚化"
    },
    img: "assets/images/project3.png",
    tags: {
      ko: ["비전 AI", "실시간 처리"],
      en: ["Computer Vision", "Real-time Processing"],
      ja: ["ビジョンAI", "リアルタイム処理"]
    },
    tech: ["TensorFlow", "OpenCV"],
    link: "https://scandalous-lady-ca4.notion.site/AI-c8520be1e0a44c8b82c79be1d9e3c346"
  },
  {
    title: {
      ko: "AI 면접 기반 취업 지원 서비스",
      en: "AI Interview-based Job Support Service",
      ja: "AI面接ベースの就職支援サービス"
    },
    desc: {
      ko: "AI 면접 기능을 포함한 통합 취업 지원 플랫폼",
      en: "Integrated job support platform with AI interview",
      ja: "AI面接機能を含む統合就職支援プラットフォーム"
    },
    role: {
      ko: "면접 분석 기능 기획 및 서비스 흐름 설계",
      en: "Interview analysis feature planning and service flow design",
      ja: "面接分析機能企画およびサービスフロー設計"
    },
    img: "assets/images/project4.png",
    tags: {
      ko: ["사용자 피드백", "서비스 기획"],
      en: ["User Feedback", "Service Planning"],
      ja: ["ユーザーフィードバック", "サービス企画"]
    },
    tech: ["React", "Spring Boot"],
    link: "https://scandalous-lady-ca4.notion.site/AI-e638492c79bc423eadad200877af0c9d"
  },
  {
    title: {
      ko: "인터뷰 답변 분석기",
      en: "Interview Response Analyzer",
      ja: "インタビュー回答分析機"
    },
    desc: {
      ko: "텍스트 답변을 분석하여 개선 피드백 제공",
      en: "Text analysis providing improvement feedback",
      ja: "テキスト回答を分析し、改善フィードバックを提供"
    },
    role: {
      ko: "자연어 처리 파이프라인 설계 및 분석 로직 구현",
      en: "NLP pipeline design and analysis logic implementation",
      ja: "自然言語処理パイプライン設計および分析ロジック実装"
    },
    img: "assets/images/project5.png",
    tags: {
      ko: ["의도 분석", "텍스트 분류"],
      en: ["Intent Analysis", "Text Classification"],
      ja: ["意図分析", "テキスト分類"]
    },
    tech: ["KoBERT", "Python"],
    link: "https://scandalous-lady-ca4.notion.site/11006503eb5880da95ead45c99ff0f61"
  },
  {
    title: {
      ko: "퍼스널 컬러 진단 알고리즘",
      en: "Personal Color Diagnosis Algorithm",
      ja: "パーソナルカラー診断アルゴリズム"
    },
    desc: {
      ko: "얼굴·눈 색상 분석을 통한 퍼스널 컬러 분류",
      en: "Personal color classification via face and eye analysis",
      ja: "顔・目の色分析によるパーソナルカラー分類"
    },
    role: {
      ko: "이미지 특징 추출 및 분류 로직 설계",
      en: "Feature extraction and classification logic design",
      ja: "画像特徴抽出および分類ロジック設計"
    },
    img: "assets/images/project6.png",
    tags: {
      ko: ["특징 추출", "분류 문제"],
      en: ["Feature Extraction", "Classification"],
      ja: ["特徴抽出", "分類問題"]
    },
    tech: ["OpenCV", "Scikit-learn"],
    link: "https://scandalous-lady-ca4.notion.site/11006503eb58805da19dca00169207ef"
  },
  {
    title: {
      ko: "ChatGPT 기반 서비스 기획",
      en: "ChatGPT-based Service Planning",
      ja: "ChatGPTベースのサービス企画"
    },
    desc: {
      ko: "보이스피싱 대응 시뮬레이션 서비스 기획",
      en: "Voice phishing response simulation service planning",
      ja: "ボイスフィッシング対応シミュレーションサービス企画"
    },
    role: {
      ko: "문제 정의 및 AI 활용 시나리오 설계",
      en: "Problem definition and AI scenario design",
      ja: "問題定義およびAI活用シナリオ設計"
    },
    img: "assets/images/project7.png",
    tags: {
      ko: ["문제 정의", "AI 기획"],
      en: ["Problem Definition", "AI Planning"],
      ja: ["問題定義", "AI企画"]
    },
    tech: ["OpenAI GPT"],
    link: "https://scandalous-lady-ca4.notion.site/ChatGPT-20406503eb588076be44ce38d2f35a42"
  },
  {
    title: {
      ko: "스마트스토어 FAQ RAG 챗봇",
      en: "Smart Store FAQ RAG Chatbot",
      ja: "スマートストアFAG RAGチャットボット"
    },
    desc: {
      ko: "FAQ 문서를 기반으로 한 검색·응답 챗봇",
      en: "Search and response chatbot based on FAQ documents",
      ja: "FAQドキュメントに基づく検索・応答チャットボット"
    },
    role: {
      ko: "벡터 검색 구조 설계 및 챗봇 흐름 구현",
      en: "Vector search architecture and chatbot flow implementation",
      ja: "ベクトル検索構造設計およびチャットボットフロー実装"
    },
    img: "assets/images/project8.png",
    tags: {
      ko: ["정보 검색", "응답 정확도"],
      en: ["Information Retrieval", "Response Accuracy"],
      ja: ["情報検索", "応答精度"]
    },
    tech: ["Django", "LangChain", "RAG"],
    link: "https://scandalous-lady-ca4.notion.site/FAQ-RAG-20f06503eb5880efa171d8b3e203bd52"
  },
  {
    title: {
      ko: "사내 리포트 자동화 도구",
      en: "Internal Report Automation Tool",
      ja: "社内レポート自動化ツール"
    },
    desc: {
      ko: "반복되는 주간 리포트 작성 시간을 자동화로 단축",
      en: "Automated weekly report generation reducing manual work",
      ja: "繰り返される週次レポート作成時間を自動化で短縮"
    },
    role: {
      ko: "업무 프로세스 분석 및 자동화 스크립트 개발",
      en: "Workflow analysis and automation script development",
      ja: "業務プロセス分析および自動化スクリプト開発"
    },
    img: "assets/images/project9.png",
    tags: {
      ko: ["업무 자동화", "반복 작업 제거"],
      en: ["Workflow Automation", "Eliminate Repetition"],
      ja: ["業務自動化", "反復作業除去"]
    },
    tech: ["Python", "Excel", "Vue"],
    link: "#"
  }
];

// ==================== EXPERIENCE ====================
const EXPERIENCES = [
  {
    period: "2025.11 – Present",
    role: {
      ko: "자사 플랫폼 개발자 (Full-stack)",
      en: "In-house Platform Developer (Full-stack)",
      ja: "自社プラットフォーム開発者（Full-stack）"
    },
    company: "",
    achievements: {
      ko: [
        "자사 AI 솔루션 서비스 풀스택 개발 및 유지보수 담당",
        "RESTful API 설계·개발 및 백엔드 시스템 안정성 개선"
      ],
      en: [
        "Full-stack development and maintenance of in-house AI solution services",
        "RESTful API design, development, and backend system stability improvement"
      ],
      ja: [
        "自社AIソリューションサービスのフルスタック開発および保守担当",
        "RESTful API設計・開発およびバックエンドシステム安定性改善"
      ]
    }
  },
  {
    period: "2025.08 – 2025.10",
    role: {
      ko: "QA & 제품 기획 인턴",
      en: "QA & Product Planning Intern",
      ja: "QA・プロダクト企画インターン"
    },
    company: "",
    achievements: {
      ko: [
        "영상 편집 솔루션의 품질 검증 프로세스 구축 및 운영",
        "신규 AI 기능 테스트 시나리오 설계 및 개선",
        "사용자 피드백 분석을 통한 UX 개선안 제안 및 반영"
      ],
      en: [
        "Built and operated quality verification process for video editing solution",
        "Designed test scenarios for new AI features and improvements",
        "Proposed and implemented UX improvements based on user feedback analysis"
      ],
      ja: [
        "動画編集ソリューションの品質検証プロセス構築および運営",
        "新規AI機能のテストシナリオ設計および改善",
        "ユーザーフィードバック分析によるUX改善案の提案および反映"
      ]
    }
  },
  {
    period: "2024.10 – 2025.05",
    role: {
      ko: "금융 시스템 운영 & 자동화 기획 PM",
      en: "Financial System Operations & Automation Planning PM",
      ja: "金融システム運営・自動化企画PM"
    },
    company: "",
    achievements: {
      ko: [
        "법인카드 시스템 ERP 데이터 관리 및 정합성 검증",
        "반송 청구서 자동화 로직으로 전환, 처리 시간 60% 단축",
        "데이터 분석 기반 비용 절감 방안 기획 및 실행"
      ],
      en: [
        "Corporate card system ERP data management and integrity verification",
        "Automated return invoice processing, reducing processing time by 60%",
        "Planned and executed cost reduction strategies based on data analysis"
      ],
      ja: [
        "法人カードシステムERPデータ管理および整合性検証",
        "返送請求書の自動化ロジックへの転換、処理時間60%短縮",
        "データ分析ベースのコスト削減方策企画および実行"
      ]
    }
  },
  {
    period: "2024.02 – 2024.08",
    role: {
      ko: "풀스택 개발 집중 교육",
      en: "Full-stack Development Intensive Training",
      ja: "フルスタック開発集中教育"
    },
    company: "",
    achievements: {
      ko: [
        "1,120시간 풀스택 개발 교육 이수 (프론트엔드, 백엔드, AI/ML)",
        "AI 면접 피드백 서비스 프로젝트 개발 및 최우수 프로젝트 선정",
        "팀 협업 및 코드 리뷰를 통한 실무 역량 강화"
      ],
      en: [
        "Completed 1,120 hours of full-stack training (Frontend, Backend, AI/ML)",
        "Developed AI interview feedback service, selected as best project",
        "Strengthened practical skills through team collaboration and code reviews"
      ],
      ja: [
        "1,120時間のフルスタック開発教育修了（フロントエンド、バックエンド、AI/ML）",
        "AI面接フィードバックサービスプロジェクト開発、最優秀プロジェクト選定",
        "チーム協業およびコードレビューを通じた実務力強化"
      ]
    }
  },
  {
    period: "2021.08 – 2023.08",
    role: {
      ko: "인사 시스템 디지털 전환 PM",
      en: "HR System Digital Transformation PM",
      ja: "人事システムデジタル転換PM"
    },
    company: "",
    achievements: {
      ko: [
        "복리후생 프로세스 온라인화 프로젝트 참여 (오프라인→온라인)",
        "사용자 인터뷰 20+ 회 진행 및 업무 분석을 통한 개선안 설계 주도",
        "프로세스 디지털화로 처리 시간 40% 단축 및 사용자 만족도 향상"
      ],
      en: [
        "Participated in welfare process digitalization project (offline→online)",
        "Led improvement design through 20+ user interviews and workflow analysis",
        "Reduced processing time by 40% and improved user satisfaction through digitalization"
      ],
      ja: [
        "福利厚生プロセスのオンライン化プロジェクト参加（オフライン→オンライン）",
        "ユーザーインタビュー20回以上実施および業務分析による改善案設計主導",
        "プロセスのデジタル化により処理時間40%短縮およびユーザー満足度向上"
      ]
    }
  }
];

// ==================== RENDER FUNCTIONS ====================

// Projects 렌더링
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card">
      <img src="${p.img}" alt="${p.title[currentLang]}" class="project-img" loading="lazy">
      <div class="project-content">
        <h3 class="project-title">${p.title[currentLang]}</h3>
        <p class="project-desc">${p.desc[currentLang]}</p>
        <p class="project-role"><strong>${TRANSLATIONS[currentLang]['role-label']}</strong> ${p.role[currentLang]}</p>
        <div class="project-tags">
          ${p.tags[currentLang].map(t => `<span class="tag problem">${t}</span>`).join("")}
          ${p.tech.map(t => `<span class="tag tech">${t}</span>`).join("")}
        </div>
        ${p.link !== "#" ? `<a href="${p.link}" target="_blank" class="project-link">${TRANSLATIONS[currentLang]['view-detail']}</a>` : ""}
      </div>
    </article>
  `).join("");
}

// Experience 렌더링
function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCES.map((exp, index) => `
    <div class="experience-item" style="animation-delay: ${index * 0.1}s">
      <div class="experience-header">
        <div>
          <h3 class="experience-role">${exp.role[currentLang]}</h3>
          ${exp.company ? `<p class="experience-company">${exp.company}</p>` : ""}
        </div>
        <span class="experience-period">${exp.period}</span>
      </div>
      <ul class="experience-achievements">
        ${exp.achievements[currentLang].map(achievement => `
          <li>${achievement}</li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

// 다국어 텍스트 업데이트
function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang][key] !== undefined) {
      elem.textContent = TRANSLATIONS[currentLang][key];
    }
  });
}

// 언어 전환
function switchLanguage(lang) {
  currentLang = lang;
  
  // 버튼 활성화 상태 업데이트
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });

  // HTML lang 속성 변경
  document.documentElement.lang = lang;

  // 컨텐츠 재렌더링
  updateTranslations();
  renderProjects();
  renderExperience();
}

// ==================== SCROLL EVENTS ====================
// 스크롤 시 네비게이션 & 맨 위로 버튼 표시
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  const scrollBtn = document.getElementById('scrollToTop');
  
  // 네비게이션 표시/숨김
  if (window.scrollY > 100) {
    nav.classList.remove('nav-hidden');
  } else {
    nav.classList.add('nav-hidden');
  }
  
  // 맨 위로 버튼 표시/숨김
  if (window.scrollY > 300) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  // 초기 렌더링
  renderProjects();
  renderExperience();

  // 언어 버튼 이벤트 리스너
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
  
  // 맨 위로 버튼 클릭 이벤트
  const scrollBtn = document.getElementById('scrollToTop');
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
