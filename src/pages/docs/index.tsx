import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Docs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={'Docs'}
          paragraph={`Here is some information that will help you understand why the platform looks and works exactly the way it does.`}
        />
        <Heading
          subTitle={`Issues`}
          paragraph={`Issue is a a problem is a separately existing problem, an idea or an environment in which there is a set of 
          problems of the same type, which in any form negatively affects a person and the human environment as a whole.`}
        />
        <Heading
          subTitle={`Consequences`}
          paragraph={`Consequences describe those negative external and internal side effects that may arise due to the existence 
          of a particular problem. These negative effects may vary and differ depending on the severity or localization of the problem, 
          but if we take them into account from the point of view of the entire globe, then one way or another they will be 
          presented in their entirety and in all their diversity.`}
        />
        <Heading
          subTitle={`Solutions`}
          paragraph={`Solutions are some basic concepts, ideas or activities, the study and use of which can help in solving a 
          particular problem. In this category, things can be indicated that each person can do individually, for himself or his 
          circle, or things that a group of people can do and develop. One way or another, these are solutions that will 
          somehow have a positive impact on the solution of the problem, which will be able to break the primary layers of 
          hostility and uncertainty and open to the world more fundamental and unique levers of pressure for each problem.`}
        />
      </main>
      <Footer />
    </>
  );
};

export default Docs;
