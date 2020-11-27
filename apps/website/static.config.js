import path from 'path';
import jdown from 'jdown';

export default {
  getSiteData: () => ({
    title: 'Recodable - independant development team',
  }),
  getRoutes: async () => {
    const posts = await jdown('posts', {
      markdown: {
        highlight: function (code, language) {
          const hljs = require('highlight.js');
          const validLanguage = hljs.getLanguage(language)
            ? language
            : 'plaintext';
          return hljs.highlight(validLanguage, code).value;
        },
      },
    });

    return [
      {
        path: '/blog',
        getData: () => ({ posts: Object.values(posts) }),
        children: Object.values(posts).map((post) => {
          return {
            path: `/${post.slug}`,
            template: 'src/containers/Post',
            getData: () => ({ ...post }),
          };
        }),
      },
    ];
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
