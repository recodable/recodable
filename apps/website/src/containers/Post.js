import React, { useEffect } from 'react';
import { useRouteData } from 'react-static';
import { Head } from 'react-static';
import 'highlight.js/styles/night-owl.css';

export default function Post() {
  const { title, contents } = useRouteData();

  return (
    <article
      className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 mx-auto prose lg:prose-xl"
      style={{ maxWidth: '700px' }}
    >
      <h1 className="prose lg:prose-xl">{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </article>
  );
}
