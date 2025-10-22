/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#100E0E',
        'pigment-green': '#47A025',
        'silver': '#BFB7B6',
        'white-smoke': '#F1F2EE',
        
        // Semantic color names for convenience
        'dark': '#100E0E',
        'primary': '#47A025',
        'accent': '#47A025',
        'secondary': '#BFB7B6',
        'light': '#F1F2EE',
        
        // Extended palette for variations
        'dark-secondary': '#1a1817',
        'dark-tertiary': '#242220',
        'silver-light': '#d4cccb',
        'silver-dark': '#8b8380',
        'green-light': '#5cb85d',
        'green-dark': '#2d6015',
      },
      backgroundColor: {
        'dark': '#100E0E',
        'dark-secondary': '#1a1817',
        'dark-tertiary': '#242220',
      },
      borderColor: {
        'silver': '#BFB7B6',
        'silver-light': '#d4cccb',
        'silver-dark': '#8b8380',
      },
      textColor: {
        'silver': '#BFB7B6',
        'silver-light': '#d4cccb',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sport': ['Sport', 'sans-serif'],
      },
    },
  },
  plugins: [],
}