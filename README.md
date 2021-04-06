# ditsche.dev

My personal website and blog.

## Running the app

```bash
$ git clone https://github.com/ditschedev/ditsche.dev.git
$ cd ditsche.dev
$ yarn
$ yarn dev
```
Create a `.env.local` file similar to [`.env.example`](https://github.com/ditschedev/ditsche.dev/blob/master/.env.example).

## Built with

- [Next.js](https://nextjs.org/)
- [redis](https://redis.io)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)

## Redis
To list all posts with captured views run
```graphql
query {
  redisHGetAll(key: "views") {
    field
    value
  }
}
```
in Upstash's GraphQL Explorer


## Deploy
Deploy directly to Vercel using the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fditschedev%2Fditsche.dev)