import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import TextMarker from '@/components/TextMarker';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import StatsWrapper from '@/components/StatsWrapper';

export default function Home({ posts }) {

  const newestPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    ).slice(0, 3);

  return (
    <Container>
      <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center mb-16">
        <div className="w-40 h-40 rounded-full mb-12 bg-primary-50 dark:bg-gray-900 flex items-center justify-center">
          <Image src="/static/images/memoji.png" alt="Memoji of myself" width="164" height="164" />
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Hi, I'm Toby 🤙</h2>
        <h1 className="text-gray-800 dark:text-primary-100 text-3xl sm:text-5xl md:text-6xl font-black leading-tight">
          Developing <TextMarker size="sm">software</TextMarker>. <br/>
          Designing <TextMarker size="sm">applications</TextMarker>. <br/>
          Capturing <TextMarker size="sm">moments</TextMarker>.
        </h1>

        {/*<div className="mt-24 space-x-4">*/}
        {/*  <Link href="/about">*/}
        {/*    <a className="inline-flex items-center px-4 py-2 border border-coal dark:border-white text-base font-medium rounded-md shadow-sm text-coal dark:text-white bg-transparent transition hover:bg-coal dark:hover:bg-white hover:text-white dark:hover:text-coal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">About me</a>*/}
        {/*  </Link>*/}
        {/*  <Link href="/blog">*/}
        {/*    <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">To my blog &rarr;</a>*/}
        {/*  </Link>*/}
        {/*</div>*/}

      </div>
      <div className="flex flex-col justify-center items-start max-w-3xl w-full mx-auto mb-48">
        <StatsWrapper />
      </div>
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h2 className="text-gray-800 dark:text-primary-100 text-3xl font-black leading-tight">From the <TextMarker size="sm">blog</TextMarker></h2>
        <p className="mt-4 text-base text-gray-500 dark:text-gray-300 text-lg">
          I love writing an so I decided to share things that I've learned or think are worth sharing. Below you'll find my latest three
          articles. If you want to see all, go to my <Link href="/blog"><a className="text-base font-semibold text-primary-600 dark:text-primary-500 transition hover:text-primary-500 dark:hover:text-primary-400">blog</a></Link> page!
        </p>
        <div className="mt-2 w-full divide-y dark:divide-gray-700">
          {newestPosts.map(frontmatter => (
            <div key={frontmatter.slug} className="py-8">
              <BlogPost {...frontmatter} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}


export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
