// ==================== CURRENT LANGUAGE ====================
let currentLang = 'ko';

// ==================== TRANSLATIONS ====================
const TRANSLATIONS = {
  ko: {
    'hero-title-1': '문제를 정의하고,',
    'hero-title-2': '끝까지 해결',
    'hero-title-3': '하는',
    'hero-title-4': '풀스택 개발자',
    'projects-title': 'All Projects',
    'projects-subtitle': '실제 업무·학습·실험 과정에서 발생한 문제를 해결한 결과물입니다.',
    'experience-title': 'Experience',
    'experience-subtitle': '문제 해결이 필요한 순간, 직접 설계하고 구현했습니다.',
    'contact-title': 'Contact',
    'contact-subtitle': '함께 문제를 풀어보고 싶다면 언제든지 연락 주세요.',
    'whoami-name': 'Bae Sunhwa',
    'whoami-role': '풀스택 개발자',
    'role-label': 'role:',
    'view-detail': '상세보기 →',
    'nav-projects': '프로젝트',
    'nav-experience': '경력',
    'nav-contact': '연락처',
    'featured-label': '대표 프로젝트',
    'more-label': '그 외 프로젝트',
    'case-problem': '문제',
    'case-approach': '접근',
    'case-outcome': '결과',
    'hero-lede': 'AI/ML, 백엔드, 프론트엔드를 넘나들며 실제 서비스의 문제를 코드로 풀어온 기록입니다.',
    'colophon-title': '이야기 나눠요.'
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
    'diff-remove': 'Focus only on shipping features',
    'diff-add': 'Understand why the problem exists first',
    'projects-title': 'All Projects',
    'projects-subtitle': 'Real-world solutions from work, learning, and experimentation.',
    'experience-title': 'Experience',
    'experience-subtitle': 'When problems arose, I designed and implemented solutions.',
    'contact-title': 'Contact',
    'contact-subtitle': 'Let\'s solve problems together.',
    'whoami-name': 'Bae Sunhwa',
    'whoami-role': 'Full-stack Developer',
    'role-label': 'role:',
    'view-detail': 'View Details →',
    'nav-projects': 'Projects',
    'nav-experience': 'Experience',
    'nav-contact': 'Contact',
    'featured-label': 'Featured Work',
    'more-label': 'More Projects',
    'case-problem': 'Problem',
    'case-approach': 'Approach',
    'case-outcome': 'Outcome',
    'hero-lede': 'A record of solving real service problems with code — across AI/ML, backend, and frontend.',
    'colophon-title': "Let's Talk."
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
    'diff-remove': '機能実装だけに集中する',
    'diff-add': '問題がなぜ起きたのかを先に把握する',
    'projects-title': 'All Projects',
    'projects-subtitle': '実務・学習・実験過程で発生した問題を解決した成果物です。',
    'experience-title': 'Experience',
    'experience-subtitle': '問題解決が必要な瞬間、直接設計し実装しました。',
    'contact-title': 'Contact',
    'contact-subtitle': '一緒に問題を解決しませんか。',
    'whoami-name': 'Bae Sunhwa',
    'whoami-role': 'フルスタック開発者',
    'role-label': 'role:',
    'view-detail': '詳細を見る →',
    'nav-projects': 'プロジェクト',
    'nav-experience': '経歴',
    'nav-contact': '連絡先',
    'featured-label': '代表プロジェクト',
    'more-label': 'その他のプロジェクト',
    'case-problem': '課題',
    'case-approach': 'アプローチ',
    'case-outcome': '成果',
    'hero-lede': 'AI/ML、バックエンド、フロントエンドを横断しながら、実際のサービスの問題をコードで解決してきた記録です。',
    'colophon-title': 'お話ししましょう。'
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
      ko: "VGG16 기반 마스크 감지(정확도 98%)와 퍼스널 컬러 진단, BeautyGAN 가상 메이크업까지 결합한 뷰티 분석 웹 서비스",
      en: "A beauty-analysis web service combining VGG16-based mask detection (98% accuracy), personal color diagnosis, and BeautyGAN virtual makeup",
      ja: "VGG16ベースのマスク検出（精度98%）とパーソナルカラー診断、BeautyGAN仮想メイクを組み合わせたビューティー分析Webサービス"
    },
    role: {
      ko: "Vue.js 기반 UI/UX 설계 및 Spring Boot API 연동, 퍼스널 컬러 결과 페이지 시각화 구현",
      en: "Designed the Vue.js UI/UX, integrated the Spring Boot API, and built the personal-color result visualization",
      ja: "Vue.jsベースのUI/UX設計およびSpring Boot API連携、パーソナルカラー結果ページの可視化実装"
    },
    img: "assets/images/project3.png",
    tags: {
      ko: ["비전 AI", "정확도 98%"],
      en: ["Computer Vision", "98% Accuracy"],
      ja: ["ビジョンAI", "精度98%"]
    },
    tech: ["TensorFlow", "OpenCV", "BeautyGAN"],
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
      ko: "KoBERT를 파인튜닝해 면접 답변을 52개 의도 유형으로 분류하고 직무 연관도·감정까지 분석하는 피드백 엔진 (훈련 정확도 96.4%, 검증 74.1%)",
      en: "A feedback engine that fine-tunes KoBERT to classify interview answers into 52 intent types and analyzes job relevance and sentiment (96.4% training accuracy, 74.1% validation)",
      ja: "KoBERTをファインチューニングして面接回答を52の意図タイプに分類し、職務関連度・感情まで分析するフィードバックエンジン（訓練精度96.4%、検証74.1%）"
    },
    role: {
      ko: "분류 태스크 설계 및 KoBERT 파인튜닝, 감정 점수·직무 키워드 매칭 로직 구현",
      en: "Designed the classification task, fine-tuned KoBERT, and built the sentiment-scoring and job-keyword matching logic",
      ja: "分類タスク設計およびKoBERTファインチューニング、感情スコア・職務キーワードマッチングロジック実装"
    },
    img: "assets/images/project5.png",
    tags: {
      ko: ["의도 분석 52종", "훈련 96.4%"],
      en: ["52 Intent Types", "96.4% Training Acc."],
      ja: ["意図分析52種", "訓練96.4%"]
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
      ko: "dlib 랜드마크로 피부색(70%)·눈동자색(30%) 가중 평균을 추출해, 4계절 표준 컬러와의 유클리드 거리로 퍼스널 컬러를 정량 진단",
      en: "Extracts a weighted average of skin tone (70%) and eye color (30%) via dlib landmarks, then diagnoses personal color season by Euclidean distance to standard seasonal palettes",
      ja: "dlibランドマークで肌色（70%）・瞳の色（30%）の加重平均を抽出し、4シーズンの標準カラーとのユークリッド距離でパーソナルカラーを定量診断"
    },
    role: {
      ko: "얼굴 랜드마크 검출 및 색상 추출 알고리즘 설계, PersonalColorAnalyzer 클래스로 재사용 가능한 구조 구현",
      en: "Designed the facial-landmark detection and color-extraction algorithm, packaged as a reusable PersonalColorAnalyzer class",
      ja: "顔ランドマーク検出および色抽出アルゴリズム設計、PersonalColorAnalyzerクラスとして再利用可能な構造を実装"
    },
    img: "assets/images/project6.png",
    tags: {
      ko: ["가중 유클리드 거리", "dlib 68랜드마크"],
      en: ["Weighted Euclidean Distance", "dlib 68-point"],
      ja: ["加重ユークリッド距離", "dlib 68点"]
    },
    tech: ["OpenCV", "dlib", "Scikit-learn"],
    link: "https://scandalous-lady-ca4.notion.site/11006503eb58805da19dca00169207ef"
  },
  {
    title: {
      ko: "ChatGPT 기반 서비스 기획",
      en: "ChatGPT-based Service Planning",
      ja: "ChatGPTベースのサービス企画"
    },
    desc: {
      ko: "기관 사칭·대출빙자 등 5가지 유형의 보이스피싱을 체험하는 AI 챗봇 시뮬레이션 훈련 서비스를 12파트 기획안으로 구성",
      en: "Structured a 12-part service proposal for an AI chatbot simulation that trains users against 5 real voice-phishing scenarios (agency impersonation, fraudulent loans, etc.)",
      ja: "機関偽装・融資詐欺など5類型のボイスフィッシングを体験するAIチャットボットシミュレーション訓練サービスを12パートの企画案として構成"
    },
    role: {
      ko: "ChatGPT로 아이디어 브레인스토밍부터 목차 설계·기획안 작성까지 전 과정 주도, 실무 적용 가능한 수준으로 표현·흐름 보완",
      en: "Led the full process with ChatGPT — from brainstorming to outline design to writing the proposal — then refined the language and flow to a practice-ready level",
      ja: "ChatGPTでアイデアのブレインストーミングから目次設計・企画案作成まで全過程を主導し、実務適用可能なレベルまで表現・流れを補完"
    },
    img: "assets/images/project7.png",
    tags: {
      ko: ["시나리오 5종", "기획안 12파트"],
      en: ["5 Scenarios", "12-Part Proposal"],
      ja: ["シナリオ5種", "企画案12パート"]
    },
    tech: ["ChatGPT", "Genspark"],
    link: "https://scandalous-lady-ca4.notion.site/ChatGPT-20406503eb588076be44ce38d2f35a42"
  },
  {
    title: {
      ko: "스마트스토어 FAQ RAG 챗봇",
      en: "Smart Store FAQ RAG Chatbot",
      ja: "スマートストアFAQ RAGチャットボット"
    },
    desc: {
      ko: "ChromaDB 벡터 검색과 GPT-4o를 결합한 RAG 파이프라인으로, 실전 시나리오 테스트 기준 응답 정확도 90% 이상을 달성한 FAQ 챗봇",
      en: "A FAQ chatbot combining ChromaDB vector search with GPT-4o in a RAG pipeline, reaching over 90% response accuracy in real-scenario testing",
      ja: "ChromaDBベクトル検索とGPT-4oを組み合わせたRAGパイプラインで、実践シナリオテスト基準で応答精度90%以上を達成したFAQチャットボット"
    },
    role: {
      ko: "OpenAI Embedding·ChromaDB 연동 및 LangChain RAG 파이프라인 설계, Docker Compose로 백엔드·프론트 통합 배포",
      en: "Integrated OpenAI Embedding with ChromaDB, designed the LangChain RAG pipeline, and deployed the full stack with Docker Compose",
      ja: "OpenAI Embedding・ChromaDB連携およびLangChain RAGパイプライン設計、Docker Composeでバックエンド・フロントを統合デプロイ"
    },
    img: "assets/images/project8.png",
    tags: {
      ko: ["응답 정확도 90%+", "RAG"],
      en: ["90%+ Response Accuracy", "RAG"],
      ja: ["応答精度90%+", "RAG"]
    },
    tech: ["Django", "LangChain", "ChromaDB", "GPT-4o"],
    link: "https://scandalous-lady-ca4.notion.site/FAQ-RAG-20f06503eb5880efa171d8b3e203bd52"
  }
];

