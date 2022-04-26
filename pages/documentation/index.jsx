import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Rank from '../../components/Rank/Rank';
import Heading from '../../components/Heading/Heading';

const Docs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`Documentation`}
          paragraph={`Find ways how you can contribute`}
        />
        <div>
          <h3>Articles and Information</h3>
          <p>
            We dont want to become a second Wikipedia and a source of truth. We
            know how internet is spreading lots and lots of information, both
            correct and not so. Our articles and texts present a compilation of
            different articles, books, publications, news and other information
            from platforms we trust, from publishers and authors we believe, and
            from websites known worldwide. We try to compile information about
            any problem into sometimes brief or sometimes volumnous enough
            overview, which helps people to understand and grasp the main idea
            of a problem, and if needed, invrestigate further by themselves.
            Dont forget that we provide links under 'Resource' block of our
            articles. Each user can continue exploring the problem. We want only
            to point to the problem. Show what is happening right now, what are
            bad and good things, how can we fix issues, where we can search for
            them and how can we contribute. This is our main goal and main aim
            of EARTHQUITE platform. We just want to keep our Earth quite.
          </p>
          <h3>Ranking</h3>
          <p>
            We cannot and we will not divide problems into important and
            unimportant ones. Every problem here on Earth worth to be solved,
            and there is no queue. The only ranking we let ourselves to do is
            ranking of the difficulty of contribution. We can rank it because we
            contribute ourselves. Ranking will base upon how much are there to
            contribute, is it hard to find solutions, people and organizations,
            or for example everyone can do it and start contribute today? Lets
            see what ranks we use:
          </p>
          <div>
            <Rank rank={'rankOne'} />
            <Rank rank={'rankTwo'} />
            <Rank rank={'rankThree'} />
            <Rank rank={'rankFour'} />
            <Rank rank={'rankFive'} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Docs;
