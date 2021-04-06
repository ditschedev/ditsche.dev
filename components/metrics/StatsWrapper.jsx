export default function StatsWrapper({ header, link, metric }) {
  return (
    <a
      aria-label={header}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      <span className="mt-1 block text-base text-gray-700 dark:text-gray-300 mb-2">{header}</span>
      <span className="block text-3xl font-bold text-coal dark:text-primary-50">{metric || '-'}</span>
    </a>
  );
}