// ==================== FEATURED CASE STUDIES ====================
// 대표 3개 프로젝트(KBO 플랫폼 / 커피 원두 예측 서비스 / AI 면접 서비스)를
// Problem-Approach-Outcome 구조로 확장. 본인이 제공한 프로젝트 상세 문서에
// 실제로 기재된 수치와 사실만 사용했으며, 새로운 성과를 지어내지 않았음.
const FEATURED_IDS = [0, 1, 3];

const CASE_STUDIES = {
  0: {
    problem: {
      ko: "경기, 날씨, 뉴스, 증권, 커뮤니티 등 KBO 관련 정보가 여러 사이트에 흩어져 있어 팬들이 매번 따로 확인해야 했다.",
      en: "Game data, weather, news, stock info, and community boards for KBO were scattered across separate sites that fans had to check one by one.",
      ja: "試合データ、天気、ニュース、証券情報、コミュニティなどKBO関連の情報が複数のサイトに散在し、都度確認する必要があった。"
    },
    approach: {
      ko: "Python 크롤러(BeautifulSoup4, Selenium)로 데이터를 자동 수집하고, Django와 Spring MVC라는 이기종 백엔드를 RESTful API로 통합했으며, Highcharts로 대용량 데이터 시각화 성능을 최적화했다.",
      en: "Built Python crawlers (BeautifulSoup4, Selenium) to automate collection, integrated two different backend stacks — Django and Spring MVC — through a unified RESTful API, and optimized large-scale data visualization with Highcharts.",
      ja: "Pythonクローラー（BeautifulSoup4, Selenium）でデータを自動収集し、DjangoとSpring MVCという異種バックエンドをRESTful APIで統合、Highchartsで大容量データの可視化性能を最適化した。"
    },
    outcome: {
      ko: "사이트 구조가 바뀌어도 대응 가능한 크롤링 안정성을 확보하고, 서로 다른 두 백엔드를 하나의 서비스로 통합하는 데 성공했다.",
      en: "Achieved crawling stability that holds up even when source sites change structure, and successfully unified two separate backend systems into one service.",
      ja: "サイト構造の変更にも対応できるクローリング安定性を確保し、2つの異なるバックエンドを1つのサービスに統合することに成功した。"
    }
  },
  1: {
    problem: {
      ko: "커피 품질 평가가 사람의 주관적 판단에 의존해 일관성이 떨어졌다.",
      en: "Coffee quality assessment relied on subjective human judgment, making it inconsistent.",
      ja: "コーヒーの品質評価は人の主観的判断に依存しており、一貫性に欠けていた。"
    },
    approach: {
      ko: "9가지 원두 특성 데이터로 KNN 모델을 학습시키며 K=1~103 구간을 전부 실험해 최적 K값을 찾고, Django+Vue.js로 예측 결과를 실시간으로 확인할 수 있는 웹 서비스를 구현했다.",
      en: "Trained a KNN model on 9 bean characteristics, testing K values from 1 to 103 to find the optimum, then built a web service with Django and Vue.js to show predictions in real time.",
      ja: "9つの豆の特性データでKNNモデルを学習させ、K=1〜103の区間をすべて実験して最適なK値を探し、Django+Vue.jsで予測結果をリアルタイムに確認できるWebサービスを実装した。"
    },
    outcome: {
      ko: "K=57에서 정확도 87.84%를 달성해, Logistic Regression(86.04%)·Voting Classifier(86.76%) 등 비교 모델들을 앞섰다.",
      en: "Reached 87.84% accuracy at K=57, outperforming comparison models including Logistic Regression (86.04%) and a Voting Classifier (86.76%).",
      ja: "K=57で精度87.84%を達成し、ロジスティック回帰（86.04%）やVoting Classifier（86.76%）などの比較モデルを上回った。"
    }
  },
  3: {
    problem: {
      ko: "취업 준비생들이 실전 감각을 기를 기회가 부족하고, 면접 피드백을 받을 창구도 마땅치 않았다.",
      en: "Job seekers had few chances to practice under real interview conditions or get feedback on their answers.",
      ja: "就活生が実戦感覚を養う機会が不足し、面接フィードバックを受ける窓口も乏しかった。"
    },
    approach: {
      ko: "AI 면접 시스템(표정·자세·음성 분석, KoBERT 기반 답변 분석)과 실시간 컨설턴트 매칭을 결합한 역할 기반 플랫폼을 설계하고, JWT+Redis+BCrypt 인증 구조와 Docker 환경을 구축하며 기획·일정 관리·코드 리뷰까지 프로젝트를 리드했다.",
      en: "Designed a role-based platform combining an AI interview system (facial expression, posture, and voice analysis plus KoBERT-based answer analysis) with real-time consultant matching, built on a JWT + Redis + BCrypt auth structure and a Dockerized environment — leading the planning, scheduling, and code review.",
      ja: "AI面接システム（表情・姿勢・音声分析、KoBERTベースの回答分析）とリアルタイムコンサルタントマッチングを組み合わせたロールベースのプラットフォームを設計し、JWT+Redis+BCryptベースの認証構造とDocker環境を構築、企画・スケジュール管理・コードレビューまでプロジェクトをリードした。"
    },
    outcome: {
      ko: "답변 의도 분석 정확도 90% 이상을 달성했고, Redis 기반 인증 구조로 인증 속도를 40% 개선했으며, Docker 환경 구성으로 개발 속도를 50% 끌어올렸다.",
      en: "Reached over 90% accuracy in answer-intent analysis, improved authentication speed by 40% with Redis, and increased development speed by 50% through the Docker setup.",
      ja: "回答意図分析の精度90%以上を達成し、Redisベースの認証構造で認証速度を40%改善、Docker環境構築で開発速度を50%引き上げた。"
    }
  }
};


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

