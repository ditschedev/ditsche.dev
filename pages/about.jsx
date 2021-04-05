import Link from 'next/link';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Toby Christopher">
      <div className="flex flex-col justify-center items-start max-w-3xl w-full mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 text-lg">
          <p>
            Hey, I’m Toby. I'm a developer, writer, and photographer.
          </p>
        </div>
      </div>
    </Container>
  );
}
