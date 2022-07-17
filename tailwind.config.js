module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        white: {
          200: '#F2F2F2',
          500: '#FFFFFF'
        },
        gray: {
          400: '#333333',
          500: '#262626',

          700: '#1A1A1A',
          800: '#2A2A2A',
          900: '#0D0D0D'
        },
        purple: {
          500: '#5E60CE'
        },
        blue: {
          500: '#4EA8DE',
          700: '#1E6F9F'
        }
      }
    }
  },
  plugins: []
}
