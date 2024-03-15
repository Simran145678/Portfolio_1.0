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
      },
      opacity:{
        0 :'0',
        100:'100'
      },
      scale:{
        50: '.5',
        75:'.75',
        90:'.9',
        105:'1.05'
      }
    },
  },
  plugins: [],
}

