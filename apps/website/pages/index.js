import React, { useState, useEffect } from 'react';
import Blogpost from '../components/Blogpost';
import Link from 'next/link';
import Button from '../components/Button';
import StackList from '../components/StackList';
import { Dot } from '../components/Dotify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SectionTitle from '../components/SectionTitle';
import { AnimatePresence, motion } from 'framer-motion';
import getPosts from '../utils/getPosts';

export default function Home({ posts }) {
  return (
    <div>
      <Container>
        <Pattern className="hidden w-96 h-96 absolute z-0 bottom-0 left-0 lg:block" />

        <div className="relative py-16 lg:py-32 px-4 sm:px-20 z-10 flex flex-col items-start">
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 text-gray-700 rounded-lg px-4 py-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <span className="bg-white">We are</span>
            <br />
            <motion.div>
              <motion.div className="relative mt-1 sm:mt-2 px-3 py-1 sm:px-6 sm:py-3 flex items-baseline">
                <motion.div
                  className="bg-primary absolute top-0 bottom-0 left-0 z-10 rounded-lg overflow-hidden z-10"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    delay: 0.4,
                    damping: 15,
                  }}
                >
                  <div className="flex items-baseline px-3 py-1 sm:px-6 sm:py-3 ">
                    <span style={{ color: '#F9FAFB' }}>Recodable</span>

                    <Dot />
                  </div>
                </motion.div>

                <span>Recodable</span>

                <Dot colorClassName="bg-white" />
              </motion.div>
            </motion.div>
          </h1>

          <div className="bg-white">
            <p className="px-2 sm:px-4 py-2 sm:text-xl lg:text-2xl font-light text-gray-600 rounded-lg">
              Independent development team that crafts{' '}
              <br className="hidden sm:block" />
              beautiful web and mobile products for amazing clients.
            </p>

            <StackList />
          </div>

          <Pattern className="lg:hidden w-full h-24" />
        </div>

        <Pattern className="hidden absolute w-96 h-96 z-0 top-0 right-0 lg:block" />
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
          <Link href="/blog">
            <a>
              <Button type="button" theme="primary">
                Read more stories
              </Button>
            </a>
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
}

export async function getStaticProps(context) {
  return {
    props: { posts: await getPosts() },
  };
}

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

function Pattern({ className, ...forwardedProps }) {
  return (
    <motion.svg
      // viewBox="0 0 52 26"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary fill-current ${className}`}
      {...forwardedProps}
    >
      <defs>
        <pattern
          id="wiggle"
          x="0"
          y="0"
          width={52}
          height={26}
          patternUnits="userSpaceOnUse"
        >
          <motion.path
            d="M10 10c0-2.21-1.79-4-4-4a6 6 0 01-6-6h2c0 2.21 1.79 4 4 4a6 6 0 016 6c0 2.21 1.79 4 4 4a6 6 0 016 6c0 2.21 1.79 4 4 4v2a6 6 0 01-6-6c0-2.21-1.79-4-4-4a6 6 0 01-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z"
            fill="currentColor"
            fillRule="evenodd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ opacity: { duration: 1 } }}
          />
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#wiggle)"></rect>
    </motion.svg>
  );
}

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
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 right-0 -mt-6"
          >
            <span className="font-light text-xs text-primary">Copied!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <CopyToClipboard
        text="hello@recodable.io"
        className="text-gray-700 text-2xl sm:text-3xl font-bold border-b-4 hover:border-primary border-dashed focus:outline-none active:outline-none hover:text-primary "
        onCopy={() => setCopied(true)}
      >
        <button type="button">hello@recodable.io</button>
      </CopyToClipboard>
    </div>
  );
}
