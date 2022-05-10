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
          paragraph={`Your donation will help our platform grow and remain adds-free`}
        />
        <div>
          <h3>Why we need you</h3>
          <p>
            As you have already noticed, we dont run any adds. We are an
            organization that exists only through the work of enthusiasts and
            donations from outside. Of course, like many others we want to stay
            online and constantly evolve. We understand that 99% people who come
            to our platform just want to get information. This is the how the
            internet works, and we understand it. If you feel like you want to
            help and support us, please fell free to contribute as much as you
            want. Thanks to dontations we could keep our platform alive. We dont
            say the price, it is up to you only.
          </p>
          <p>
            EARTHQUIET is a place to learn, explore and contribute, not a place
            for advertising. But if we were useful to you, and you want to
            support our project, please consider making a donation.
          </p>
          <p>Thanks, EARTHQUIET Team</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Donate;
