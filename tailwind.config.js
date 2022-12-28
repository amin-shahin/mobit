module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      container:{
        center:true,
        padding:'1rem'
      },
      screens: {
        'xxs': '300px',
        'xs': '450px',
    }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],

}
