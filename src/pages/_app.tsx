import Head from 'next/head';
import '../styles/Globals.scss';

import { AppProps } from 'next/app';

const EarthquietApp = ({ Component, pageProps }: AppProps) => {
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
          content='EARTH, EARTHQUIET, Global Issues, World, Issues, Solutions, Global Warming, Climate Change, Problems, Solutions, Start-ups, Contribution'
        />
        <meta
          name='description'
          content='We are free and non-comercial web-based platform of global world problems and solutions, which is maintained by enthusiasts and supporters.'
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
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default EarthquietApp;
