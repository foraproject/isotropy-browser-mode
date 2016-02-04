module.exports = {
  context: __dirname,
  entry: "./dist/test/app-browser.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
  ],
  resolve: {
    "isotropy-plugin-react": "isotropy-plugin-react-browser",
    "isotroy-body": "isotroy-body-in-browser",
    "http": "isotropy-http-in-browser"
  },
  module: {
    loaders: [
      { test: /\.json$/,   loader: "json-loader" }
    ]
  }
}
