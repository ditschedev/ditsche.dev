import '@/styles/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { usePanelbear } from '@/lib/panelbear';

export default function App({ Component, pageProps }) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
