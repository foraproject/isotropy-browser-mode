module.exports = {
  context: __dirname,
  entry: "./dist/test/app-browser.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    "isotropy-plugin-react": "isotropy-plugin-react-browser",
    "koa": "koa-in-browser"
  },
  module: {
    loaders: [
      { test: /\.json$/,   loader: "json-loader" }
    ]
  }
}
