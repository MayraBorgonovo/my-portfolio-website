import About from "../components/about/About";
import Hero from '../components/hero/Hero';
import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/Header";
import Projects from "../components/projects/Projects";
import Tech from "../components/technologies/Tech";

const Home = () => {

  return (
    <>
      <MainNavigation />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;