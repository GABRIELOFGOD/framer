/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: 
      {
        'primary': '#ffff',
        'secondary': '#1570EF',
        'textGray': '#45596E',
        'dark': '#000719',
        'greenText': '#52ff80'
      },
    },
  },
  plugins: [],
}

