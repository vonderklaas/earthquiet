import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Donate = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`Donate`}
          paragraph={`Your donation will go on funding for platform only`}
        />
        <div>
          <h3>Why we need your support</h3>
          <p>
            We want to mention that we are a non-profit platform that depends
            only on donations and enthusiast contribution. We need that to stay
            online and constantly evolve. Of course we understand that 99%
            people who come to our platform just want to get information. This
            is the internet, it simply works like that. But if everyone who
            reads us and want to contribute gave just a little, we could keep
            our platform leading. We don't say the price, it is up to you only.
          </p>
          <p>
            Earthquite.com is a place to learn, explore and contribute, not a
            place for advertising. But if we were useful to you, and you want to
            support our project, please consider making a donation.
          </p>
          <p>Thanks, EARTHQUITE Team</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Donate;
