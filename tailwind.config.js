module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': 'var(--primary)',
        'custom-secondary': 'var(--secondary)',
        'custom-tertiary': 'var(--tertiary)',
      },
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        'gaegu': ['Gaegu', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}