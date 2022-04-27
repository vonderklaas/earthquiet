import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import styles from './Team.module.scss';

const Team = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading title={`Team`} paragraph={`Meet our team`} />
        <ul className={styles.team}>
          <li className={styles.teamMember}>
            <img
              className={styles.teamMemberImage}
              src='https://avatars.githubusercontent.com/u/53371076?v=4'
              alt='Nick'
            />
            <h3>Nick - Software Developer</h3>
            <div className={styles.teamMemberLinks}>
              <a href='https://twitter.com/garbalau_twitt'>
                <FaTwitter />
                <span>https://twitter.com/garbalau_twitt</span>
              </a>
              <a href='https://github.com/garbalau-github'>
                <FaGithub />
                <span>https://github.com/garbalau-github</span>
              </a>
              <a href=' https://www.linkedin.com/in/garbalau-in/'>
                <FaLinkedinIn />
                <span> https://www.linkedin.com/in/garbalau-in/</span>
              </a>
            </div>
          </li>

          <li className={styles.teamMember}>
            <img
              className={styles.teamMemberImage}
              src='https://avatars.githubusercontent.com/u/86486215?v=4'
              alt='Anastasia'
            />
            <h3>Anastasia - Marketing Specialist, CMS Manager</h3>
            <div className={styles.teamMemberLinks}>
              <a href='https://twitter.com/bakedwithlovemd'>
                <FaTwitter />
                <span>https://twitter.com/bakedwithlovemd</span>
              </a>
              <a href='https://github.com/martiniucanastasia'>
                <FaGithub />
                <span>https://github.com/martiniucanastasia</span>
              </a>
              <a href='https://www.linkedin.com/in/anastasia-martinyk/'>
                <FaLinkedinIn />
                <span> https://www.linkedin.com/in/anastasia-martinyk/</span>
              </a>
            </div>
          </li>
        </ul>
        <Heading
          title={`Join The Team`}
          paragraph={`Are you a developer, designer, copywriter, environmentalist or just
            an enthusiast? Please, join us and share your ambitions. You can
            reach out us here: earthquite.com@gmail.com`}
        />
      </main>
      <Footer />
    </>
  );
};

export default Team;
