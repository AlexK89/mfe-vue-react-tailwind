const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  // ...
  webpack: {
    alias: {
      /* ... */
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "home",
          remotes: {
            portal: "portal@http://localhost:3001/remoteEntry.js",
            marketplace: "marketplace@http://localhost:3002/remoteEntry.js",
          },
          filename: "remoteEntry.js",
          shared: packageJson.dependencies,
        }),
      ],
      remove: [
        /* ... */
      ],
    },
    configure: {
      /* ... */
    },
    configure: (webpackConfig, { env, paths }) => {
      /* ... */
      return webpackConfig;
    },
  },
};
