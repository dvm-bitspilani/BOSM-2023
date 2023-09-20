exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        // Other rules...
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "node-loader",
        },
      ],
    },
  });
};
