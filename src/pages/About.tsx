import { Fragment, FC, useState } from "react";
import { useSelector } from "react-redux";
import myself from "../assets/myself.jpg";
import { translate } from "../i18n";
import { RootState } from "../store";
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const About: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  const [selectedOption, setSelectedOption] = useState('small');
  let text = <p>{translate('aboutParagraph1', language)}</p>;
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);    
  };
  if(selectedOption === 'small'){
    text = <p>{translate('aboutParagraph1', language)}</p>;
  }else if(selectedOption === 'medium'){
    text = <p>{translate('aboutParagraph2', language)}</p>;
  } else if(selectedOption === 'large'){
    text = <p>{translate('aboutParagraph3', language)}</p>;
  }
  return (
    <Fragment >
      <section id="about" className="about">
        <h1 className="title">{translate('aboutTitle', language)}</h1>
        <div className="container-info">
          <div className="radio-text">
            <label htmlFor="small">
              <input 
                aria-label={translate('aboutSmallBtn', language)}
                type="radio" 
                name="text-measure" 
                id="small" 
                value="small"
                checked={selectedOption === 'small'}
                onChange={handleOptionChange}
              />
            </label>
            <label htmlFor="medium">
              <input 
                aria-label={translate('aboutMediumBtn', language)}
                type="radio" 
                name="text-measure" 
                id="medium" 
                value="medium"
                checked={selectedOption === 'medium'}
                onChange={handleOptionChange}
              />
            </label>
            <label htmlFor="large">
              <input 
                aria-label={translate('aboutLargeBtn', language)} 
                type="radio" 
                name="text-measure" 
                id="large" 
                value="large"
                checked={selectedOption === 'large'}
                onChange={handleOptionChange}
              />
            </label>
          </div>
          {text}
          <div className="social">
            <a href="https://github.com/DaveB4r" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon"  /></a>
            <a href="https://www.linkedin.com/in/juan-david-34b9051a1/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon"  /></a>
            <a href="mailto:davidpinedaaaa@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail className="icon"  /></a>
            <a href="https://wa.me/573158957774" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp className="icon"  /></a>            
          </div>
        </div>
        <div className="container-photo">
          <figure>
            <img src={myself} alt="myself" />
            <figcaption className="title">{translate('greetig', language)}</figcaption>
          </figure>          
        </div>
      </section>
    </Fragment>
  );
}

export default About;