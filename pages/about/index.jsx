import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`About`}
          paragraph={`Find ways how you can contribute`}
        />
        <div>
          <h3>Earhhquiet.com</h3>
          <p>
            Earhhquiet.com is a free, web-based resource and community created
            platform, which is maintained by enthusiasts only. We distill the
            facts about world problems use and its effects on our lives into
            practical guidance for interested persons or for those who are
            thinking about or want to contribute and make our world a better
            place.
          </p>
          <h3>Contributors</h3>
          <p>
            The Earthquiet.com team of authors, editors, and contributors
            collect and present important information about world problems in a
            convenient (as it seems to us) format. We do research and analyse of
            everything we want to share, and strive to provide best experience
            of exploring world problems.
          </p>
          <h3>Mindset</h3>
          <p>
            Our mind is set towards openness, transparency, freedom of choice,
            tolerance and equality. We think that any problem can and should be
            resolved, and no solution too bold, and no idea too crazy. If want
            you want to create it - we will support you, you can be sure of
            that.
          </p>
          <h3>Mission</h3>
          <p>
            We feel like we need a community which can contribute in all kinds
            of ways and see reports of their contributions. We advice you to
            take each problem as a chance, as a opportunity to work towards a
            common goal, and to answer the question: Why Earth is not quiet
            anymore?
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
