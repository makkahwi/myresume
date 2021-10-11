import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from "react-i18next";

export default function Contact({ data }) {
   const { t, i18n } = useTranslation();

   const { name, socialList } = data;

   const networks = socialList.map(netwoks =>
      <li>
         <h2>
            {netwoks.map(network =>
               <a target="_blank" href={network.url}>
                  <FontAwesomeIcon icon={network.icon} />{" "}
               </a>
            )}{" "}
            {netwoks[0].text}
         </h2>
      </li>
   )

   return (
      <section id="contact">
         <div className="contact">
            <div className="row section-head">
               <div className="twelve columns">
                  <h1 className={`lead ${i18n.language === "ar" && "arabic"}`}>{t("Reach Me")}</h1>
               </div>
            </div>

            <div className="row" style={{ direction: "ltr" }}>
               <ul className="social-links">
                  {networks}
               </ul>
            </div>
         </div>
      </section>
   );
}