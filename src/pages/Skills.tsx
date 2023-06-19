import { Fragment, FC} from 'react';
import { useSelector } from "react-redux";
import { translate } from "../i18n";
import { RootState } from "../store";
import Circle from '../components/Circle';
import { FaCss3Alt, FaHtml5,FaJs,FaPhp,FaLaravel,FaReact } from 'react-icons/fa';
import { SiTypescript, SiCodeigniter, SiMysql, SiCsharp, SiSass } from 'react-icons/si';

const Skills: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return(
    <Fragment>
      <h3 id="skills" className='title skills-title'>{translate('skills', language)}</h3>
      <div  className="skills">
        <Circle percentageMax={90} icon={<FaHtml5 />} classApply="html" />
        <Circle percentageMax={85} icon={<FaCss3Alt />} classApply="css" />
        <Circle percentageMax={90} icon={<FaJs />} classApply="js" />
        <Circle percentageMax={70} icon={<SiTypescript />} classApply="ts" />
        <Circle percentageMax={80} icon={<FaPhp />} classApply="php" />
        <Circle percentageMax={72} icon={<SiMysql />} classApply="mysql" />
        <Circle percentageMax={52} icon={<SiCsharp />} classApply="csharp" />
      </div>    
      <h3 className='title skills-title'>{translate('frameworks', language)}</h3> 
      <div className="skills">        
        <Circle percentageMax={75} icon={<FaLaravel />} classApply="laravel" />
        <Circle percentageMax={85} icon={<SiCodeigniter />} classApply="codeigniter" />
        <Circle percentageMax={65} icon={<FaReact />} classApply="react" />
        <Circle percentageMax={85} icon={<SiSass />} classApply="sass" />
      </div> 
    </Fragment>
  );
};

export default Skills;