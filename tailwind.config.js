// tailwind.config.js

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'main': '#F0EFF4', 
        'secondary': '#F6F6F6',
        'highlight': '#2CDA9D',
        'dark' : '#353B3C',
        'shadow' : '#535A5B',
        'stroke' : '#D9D9D9',
      },
      extend: {},
    },
    plugins: [],
  }