const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  // ...
  webpack: {
    alias: {
      /* ... */
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "portal",
          exposes: {
            "./Reports": "./src/pages/Reports",
          },
          filename: "remoteEntry.js",
        }),
      ],
      remove: [
        /* ... */
      ],
    },
    configure: {},
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.publicPath = "auto";
      return webpackConfig;
    },
  },
};
