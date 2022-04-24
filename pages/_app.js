import { ThemeProvider } from 'next-themes';

import '../styles/Globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