// ==================== HELPERS ====================
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function pad(n) {
  return String(n).padStart(2, '0');
}

// ==================== RENDER FUNCTIONS ====================

// Projects 렌더링 — 대표작(feature spread) / 그 외(brief) 분리
function renderProjects() {
  const featuredEl = document.getElementById("featuredGrid");
  const listEl = document.getElementById("projectsGrid");
  if (!featuredEl || !listEl) return;

  const featuredHTML = [];
  const moreHTML = [];

  PROJECTS.forEach((p, i) => {
    const tagsLine = [...p.tags[currentLang], ...p.tech].join(' · ');
    const linkHTML = p.link !== "#"
      ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="spread-link">${TRANSLATIONS[currentLang]['view-detail']}</a>`
      : "";

    if (FEATURED_IDS.includes(i)) {
      const cs = CASE_STUDIES[i];
      featuredHTML.push(`
        <article class="spread reveal" style="--i:${featuredHTML.length}">
          <div class="spread-media">
            <div class="spread-media-wrap">
              <img src="${p.img}" alt="${p.title[currentLang]}" loading="lazy" onerror="this.style.opacity='0'">
            </div>
          </div>
          <div class="spread-content">
            <span class="spread-eyebrow">No. ${pad(i + 1)} — ${slugify(p.title.en)}</span>
            <h3 class="spread-title">${p.title[currentLang]}</h3>
            <dl class="spread-facts">
              <div>
                <dt>${TRANSLATIONS[currentLang]['case-problem']}</dt>
                <dd>${cs.problem[currentLang]}</dd>
              </div>
              <div>
                <dt>${TRANSLATIONS[currentLang]['case-approach']}</dt>
                <dd>${cs.approach[currentLang]}</dd>
              </div>
              <div>
                <dt>${TRANSLATIONS[currentLang]['case-outcome']}</dt>
                <dd>${cs.outcome[currentLang]}</dd>
              </div>
            </dl>
            <p class="spread-tags">${tagsLine}</p>
            ${linkHTML}
          </div>
        </article>
      `);
    } else {
      moreHTML.push(`
        <li class="brief-item reveal" style="--i:${moreHTML.length}">
          <span class="brief-num">${pad(i + 1)}</span>
          <div class="brief-body">
            <h4 class="brief-title">${p.title[currentLang]}</h4>
            <p class="brief-desc">${p.desc[currentLang]}</p>
            <span class="brief-meta">${tagsLine}</span>
          </div>
          ${p.link !== "#" ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="brief-link">→</a>` : ""}
        </li>
      `);
    }
  });

  featuredEl.innerHTML = featuredHTML.join("");
  listEl.innerHTML = moreHTML.join("");

  observeReveal();
}

