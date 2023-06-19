import { useCallback, useState, useEffect, useRef, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { RootState } from "../store";
import { setLanguage } from "../store/actions/langActions";
import { translate } from "../i18n";
import LogoImg from '../assets/dev-logo.png';

interface HeaderProps{
  fixed ?: boolean;
  transparent ?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);

  let headerClass = 'header';
  if (fixed) headerClass += ' header--fixed';
  if (transparent) headerClass += ' header--transparent';

  const handleClickOutside = useCallback(() => {
    if (showDropdown) setShowDropdown(showDropdown);
  }, [showDropdown, setShowDropdown]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const chooseLanguage = (value: string) => {
    setShowDropdown(false);
    dispatch(setLanguage(value));
  };
  
  const scrollTo = (id:string) => {
    const goTo = document.getElementById(id);
    goTo?.scrollIntoView({behavior: 'smooth'});
    setShowMenu(!showMenu);
  }
  
  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header__brand">
          <h1><a href="#home" onClick={ () => scrollTo("home") }><img src={LogoImg} alt="myLOgo" className="logo"/></a></h1>
        </div>
        <div className="header__nav">
          <div className="header__nav_lang">
            <p className="selected" onClick={() => setShowDropdown(true)}>{language}</p>
            {showDropdown && <ul className="dropdown" ref={dropdownEl}>
              <li onClick={() => chooseLanguage('EN')}>EN</li>
              <li onClick={() => chooseLanguage('DE')}>DE</li>
              <li onClick={() => chooseLanguage('FR')}>FR</li>
              <li onClick={() => chooseLanguage('ES')}>ES</li>
            </ul>
            }
          </div>
          
        </div>
        <div className="header__nav_toggle" onClick={() => handleShowMenu()} aria-hidden={showMenu}>
          <FaBars />
        </div>
        <ul className={"header__nav_menu" + (showMenu || window.screen.width > 550 ? '' : ' hide')}>
        <li><a href="#home" onClick={ () => scrollTo("home") }>{translate('home', language)}</a></li>
        <li><a href="#about" onClick={ () => scrollTo("about") }>{translate('about', language)}</a></li>
        <li><a href="#skills" onClick={ () => scrollTo("skills") }>{translate('skills', language)}</a></li>
        <li><a href="#projects" onClick={ () => scrollTo("projects") }>{translate('projectsMenu', language)}</a></li>
        <li><a href="#contact" onClick={ () => scrollTo("contact") }>{translate('contactMenu', language)}</a></li>
      </ul>
      </div>
      
    </header>
  );
}

export default Header;