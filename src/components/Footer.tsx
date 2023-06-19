import {FC, Fragment} from 'react';
import { translate } from '../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Footer: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return(
    <Fragment>
      <hr />
      <footer>
        <p>{translate("footerCopyRight", language)}</p>
        <p>{translate("createdBy", language)}</p>
      </footer>
    </Fragment>
  );
}

export default Footer;