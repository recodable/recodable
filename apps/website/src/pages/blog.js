import React from 'react';
import { useRouteData, Head } from 'react-static';
import { Link } from 'react-router-dom';
import Blogpost from '../components/Blogpost';
import Button from '../components/Button';
import Dotify from '../components/Dotify';

export default () => {
  const { posts } = useRouteData();

  return (
    <>
      <Head>
        <title>
          The Recodable Blog - independant development team sharing knowledge
        </title>
      </Head>

      <div
        className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 mx-auto"
        style={{ maxWidth: '700px' }}
      >
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2
              className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              <Dotify size={2}>Sharing is caring</Dotify>
            </h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-xl text-gray-500">
                Written by the Recodable team.
                <br />
                We love to share our expertise with the community.
              </p>

              {/* <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label for="email-address" className="sr-only">Email address</label>
                <input id="email-address" type="email" required className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs" placeholder="Enter your email"/>
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button type="button" className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex">
                  Notify me
                </button>
              </div>
            </form> */}
            </div>
          </div>

          <div className="mt-6 pt-10 grid gap-16">
            {posts.map((post) => {
              return <Blogpost {...post} />;
            })}
          </div>
          {/* <div className="mt-10 text-center">
          <Button type="button">Load more stories</Button>
        </div> */}
        </div>
      </div>
    </>
  );
};
