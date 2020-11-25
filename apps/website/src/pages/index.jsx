import React from 'react';

export default () => {
  return (
    <>
      <Container>
        <Pattern className="top-0 right-0" />

        <div className="relative py-32 px-20 z-10 flex flex-col items-start">
          <h1
            className="text-8xl font-extrabold mb-6 text-gray-700 bg-gray-100 rounded-lg"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            We are
            <br />
            <span>Recodable</span>
            <span>.</span>
          </h1>

          <p className="px-4 py-2 text-2xl font-light text-gray-400 bg-gray-100 rounded-lg">
            Independent development team that crafts
            <br />
            beautiful web and mobile products for amazing clients.
          </p>
        </div>

        <Pattern className="bottom-0 left-0" />
      </Container>

      <Container>
        <h2
          className="py-10 text-5xl font-semibold text-gray-700 rounded-lg"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          Our latest posts.
        </h2>

        <ol className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <li>
            <Blogpost />
          </li>

          <li>
            <Blogpost />
          </li>

          <li>
            <Blogpost />
          </li>

          <li>
            <Blogpost />
          </li>
        </ol>

        <div className="text-center py-16">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Read more stories
          </button>
        </div>
      </Container>

      <Container>
        <h2
          className="py-10 text-5xl font-semibold text-gray-700 rounded-lg"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          Like an open (source) book.
        </h2>

        <p className="text-2xl text-gray-400">
          We create our app in the open
          <br />& are proud contributors of the Open Source ecosystem
        </p>
      </Container>

      <Container>
        <div className="text-center">
          <p className="text-gray-700 text-3xl mb-4">Let's talk!</p>

          <a
            href="mailto:hello@recodable.io"
            className="text-gray-700 text-5xl font-bold"
          >
            hello@recodable.io
          </a>
        </div>
      </Container>
    </>
  );
};

function Container({ children }) {
  return (
    <div className="bg-gray-100 relative overflow-hidden pb-24">
      <div className="mx-auto" style={{ width: '1024px' }}>
        {children}
      </div>
    </div>
  );
}

function Pattern({ className, ...forwardedProps }) {
  return (
    <div
      {...forwardedProps}
      className={`pattern w-96 h-96 absolute z-0 my-10 ${className}`}
    />
  );
}

function Blogpost() {
  return (
    <div>
      <p className="text-sm text-gray-500">
        <time dateTime="2020-03-16">Mar 16, 2020</time>
      </p>
      <a href="#" className="mt-2 block">
        <p className="text-xl font-semibold text-gray-900">
          Boost your conversion rate
        </p>
        <p className="mt-3 text-base text-gray-500">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti
          dicta.
        </p>
      </a>
      <div className="mt-3">
        <a
          href="#"
          className="text-base font-semibold text-gray-600 hover:text-gray-500"
        >
          Read full story
        </a>
      </div>
    </div>
  );
}
