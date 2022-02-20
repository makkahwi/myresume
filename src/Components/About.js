import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from "react-i18next";

export default function About({ data: { bio, downloads, resumeVideo } }) {
   const { t, i18n } = useTranslation();

   const filesLength = length => {
      switch (length) {
         case 2: return "six";
         case 3: return "four";
         case 4: return "three";
         default: return "two";
      }
   };

   return (
      <section id="about">

         <div className="row">
            <h1 className={`${i18n.language === "ar" && "arabic"}`}>{t("About Me")}</h1>

            <div className="six columns text-center">
               <iframe width="100%" height="265px" src={resumeVideo}
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
            </div>

            <div className="six columns main-col">
               <h5 className={`bio ${i18n.language === "ar" && "arabic padding"}`}>{t(bio)}</h5>
               <div className="row">
                  {downloads.map((file, i) =>
                     <div className={`${filesLength(downloads.length)} columns`} key={i}>
                        <a target="_blank" href={file.link} rel="noopener noreferrer" download className={`downloadButton button ${i18n.language === "ar" && "arabic"}`}><FontAwesomeIcon icon={file.icon} /><br />{t(file.text)}</a>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};
