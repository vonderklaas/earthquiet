import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Cookies = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading title={`Cookies`} paragraph={`A cookie? 🍪`} />
        <div>
          <Heading
            subTitle={`Storage`}
            paragraph={`Currently we are not collecting any cookies, maybe something
            will change in the future, dont worry, we will let you know!`}
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

export default Cookies;
