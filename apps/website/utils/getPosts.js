import jdown from 'jdown';

export default async function getPosts() {
  return jdown('posts', {
    markdown: {
      highlight: function (code, language) {
        const hljs = require('highlight.js');
        const validLanguage = hljs.getLanguage(language)
          ? language
          : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
      },
    },
  })
    .then((posts) => {
      // Re-order the posts in ASC publication date order
      // We have to use `Object.values` as JDown returns an object for all blogposts
      // c.f.: https://github.com/DanWebb/jdown
      return Object.values(posts).sort((a, b) => {
        if (a.publishedAt < b.publishedAt) return 1;
        if (a.publishedAt > b.publishedAt) return -1;
        return 0;
      });
    })
    .then((posts) => {
      // serialize posts
      return posts.map((post) => {
        return {
          ...post,
          publishedAt: post.publishedAt.toJSON(),
        };
      });
    });
}
