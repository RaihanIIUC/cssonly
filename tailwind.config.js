module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '576',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    color: {
      primary: '#fd3d57',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans- serif",
        roboto: "'Roboto', sans - serif",
        display: ['group-hover'],
        visibility: ['group-hover'],
      },
    },
  },
  plugins: [
  ],
}