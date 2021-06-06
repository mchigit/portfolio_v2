module.exports = {
  // Make variables available in SASS for every components
  devServer: {
    host: "localhost",
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/scss/variables.scss';
        `,
      },
    },
  },
};
