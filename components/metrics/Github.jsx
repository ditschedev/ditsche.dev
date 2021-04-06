import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@/lib/fetcher';
import StatsWrapper from '@/components/metrics/StatsWrapper';

export default function Github() {
  const { data } = useSWR('/api/github', fetcher);

  const stars = format(data?.stars);
  const link = 'https://github.com/ditschedev';

  return <StatsWrapper header="Github Stars" link={link} metric="15" />;
}
