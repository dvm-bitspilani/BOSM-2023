exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
    actions.setWebpackConfig({
      devtool: "eval-source-map",
    })
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /canvas/,
              use: loaders.null(),
            },
            {
              test: /pdfjs-dist/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }