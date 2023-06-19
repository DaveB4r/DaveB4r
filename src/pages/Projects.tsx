import {Fragment, FC} from "react";
import { useSelector } from "react-redux";
import { translate } from "../i18n";
import {RootState} from "../store";
import calculatorImg from "../assets/calculator.png";
import calculatorGif from "../assets/calculator.gif";
import pokeApiImg from "../assets/pokeApi.png";
import pokeApiGif from "../assets/pokeApi.gif"
import layoutImg from "../assets/layout.png";
import layoutGif from "../assets/layout.gif"
import Card from "../components/Card";

const Projects: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
   return(
    <Fragment>
      <section id="projects" className="projects">
        <div className="projects__header">
          <h3 className="title">{translate('projectsTitle', language)}</h3>
          <p className="projects__description">{translate('projectsDescription', language)}</p>
        </div>
        <div className="projects__body">
          <Card img={calculatorImg} title={translate('calculatorTitle', language)} description={translate('calculatorDescription', language)} gif={calculatorGif}/>
          <Card img={pokeApiImg} title={translate('pokeApiTitle', language)} description={translate('pokeApiDescription', language)} gif={pokeApiGif}/>
          <Card img={layoutImg} title={translate('layoutTitle', language)} description={translate('layoutDescription', language)} gif={layoutGif}/>
        </div>
      </section>
    </Fragment>
   );
}

export default Projects;