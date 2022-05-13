module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': 'var(--custom-primary)',
        'custom-secondary': 'var(--custom-secondary)',
        'custom-accent': 'var(--custom-accent)',
        'custom-highlight': 'var(--custom-highlight)',
        'custom-text': 'var(--custom-text)',
        'custom-faded': 'var(--custom-faded)',
      },
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        'gaegu': ['Gaegu', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
