import { Fragment, FC } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import { translate } from "../i18n";
import { RootState } from "../store";

const HomePage: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <Fragment>
      <Header fixed transparent />
      <section className="intro">
        <div className="intro_overlay"></div>
        <div>
          <h1>React</h1>
          <p>{translate('introText', language)}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default HomePage;