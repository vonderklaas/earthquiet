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
          title={`Docs`}
          paragraph={`Here are some of our methods of work and facts about how certain things are arranged and work on our site.`}
        />
        <div>
          <h3>Information</h3>
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
            of EARTHQUIET platform.
          </p>
          <h3>Ranking</h3>
          <p>
            We cannot and we will not divide problems into important and
            unimportant ones. Every problem here on Earth worth to be solved,
            and there is no queue. The only ranking we let ourselves to do is
            complexity. We consider it reasonable to evaluate the complexity of
            a particular problem according to two criteria. The amount of
            information that we have on this issue, as well as the amount of
            time and effort that is needed to solve or at least bring the
            problem to an acceptable state.
          </p>
          <p>
            Following these parameters, of course, approximately and
            subjectively, one or another rank can be attributed to the problem.
            This does not mean that a problem with a smaller rank than another
            is less important, it only means that if you want to tackle it, you
            will need significantly less effort, and there will be significantly
            more information about this problem, which ultimately puts it on an
            easier level.
          </p>
          <div>
            <h3>UI</h3>
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
