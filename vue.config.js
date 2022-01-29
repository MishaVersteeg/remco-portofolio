const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@styling": path.resolve(__dirname, "src/styling"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
  },

  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Remco's Portfolio",
    },
  },
};
