import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading title={`Privacy`} paragraph={`How we manage your privacy?`} />
        <div>
          <Heading
            subTitle={`Data Collection`}
            paragraph={`We are not collecting any data of our users`}
          />
          <Heading
            subTitle={`Contact`}
            paragraph={`Additional questions? No problem!`}
          />
          <p>
            You can reach out us here:{' '}
            <a href='mailto:earthquiet.com@gmail.com'>
              earthquiet.com@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
