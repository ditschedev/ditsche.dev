import redis from '@/lib/redis';

export default async (req, res) => {
  const { slug } = req.query;

  if (req.method === 'POST') {
    const entry = JSON.parse((await redis.hget('views', slug)) || 'null');

    if(entry === null) {
      await redis.hset('views', slug, JSON.stringify({
        views: 1
      }));
      return res.status(200).json({
        views: 1
      });
    }

    entry.views++;

    await redis.hset('views', slug, JSON.stringify(entry));

    return res.status(200).json(entry);
  }

  if (req.method === 'GET') {
    const entry = JSON.parse((await redis.hget('views', slug)) || 'null');

    const views = entry?.views || 0;

    return res.status(200).json({ views });
  }
};
