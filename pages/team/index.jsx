import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Team = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Team</h1>
        <div>
          <h3>Meet Our Team</h3>
          <ul>
            <li>Nick</li>
            <li>Anastasia</li>
          </ul>
          <h3>Join The Team</h3>
          <p>
            Are you a developer, designer, copywriter, environmentalist or just
            an enthusiast? Please, join us and share your ambitions. You can
            reach out us here: earthquite.com@gmail.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Team;
