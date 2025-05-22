/** @type {import('tailwindcss').Config} */
module.exports= {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f9fafb', // 기본 배경
        text: {
          default: '#111827', // 본문 텍스트
          description: '#6b7280', // 설명/보조 텍스트
        },
        primary: {
          DEFAULT: '#2563eb', // 기본 버튼 / 링크
          hover: '#1e40af', // 호버
        },
        border: '#e5e7eb', // 경계선
        surface: '#f3f4f6', // 서브 버튼 배경
      },
    },
  },
  plugins: [],
};
