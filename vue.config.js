const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://175.27.228.178:3000/api/", //后端接口的根目录
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
});
