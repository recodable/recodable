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
    }).then((posts) => {
      // Re-order the posts in ASC publication date order
      // We have to use `Object.values` as JDown returns an object for all blogposts
      // c.f.: https://github.com/DanWebb/jdown
      return Object.values(posts).sort((a, b) => {
        if (a.publishedAt < b.publishedAt) return 1;
        if (a.publishedAt > b.publishedAt) return -1;
        return 0;
      });
    });

    return [
      {
        path: '/',
        getData: () => ({ posts }),
      },
      {
        path: '/blog',
        getData: () => ({ posts }),
        children: posts.map((post) => {
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
