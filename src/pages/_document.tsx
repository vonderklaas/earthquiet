import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocumentPage extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap'
            crossOrigin=''
            rel='stylesheet'
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
