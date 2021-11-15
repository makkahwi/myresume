import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from "react-i18next";

export default function Contact({ data }) {
   const { t, i18n } = useTranslation();

   const { socialList } = data;

   const networks = socialList.map((netwoks, x) =>
      <li key={x}>
         <h2>
            {netwoks.map((network, y) =>
               <a key={y} target="_blank" href={network.url} rel="noopener noreferrer">
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
               <ul
                  className="social-links"
                  style={{
                     width: "70vw",
                     overflowX: "hidden",
                     textOverflow: "ellipsis",
                  }}
               >
                  {networks}
               </ul>
            </div>
         </div>
      </section>
   );
}