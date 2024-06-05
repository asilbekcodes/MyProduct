/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'section-1': "url('/assets/imgs/Bg.svg')",
        'section-5': "url('/assets/imgs/Bg (1).svg')",
        'section1-black': "url('/assets/imgs/Bg (2).svg')",
        'section5-black': "url('/assets/imgs/Bg (3).svg')"
      },
      colors:{
        'text-clr': "#22343D",
        'green-clr': "#02897A",
        'white-clr': "#fff"
      },
    },
  },
  plugins: [],
}

