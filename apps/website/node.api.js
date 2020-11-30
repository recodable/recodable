export default (pluginOptions) => ({
  webpack: (config, { defaultLoaders }) => {
    const { cssLoader } = defaultLoaders;
    for (const loader of cssLoader.loader) {
      if (loader.loader === 'postcss-loader') {
        loader.options.plugins = [
          require('tailwindcss'),
          require('autoprefixer'),
        ];
      }
    }

    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          defaultLoaders.jsLoaderExt,
          cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return config;
  },
});
