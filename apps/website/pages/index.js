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
import ProjectItem from '../components/ProjectItem';

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
                  className="bg-primary absolute top-0 bottom-0 left-0 rounded-lg overflow-hidden z-10"
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

        <div className="text-center py-10 lg:py-16">
          <Link href="/blog">
            <a>
              <Button type="button" theme="primary">
                Read more stories
              </Button>
            </a>
          </Link>
        </div>
      </Container>

      <Container className="mb-14">
        <div className="mb-10 px-4">
          <SectionTitle>Like an open (source) book</SectionTitle>

          <p className="sm:text-xl text-gray-400">
            We create our app in the open
            <br />& are proud contributors of the open source ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <ProjectItem
            title="No More WhatsApp"
            description="Information website to learn how to get your data out of WhatsApp before you delete your account and read it back."
            url="http://nomorewhatsapp.com/"
            extras={[
              <a
                href="https://www.producthunt.com/posts/no-more-whatsapp?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-no-more-whatsapp"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=281124&theme=light"
                  alt="No More WhatsApp - Learn how to export your data from WhatsApp. | Product Hunt"
                  className="h-10"
                />
              </a>,
            ]}
            links={[
              <a
                href="https://github.com/recodable/nomorewhatsapp"
                target="_blank"
                className="text-gray-400 hover:text-primary"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>,
            ]}
            src="/projects/nomorewhatsapp.png"
            alt="No More WhatsApp screenshot"
          />

          <ProjectItem
            reverse
            title="React Headless Notifier"
            description="React Headless Notifier is component library for building highly customizable notification system. This library is lightweight, and ultra-customizable, but do not render any markup or styles for you. This effectively means that React Headless Notifier is a headless UI library"
            url="https://react-headless-notifier.recodable.io/"
            links={[
              <a
                href="https://github.com/recodable/react-headless-notifier"
                target="_blank"
                className="text-gray-400 hover:text-primary"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>,
            ]}
            src="/projects/react-headless-notifier.png"
            alt="React Headless Notifier"
          />
        </div>
      </Container>

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

function Container({ className = '', children, ...forwardedProps }) {
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
        className="text-gray-700 text-2xl sm:text-3xl font-bold border-b-4 hover:border-primary border-dashed focus:outline-none active:outline-none hover:text-primary"
        onCopy={() => setCopied(true)}
      >
        <button type="button">hello@recodable.io</button>
      </CopyToClipboard>
    </div>
  );
}
