import React from 'react';
import { useTranslation } from "react-i18next";

export default function Header() {
   const { t, i18n } = useTranslation();

   const languageChange = () => {
      if (i18n.language === "en") {
         i18n.changeLanguage("ar");
      } else {
         i18n.changeLanguage("en");
      }
   };

   return (
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav opaque">
            <a className="current" href="#home">
               <img alt={"logo"} src={`images/logo.png`} className="logo" />
            </a>
            <li><a className="smoothscroll" href="#home"><span className="logoText">Home</span></a></li>
            <li className="current"><a className="smoothscroll" href="#home">{t("Home")}</a></li>
            <li><a className="smoothscroll" href="#about">{t("About")}</a></li>
            <li><a className="smoothscroll" href="#resume">{t("Resume")}</a></li>
            <li><a className="smoothscroll" href="#portfolio">{t("Works")}</a></li>
            <li><a className="smoothscroll" href="#contact">{t("Contact")}</a></li>
            <li className="arabic"><a className="smoothscroll" href="" onClick={() => languageChange()}>{t("Other Lang")}</a></li>
         </ul>
      </nav>
   );
}
