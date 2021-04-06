import '@/styles/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { useFathom } from '@/lib/fathom';

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
