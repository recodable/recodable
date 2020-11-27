import React from 'react';
import Blogpost from '../components/Blogpost';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useRouteData } from 'react-static';
import StackList from '../components/StackList';

function Dotify({ children, size = 15, className = '' }) {
  return (
    <span className={`flex items-baseline ${className}`}>
      {children}

      <span
        style={{
          width: `${size}px`,
          height: `${size}px`,
          marginLeft: `${Math.round(size / 10)}px`,
        }}
        className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
      />
    </span>
  );
}

export default () => {
  const { posts } = useRouteData();

  return (
    <>
      <Container>
        <Pattern className="top-0 right-0" />

        <div className="relative py-32 px-20 z-10 flex flex-col items-start">
          <h1
            className="bg-white text-8xl font-extrabold mb-6 text-gray-700 rounded-lg px-4 py-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            We are
            <br />
            <Dotify className="bg-primary px-6 py-3 rounded-lg">
              <span style={{ color: '#F9FAFB' }}>Recodable</span>
            </Dotify>
          </h1>

          <p className="bg-white px-4 py-2 text-2xl font-light text-gray-500 rounded-lg">
            Independent development team that crafts
            <br />
            beautiful web and mobile products for amazing clients.
          </p>

          <StackList />
        </div>

        <Pattern className="bottom-0 left-0" />
      </Container>

      <Container>
        <h2
          className="py-10 text-5xl font-semibold text-gray-700 rounded-lg "
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          <Dotify size={10}>
            <span className="">Our latest posts</span>
          </Dotify>
        </h2>

        <ol className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <li key={post.slug}>
              <Blogpost {...post} />
            </li>
          ))}
        </ol>

        <div className="text-center py-16">
          <Link to="/blog">
            <Button type="button" theme="primary">
              Read more stories
            </Button>
          </Link>
        </div>
      </Container>

      {/* <Container>
        <h2
          className="py-10 text-5xl font-semibold text-gray-700 rounded-lg"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Like an open (source) book.
        </h2>

        <p className="text-2xl text-gray-400">
          We create our app in the open
          <br />& are proud contributors of the Open Source ecosystem
        </p>
      </Container> */}

      <Container>
        <div className="text-center">
          <div>
            <h2
              className="py-4 text-5xl font-semibold text-gray-700 rounded-lg text-center"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              <Dotify className="justify-center" size={10}>
                Write us a message
              </Dotify>
            </h2>

            <p className="text-gray-500 text-xl">
              Let's talk about how Recodable can help your next project get to
              the next level.
            </p>
          </div>

          <div className="py-16">
            <a
              href="mailto:hello@recodable.io"
              className="text-gray-700 hover:text-primary text-3xl font-bold border-b-4 hover:border-primary border-dashed"
            >
              hello@recodable.io
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

function Container({ className, children, ...forwardedProps }) {
  return (
    <div
      className={`relative overflow-hidden pb-24 ${className}`}
      {...forwardedProps}
    >
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
