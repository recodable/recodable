import path from 'path';

export default {
  getRoutes: async () => {
    return [];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    [
      'react-static-plugin-react-router',
      {
        RouterProps: {
          // These props will be passed to the underlying `Router` component
        },
      },
    ],
    require.resolve('react-static-plugin-sitemap'),
  ],
};
