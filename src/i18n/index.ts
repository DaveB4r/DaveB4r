import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import es from './es.json';

export const translate = (key: string, language: string | null): string => {
  let langData: {[key: string]: string} = {};
  switch(language){
    case 'EN':
      langData = en;
      break;
    case 'DE':
      langData = de;
      break;
    case 'FR':
      langData = fr;
      break;
    case 'ES':
      langData = es;
      break;
  }
  return langData[key];
}