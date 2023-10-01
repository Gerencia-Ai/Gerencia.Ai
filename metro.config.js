const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      }
    ),
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  watchFolders: [path.resolve(__dirname, "src")],
};
