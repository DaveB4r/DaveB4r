import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { translate } from "../i18n";
import { RootState } from "../store";

const Page404: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <div className="page-404">
      <div className="container">
        <h1>{translate('pageDoesNotExist', language)}</h1>
        <Link to="/">{translate('returnToHomePage', language)}</Link>
      </div>
    </div>
  );
}

export default Page404;