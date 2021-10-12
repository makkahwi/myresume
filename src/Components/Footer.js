import React from 'react';
import { useTranslation } from "react-i18next";

function Footer({ data }) {
  const { t, i18n } = useTranslation();

  const { name } = data;

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="row">
        <div className={`twelve columns ${i18n.language === "ar" && "arabic"}`}>
          <ul className="copyright">
            <li>{t(name)} &copy; {currentYear}</li>
            <li>{t("UI By")} <a target="_blank" href="http://ruy.design/" rel="noopener noreferrer" >{t("Roya Ahmad")}</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
