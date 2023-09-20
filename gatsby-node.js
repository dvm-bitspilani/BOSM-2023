// import path from "node:path";
// import CopyWebpackPlugin from "copy-webpack-plugin";

// const cMapsDir = path.join(
//   path.dirname(require.resolve("pdfjs-dist/package.json")),
//   "cmaps"
// );

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    // plugins: [
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       {
    //         from: cMapsDir,
    //         to: "cmaps/",
    //       },
    //     ],
    //   }),
    // ],

    // module: {
    //   rules: [
    //     // Other rules...
    //     {
    //       test: /\.(js|jsx)$/,
    //       exclude: /node_modules/,
    //       // use: 'node-loader',
    //     },
    //   ],
    // },

    externals: [
      {
        canvas: "canvas",
      },
    ],
  });
};
