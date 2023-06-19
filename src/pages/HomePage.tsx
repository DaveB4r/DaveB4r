import { Fragment, FC } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import { translate } from "../i18n";
import { RootState } from "../store";
import Typewriter from "typewriter-effect";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

const HomePage: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <Fragment>
      <Header fixed transparent />
      <main className="main__content" id="home">
        <div className="main__intro">
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [translate('introText', language),
                translate('aboutUsText', language)],

              }}
            />
          </h1>
          <div className="light x1"></div>
          <div className="light x2"></div>
          <div className="light x3"></div>
          <div className="light x4"></div>
          <div className="light x5"></div>
          <div className="light x6"></div>
          <div className="light x7"></div>
          <div className="light x8"></div>
          <div className="light x9"></div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Fragment>
    
  );
}

export default HomePage;