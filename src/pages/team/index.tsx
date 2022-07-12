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
        <Heading
          title={`Team`}
          paragraph={`Meet those who work on EARTHQUIET`}
        />
        <ul className={styles.team}>
          <li className={styles.teamMember}>
            <img
              className={styles.teamMemberImage}
              src='https://avatars.githubusercontent.com/u/53371076?v=4'
              alt='Nick'
            />
            <h3>Founder</h3>
            <div className={styles.teamMemberLinks}>
              <a href='https://twitter.com/garbalau_twitt'>
                <FaTwitter />
                <span>https://twitter.com/garbalau_twitt</span>
              </a>
              <a href='https://www.linkedin.com/in/garbalau-in/'>
                <FaLinkedinIn />
                <span> https://www.linkedin.com/in/garbalau-in/</span>
              </a>
              <a href='https://github.com/garbalau-github'>
                <FaGithub />
                <span>https://github.com/garbalau-github</span>
              </a>
            </div>
          </li>
          <li className={styles.teamMember}>
            <img
              className={styles.teamMemberImage}
              src='https://avatars.githubusercontent.com/u/86486215?v=4'
              alt='Anastasia'
            />
            <h3>Co-Founder</h3>
            <div className={styles.teamMemberLinks}>
              <a href='https://twitter.com/bakedwithlovemd'>
                <FaTwitter />
                <span>https://twitter.com/bakedwithlovemd</span>
              </a>
              <a href='https://www.linkedin.com/in/anastasia-martinyk/'>
                <FaLinkedinIn />
                <span> https://www.linkedin.com/in/anastasia-martinyk/</span>
              </a>
              <a href='https://github.com/martiniucanastasia'>
                <FaGithub />
                <span>https://github.com/martiniucanastasia</span>
              </a>
            </div>
          </li>
        </ul>
        <Heading
          subTitle={`Join Us`}
          paragraph={`Do you want to be a part of a team? Are you a developer, designer, copywriter, environmentalist or just
            an enthusiast? Please, join us and share your ambitions.`}
        />
        <div>
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

export default Team;
