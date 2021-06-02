module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/_variables.scss";
          @import "@/assets/app.scss";
        `,
      },
    },
  },
};
