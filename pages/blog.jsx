import { useState } from 'react';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      frontMatter.tags.some(tag => tag.toLowerCase().includes(searchValue.toLowerCase()))
    );

  return (
    <Container
      title="Blog – Toby Christopher"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
      image={`https://ditsche.dev/static/images/blog/og.png`}
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I got a passion for a lot of things. Development, photography, designing and last but not least: writing. That's why I started
          a personal blog. I love playing around and learning new stuff and writing helps me to strengthen it even better.
          <br/>
          And you guys can (hopefully) get quality content out of this - seems like a win-win situation innit?
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!filteredBlogPosts.length && 
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        }
        <div className="divide-y dark:divide-gray-700">
          {filteredBlogPosts.map((frontMatter) => (
            <div key={frontMatter.title} className="py-8">
              <BlogPost {...frontMatter} />
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