// 목차(TOC) 하단 텍스트 — 실제 데이터에서 계산, 수치 조작 없음
function renderTocStats() {
  const projectsSub = document.getElementById("tocProjectsSub");
  const experienceSub = document.getElementById("tocExperienceSub");
  if (!projectsSub || !experienceSub) return;

  const featuredCount = FEATURED_IDS.length;
  const totalCount = PROJECTS.length;
  const projectsText = {
    ko: `대표 ${featuredCount}건 · 전체 ${totalCount}건`,
    en: `${featuredCount} Featured · ${totalCount} Total`,
    ja: `代表${featuredCount}件・全${totalCount}件`
  };
  projectsSub.textContent = projectsText[currentLang];

  const years = EXPERIENCES
    .map(exp => parseInt(exp.period.slice(0, 4), 10))
    .filter(y => !isNaN(y));
  const startYear = Math.min(...years);
  const currentYear = new Date().getFullYear();
  const presentText = { ko: '현재', en: 'Present', ja: '現在' };
  experienceSub.textContent = `${startYear} — ${presentText[currentLang]}`;
}

// Experience 렌더링 (credits list)
function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCES.map((exp, index) => `
    <li class="credit-item reveal" style="--i:${index}">
      <span class="credit-period">${exp.period}</span>
      <div>
        <h3 class="credit-role">${exp.role[currentLang]}</h3>
        ${exp.company ? `<p class="credit-company">${exp.company}</p>` : ""}
        <ul class="credit-achievements">
          ${exp.achievements[currentLang].map(achievement => `<li>${achievement}</li>`).join("")}
        </ul>
      </div>
    </li>
  `).join("");

  observeReveal();
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

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });

  document.documentElement.lang = lang;

  updateTranslations();
  renderProjects();
  renderExperience();
  renderTocStats();
}

// ==================== SCROLL REVEAL (IntersectionObserver) ====================
let revealObserver;

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  }
  return revealObserver;
}

function observeReveal() {
  const observer = getRevealObserver();
  document.querySelectorAll('.reveal:not(.in-view)').forEach(el => observer.observe(el));
}

// ==================== SCROLL EVENTS ====================
window.addEventListener('scroll', () => {
  const scrollBtn = document.getElementById('scrollToTop');

  if (window.scrollY > 400) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
}, { passive: true });

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperience();
  renderTocStats();

  document.querySelectorAll('section > .container, section > .container-wide, section > .colophon').forEach((el) => {
    el.classList.add('reveal');
  });
  observeReveal();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  const scrollBtn = document.getElementById('scrollToTop');
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const themeToggle = document.getElementById('themeToggle');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));

  themeToggle.addEventListener('click', () => {
    const nowDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (nowDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeToggle.setAttribute('aria-pressed', 'false');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.setAttribute('aria-pressed', 'true');
    }
  });
});
