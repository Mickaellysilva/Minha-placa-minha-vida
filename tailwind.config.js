/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",        // Isso olha os arquivos na raiz
    "./home/**/*.{js,jsx}",      // Isso olha a pasta home
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