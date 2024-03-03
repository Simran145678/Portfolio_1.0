/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'yellow':{
          100:'#fffbe9',
          300:'#ffee32',
          500:'#fdca00',

        },
        'orange':{
          200:'#ffa500'
        },
        'gray':{
          800:'#484848',
          900:'#242038'
        }
      },
      fontFamily:{
        noto :['Noto Serif', 'serif']
      }
    },
  },
  plugins: [],
}

