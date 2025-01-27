import '@/styles/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
