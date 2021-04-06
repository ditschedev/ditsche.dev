import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug, getSurroundingArticles } from '@/lib/mdx';
import BlogLayout from '@/layouts/BlogLayout';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ mdxSource, frontMatter, next, previous }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <BlogLayout next={next} previous={previous} frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
  const {previous, next} = await getSurroundingArticles('blog', params.slug);
  return { props: { ...post, previous, next } };
}
