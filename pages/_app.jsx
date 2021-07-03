import '@/styles/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { usePanelbear } from '@/lib/panelbear';

export default function App({ Component, pageProps }) {
  usePanelbear("IRoWUQ6VJYi");

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
