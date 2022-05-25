import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocumentPage extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8031403896285102'
            crossOrigin='anonymous'
          ></script>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap'
            rel='stylesheet'
            crossOrigin='true'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentPage;
