export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",        
    "./home/**/*.{js,jsx}",      
    "./componentes/**/*.{js,jsx}",
    "./paginas/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-premium': '#00008b',
        'verde-sucesso': '#508e63',
      },
    },
  },
  plugins: [],
}
