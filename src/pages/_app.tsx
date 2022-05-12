import Head from 'next/head';
import '../styles/Globals.scss';

import { AppProps } from 'next/app';

import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>EARTHQUIET</title>
        <meta name='theme-color' content='#ffffff' />
        <meta name='application-name' content='EARTHQUIET' />
        <meta name='apple-mobile-web-app-title' content='EARTHQUIET' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta
          name='keywords'
          content='EARTH, EARTHQUIET, Global Issues, World, Issues, Global Warming, Climate Change, Problems, Solutions, Start-ups, Contribution'
        />
        <meta
          name='description'
          content='EARTHQUIET - is a free, web-based resource of world issues and community created
      platform, which is maintained by enthusiasts only.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap'
          rel='stylesheet'
          crossOrigin='true'
        />
      </Head>
      <NextNProgress
        color='rgb(43, 153, 122)'
        startPosition={0.3}
        stopDelayMs={0}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
