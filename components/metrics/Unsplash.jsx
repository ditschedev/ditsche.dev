import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@/lib/fetcher';
import StatsWrapper from '@/components/metrics/StatsWrapper';

export default function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  const downloads = format(data?.downloads);
  const views = format(data?.views);
  const likes = format(data?.likes);
  const followers = format(data?.followers);
  const link = 'https://unsplash.com/@tobychristopher';

  return (
    <>
      <StatsWrapper header="Unsplash Downloads" link={link} metric={downloads} />
      <StatsWrapper header="Unsplash Views" link={link} metric={views} />
      <StatsWrapper header="Unsplash Followers" link={link} metric={followers} />
    </>
  );
}
