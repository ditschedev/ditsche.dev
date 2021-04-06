import Link from 'next/link';
import useSWR from 'swr';
import { format, parseISO } from 'date-fns';

import fetcher from '@/lib/fetcher';

const BlogPost = ({ title, summary, slug, publishedAt }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.views;

  return (
    <div>
      <p className="text-sm text-gray-500">
        <time dateTime={publishedAt}>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</time>
      </p>
      <Link href={`/blog/${slug}`}>
        <a className="mt-2 block">
          <p className="text-xl font-semibold text-gray-900 dark:text-primary-50 transition hover:text-black dark:hover:text-white">
            {title}
          </p>
        </a>
      </Link>
      <p className="mt-3 text-gray-500 dark:text-gray-300 text-lg">
        {summary}
      </p>
      <div className="mt-3">
        <Link href={`/blog/${slug}`}>
          <a className="text-base font-semibold text-primary-600 dark:text-primary-500 transition hover:text-primary-500 dark:hover:text-primary-400">
            Read full article &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
