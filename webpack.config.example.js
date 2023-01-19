module.exports = {
  devServer: {
    contentBase: "./LIS",
    compress: true,
    port: 10000,
    proxy: {
      "/api": {
        changeOrigin: true,
        cookieDomainRewrite: "localhost",
        target: "https://lis.dhis2.udsm.ac.tz/openmrs/",
        auth: "username:password",
      },
    },
  },
};
