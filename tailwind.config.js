module.exports = {
  content: [
  './public/**/*.{html,js}',
  "./src/**/*.{js,css}"
  ],
  theme: {
    extend: {
      outlineOffset: {
        10: '10px',
      },
      borderWidth: {
        '1': '1px',
      },
      minWidth: {
        'min': '260px'
      },
    },
  },
  plugins: [],
}