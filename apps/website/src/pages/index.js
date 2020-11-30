import React, { useState, useEffect } from 'react';
import Blogpost from '../components/Blogpost';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useRouteData } from 'react-static';
import StackList from '../components/StackList';
import Dotify from '../components/Dotify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SectionTitle from '../components/SectionTitle';

export default () => {
  const { posts } = useRouteData();

  return (
    <div>
      <Container>
        <div className="pattern absolute z-0 inset-0 lg:hidden" />

        <div className="hidden pattern w-96 h-96 absolute z-0 bottom-0 left-0 lg:block" />

        <div className="relative py-16 lg:py-32 px-4 sm:px-20 z-10 flex flex-col items-start">
          <h1
            className="bg-white text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 text-gray-700 rounded-lg px-4 py-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            We are
            <br />
            <Dotify className="bg-primary px-3 py-1 sm:px-6 sm:py-3 rounded-lg">
              <span style={{ color: '#F9FAFB' }}>Recodable</span>
            </Dotify>
          </h1>

          <div className="bg-white">
            <p className="px-2 sm:px-4 py-2 sm:text-xl lg:text-2xl font-light text-gray-600 rounded-lg">
              Independent development team that crafts{' '}
              <br className="hidden sm:block" />
              beautiful web and mobile products for amazing clients.
            </p>

            <StackList />
          </div>
        </div>

        <div className="hidden pattern absolute w-96 h-96 z-0 top-0 right-0 lg:block" />
      </Container>

      <Container className="px-4">
        <SectionTitle>
          <span>Our latest posts</span>
        </SectionTitle>

        <ol className="grid gap-8 sm:gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <li key={post.slug}>
              <Blogpost {...post} />
            </li>
          ))}
        </ol>

        <div className="text-center py-10 sm:py-16">
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

      <Container className="px-4">
        <div className="text-center">
          <div>
            <SectionTitle centered>Write us a message</SectionTitle>

            <p className="text-gray-500 sm:text-xl">
              Let's talk about how Recodable can help your next project get to
              the next level.
            </p>
          </div>

          <div className="py-16">
            <CopiableEmail />
          </div>
        </div>
      </Container>
    </div>
  );
};

function Container({ className, children, ...forwardedProps }) {
  return (
    <section
      className={`relative overflow-hidden pb-10 ${className}`}
      {...forwardedProps}
    >
      <div className="mx-auto max-w-lg-screen w-full">{children}</div>
    </section>
  );
}

// function Pattern({ className, ...forwardedProps }) {
//   return (
//     <div
//       {...forwardedProps}
//       className={`pattern w-96 h-96 absolute z-0 my-10 ${className}`}
//     />
//   );
// }

function CopiableEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div className="relative">
      {copied && (
        <div className="absolute top-0 left-0 right-0 -mt-6">
          <span className="font-light text-xs text-primary">Copied!</span>
        </div>
      )}

      <CopyToClipboard
        text="hello@recodable.io"
        className="text-gray-700 hover:text-primary text-2xl sm:text-3xl font-bold border-b-4 hover:border-primary border-dashed focus:outline-none active:outline-none"
        onCopy={() => setCopied(true)}
      >
        <button type="button">hello@recodable.io</button>
      </CopyToClipboard>
    </div>
  );
}
