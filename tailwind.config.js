/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['NotoSansKR', 'sans-serif'], // 기본 sans로 설정
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
