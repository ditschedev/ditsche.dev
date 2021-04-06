export default async (_, res) => {
  const userResponse = await fetch('https://api.github.com/users/ditschedev');
  const userReposResponse = await fetch(
    'https://api.github.com/users/ditschedev/repos?per_page=100'
  );

  const user = await userResponse.json();
  let repositories = await userReposResponse.json();

  if(typeof repositories !== 'array') {
    repositories = [];
  }

  const mine = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    followers: user.followers,
    stars
  });
};
