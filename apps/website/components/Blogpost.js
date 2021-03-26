import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'

export default function Blogpost({ title, description, slug, publishedAt }) {
  return (
    <div className="hover:text-primary">
      <p className="text-sm text-gray-500">
        <time dateTime={publishedAt}>
          {format(new Date(publishedAt), 'MMM d, y')}
        </time>
      </p>
      <Link href={`/blog/${slug}`}>
        <a className="mt-2 block hover:text-accent-500">
          <p
            className="text-xl font-semibold text-gray-900"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {title}
          </p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </a>
      </Link>

      <div className="mt-3">
        <Link href={`/blog/${slug}`}>
          <a className="text-base font-semibold text-accent-400 hover:text-accent-500">
            Read full story
          </a>
        </Link>
      </div>
    </div>
  )
}
