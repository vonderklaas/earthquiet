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
          paragraph={`Here is some information that will help you understand why the site looks and works exactly the way it works.`}
        />
        <div>
          <h3>Information</h3>
          <p>In progress...</p>
          <h3>Ranking</h3>
          <p>In progress...</p>
          {/* <p>
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
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Docs;
