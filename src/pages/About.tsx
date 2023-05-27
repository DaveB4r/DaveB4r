import { Fragment, FC } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import aboutImg from "../assets/1.jpg";
import { translate } from "../i18n";
import { RootState } from "../store";

const About: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <Fragment>
      <Header />
      <section>
        <div className="container">
          <h1>{translate('about', language)}</h1>
          <img src={aboutImg} alt="about" />
          <p>{translate('aboutText', language)}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default About;