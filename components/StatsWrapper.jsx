import TextMarker from '@/components/TextMarker';
import Unsplash from '@/components/metrics/Unsplash';
import Github from '@/components/metrics/Github';

export default function StatsWrapper() {
  return (
    <div
      className="mx-auto">
      <div className="relative pt-4">
        {/*<h2 className="text-gray-800 dark:text-primary-100 text-3xl font-black leading-tight">A few <TextMarker size="sm">numbers</TextMarker></h2>*/}
        <div className="grid grid-cols-1 gap-y-12 gap-x-32 sm:grid-cols-2">
          <Unsplash />
          <Github />
        </div>
      </div>
    </div>
  )
}