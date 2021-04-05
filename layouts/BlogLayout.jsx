import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import Link from 'next/link';

const editUrl = (slug) =>
  `https://github.com/ditschedev/ditsche.dev/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter, next, previous }) {

  return (
    <Container
      title={`${frontMatter.title} – Toby Christopher`}
      description={frontMatter.summary}
      image={`https://ditsche.dev${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <p className="text-base text-gray-500 mb-2">
          <time dateTime={frontMatter.publishedAt}>{format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}</time>
        </p>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-primary-50">
          {frontMatter.title}
        </h1>
        <div className="flex flex-row justify-between items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Toby Christopher"
              height={32}
              width={32}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {!frontMatter.by && 'Toby Christopher'}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32">
            {frontMatter.readingTime.text}
            {/*{` • `}*/}
            {/*<ViewCounter slug={frontMatter.slug} />*/}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full text-lg">
          {children}
        </div>
        <div className="flex items-start justify-center mt-14 w-full">
          <h4 className="text-sm mr-2 text-gray-700 dark:text-gray-300">Tags: </h4>
          <div className="space-x-2 flex-1 -mt-0.5">
            {frontMatter.tags?.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {tag}
              </span>
            ))}
          </div>
          <div className="ml-4 text-sm text-gray-500 dark:text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300">
            <a
              href={editUrl(frontMatter.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Edit on Github'}
            </a>
          </div>
        </div>
        <hr className="w-full my-8 border-gray-200 dark:border-gray-800" />
        <div className="grid grid-cols-2 gap-8 lg:gap-20">
          <div className="col-span-2 lg:col-span-1">
            {previous &&
            <>
              <h5 className="text-sm text-gray-500 mb-2">Previous article</h5>
              <Link href={`/blog/${previous.slug}`}>
                <a className="flex flex-row items-start space-x-2 text-base font-semibold text-primary-600 dark:text-primary-500 transition hover:text-primary-500 dark:hover:text-primary-400">
                  <span>&larr;</span> <span>{previous.title}</span>
                </a>
              </Link>
            </>
            }
          </div>
          <div className="col-span-2 lg:col-span-1">
            {next &&
            <>
              <h5 className="lg:text-right text-sm text-gray-500 mb-2">Next article</h5>
              <Link href={`/blog/${next.slug}`}>
                <a className="flex flex-row items-start space-x-2 text-base font-semibold text-primary-600 dark:text-primary-500 transition hover:text-primary-500 dark:hover:text-primary-400">
                  <span>{next.title}</span> <span>&rarr;</span>
                </a>
              </Link>
            </>
            }
          </div>
        </div>
      </article>
    </Container>
  );
}
