import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function Blogpost({ title, description, slug, publishedAt }) {
  return (
    <div className="hover:text-primary">
      <p className="text-sm text-gray-500">
        <time dateTime={publishedAt}>
          {format(new Date(publishedAt), 'MMM d, y')}
        </time>
      </p>
      <Link to={`/blog/${slug}`} className="mt-2 block hover:text-accent-500">
        <p
          className="text-xl font-semibold text-gray-900"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {title}
        </p>
        <p className="mt-3 text-base text-gray-500">{description}</p>
      </Link>

      <div className="mt-3">
        <Link
          to={`/blog/${slug}`}
          className="text-base font-semibold text-accent-400 hover:text-accent-500"
        >
          Read full story
        </Link>
      </div>
    </div>
  );
}
