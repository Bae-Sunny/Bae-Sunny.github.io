/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // 프로젝트 루트의 모든 HTML 파일
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내 JS/TS/JSX/TSX 파일 (필요한 경우)
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0EA5E9',       // 메인 파란색 (하늘색)
        'secondary': '#64748B',     // 보조 회색 (짙은 회색)
        'accent': '#10B981',        // 강조 녹색 (밝은 녹색)
        'background': '#F9FAFB',    // 밝은 배경색 (연한 회색)
        'text-primary': '#1E293B',   // 주요 텍스트 색상 (짙은 남색)
        'text-secondary': '#6B7280', // 보조 텍스트 색상 (회색)
        'gray-light': '#F3F4F6',     // 연한 회색 배경
        'gray-border': '#D1D5DB',    // 연한 회색 테두리
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.5rem',           // 히어로 섹션 제목
        'h2': '2rem',             // 섹션 제목
        'h3': '1.5rem',             // 하위 섹션 제목
        'body': '1rem',            // 기본 본문 텍스트
        'sm': '0.875rem',          // 작은 텍스트
        'xs': '0.75rem',           // 더 작은 텍스트
      },
      spacing: {
        'section-padding': '5rem',  // 섹션 상하 padding 값
        'content-padding': '1.5rem', // 콘텐츠 내부 padding 값
      },
      borderRadius: {
        'xl': '0.75rem',          // 좀 더 둥근 border-radius
        'lg': '0.5rem',           // 기본 border-radius
        'md': '0.375rem',         // 중간 border-radius
        'sm': '0.25rem',          // 작은 border-radius
        'full': '9999px',         // 완전 둥근 border-radius (원형)
      },
      boxShadow: {
        'md': '0 4px 6px rgba(0, 0, 0, 0.05)', // 중간 그림자
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // 좀 더 큰 그림자
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.08)', // 더 큰 그림자
        'inner-md': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)', // 내부 그림자
      },
      transitionDuration: {
        'DEFAULT': '200ms',       // 기본 transition duration
      },
      transitionTimingFunction: {
        'DEFAULT': 'ease-out',     // 기본 transition timing function
      },
    },
  },
  plugins: [],
};
