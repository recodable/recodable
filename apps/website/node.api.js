export default (pluginOptions) => ({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          defaultLoaders.jsLoaderExt,
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return config;
  },
});
