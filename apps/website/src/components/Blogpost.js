import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function Blogpost({ title, description, slug, publishedAt }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        <time dateTime={publishedAt}>
          {format(new Date(publishedAt), 'MMM d, y')}
        </time>
      </p>
      <Link to={`/blog/${slug}`}>
        <a className="mt-2 block">
          <p
            className="text-xl font-semibold text-gray-900"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            {title}
          </p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </a>
      </Link>

      <div className="mt-3">
        <Link to={`/blog/${slug}`}>
          <a className="text-base font-semibold text-gray-600 hover:text-gray-500">
            Read full story
          </a>
        </Link>
      </div>
    </div>
  );
}
