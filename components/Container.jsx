import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import MenuItem from '@/components/MenuItem';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Toby Christopher – Developer, writer, photographer.',
    description: `Software developer, Photography enthusiast, and content creator.`,
    image: 'https://ditsche.dev/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-coal">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta content={meta.tags?.join(', ')} name="keywords" />
        <meta property="og:url" content={`https://ditsche.dev${router.asPath}`} />
        <link rel="canonical" href={`https://ditsche.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Toby Christopher" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ditschedev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-coal">
        <NextLink href="/" className="text-primary-500">
          <a>
            <Logo />
          </a>
        </NextLink>
        <div className="flex items-center">
          <MenuItem href="/">
            Home
          </MenuItem>
          <MenuItem href="/blog" exact={false}>
            Blog
          </MenuItem>
          <MenuItem href="/about">
            About
          </MenuItem>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="rounded p-2.5 h-10 w-10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <>
              {theme === 'dark' ? (
                <svg className="h-5 w-5 m-0 p-0 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              ) : (
                <svg className="h-5 w-5 m-0 p-0 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
              )}
              </>
            )}
          </button>
        </div>
      </nav>
      <main
        className="flex flex-col justify-center bg-white dark:bg-coal px-8 mt-8"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
