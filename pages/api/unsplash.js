export default async (_, res) => {
  const statsUrl = `https://api.unsplash.com/users/${process.env.UNSPLASH_USERNAME}/statistics/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  const apiStatsResponse = await fetch(statsUrl);
  const stats = await apiStatsResponse.json();

  const profileUrl = `https://api.unsplash.com/users/${process.env.UNSPLASH_USERNAME}/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  const apiProfileResponse = await fetch(profileUrl);
  const profile = await apiProfileResponse.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    views: stats.views.total,
    downloads: stats.downloads.total,
    followers: profile.followers_count,
    likes: profile.total_likes
  });
};
