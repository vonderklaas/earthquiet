import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`About Us`}
          paragraph={`Discover more information about us and things we think are important`}
        />
        <Heading
          subTitle={`EARTHQUIET`}
          paragraph={`EARTHQUIET is a free, web-based resource and community created
          platform, which is maintained by enthusiasts only. We distill the
          facts about world issues use and its effects on our lives into
          practical guidance for interested persons or for those who are
          thinking about or want to contribute and make our world a better
          place.`}
        />
        <Heading
          subTitle={`Research`}
          paragraph={`
          Our articles are based only on verified sources. We explore each
          problem and try to get to the core. We provide consequences and
          possible solutions as simple and understandable thoughts.`}
        />
        <Heading
          subTitle={`Not about money`}
          paragraph={`EARTHQUIET is a non-profit and free platform without any
          privileges or paid options. We exist only because of our own
          conscious will. We are independent, but always accept help. Feel
          free to support us`}
        />

        <Heading
          subTitle={`Contributors`}
          paragraph={`Our team is very small now, but of course we plan expanding. Our
          authors, developers, editors, and contributors collect and present
          important information about world issues in a convenient (as it
          seems to us) format. We do research and analyse of everything we
          want to share, and strive to provide best experience for our users.`}
        />
        <Heading
          subTitle={`Mindset`}
          paragraph={`Our mind is set towards openness, transparency, freedom of choice,
          tolerance and equality. We think that any issue can and should be
          resolved, and no solution too bold, and no idea too crazy. If want
          you want to create it - we will support you, you can be sure of
          that.`}
        />
        <Heading
          subTitle={`Mission`}
          paragraph={`We feel like we need a community which can contribute in all kinds
          of ways and see reports of their contributions. We advice you to
          take each issue as a chance, as a opportunity to work towards a
          common goal, and to answer the question: Why EARTH is not quiet
          anymore?`}
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
