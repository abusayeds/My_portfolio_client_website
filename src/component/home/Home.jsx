import Banner from "../banner/Banner";
import Projects from "../projects/Projects";
import Features from "../features/Features";
import Resume from "../resume/Resume";
import About from "../about/About";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <main>
      <div className="md:px-0 px-5">
        <>
          <Banner />
          <Projects />
          <Features />
          <Resume />
          <About />
          <Contact />
        </>
      </div>
    </main>
  );
};

export default Home;
