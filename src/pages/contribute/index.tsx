import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Contribution = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={'Contribution'}
          paragraph={`Have you studied the problems and want to be part of the driving force behind their resolution? 
          There are a number of things you can do.`}
        />
        <Heading
          subTitle={`Projects`}
          paragraph={`Are you a manager, developer or designer? Create projects and attract attention. 
          You can concentrate on a single issue and learn how it can be fixed. Apply your knowledge and create your 
          own places where you work on solutions. Who knows, there is a good chance that your project will grow into a start-up`}
        />
        <Heading
          subTitle={`Spreading`}
          paragraph={`Are you an influencer? Well, probably anyone owns a page on social media. You can use it!
          Share our articles and website with friends and family or your audience. Build buzz on social media, share your thoughts and
          collect opinions. Communication is key.`}
        />
        <Heading
          subTitle={`Invest`}
          paragraph={`Do you have your own capital that you want to invest somewhere? Invest your money in growing start-ups.
          Things like renewable electricity rely pretty hard on investment. If you want to help to other organizations or people, 
          you can find and participate in donation campaigns.`}
        />
        <Heading
          subTitle={`Join Us`}
          paragraph={`You want to help us with EARTHQUIET? Sure, join our team and be a part of the community. Feel free to contact us.`}
        />
      </main>
      <Footer />
    </>
  );
};

export default Contribution;
