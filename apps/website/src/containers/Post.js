import React, { useEffect } from 'react';
import { useRouteData } from 'react-static';
import 'highlight.js/styles/night-owl.css';

function NewsletterSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 bg-blue-500 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Want more tech tips?
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-200">
              Sign up for our newsletter to stay up to date.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form
              action="https://recodable.substack.com/api/v1/free?nojs=true"
              method="POST"
              className="sm:flex"
            >
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                id="emailAddress"
                type="email"
                required
                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white rounded-md"
                placeholder="Enter your email"
                name="email"
              />
              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-blue-200">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="text-green-400 font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Post() {
  const { title, contents } = useRouteData();

  return (
    <>
      <article
        className="bg-white pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8 mx-auto prose prose-green"
        style={{ maxWidth: '700px' }}
      >
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </article>

      <NewsletterSection />
    </>
  );
}
