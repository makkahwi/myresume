import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

export default function About({ data: { bio, downloads, resumeVideo } }) {
   const { t, i18n } = useTranslation();
   const [divs, setDivs] = useState([]);

   const [files, setFiles] = useState(downloads);
   const [state, setstate] = useState()

   const setRTL = () => {
      setFiles(downloads.reverse());
      setDivs([<TextBanner />, <VideoBanner />]);
   }

   const setLTR = () => {
      setFiles(downloads);
      setDivs([<VideoBanner />, <TextBanner />]);
   }

   useEffect(() => {
      i18n.dir() === "rtl" ? setRTL() : setLTR()
   }, [i18n, t])

   const filesLength = files.length === 2 ? "six" : files.length === 3 ? "four" : files.length === 4 ? "three" : "two";

   const VideoBanner = () => (
      <div className="six columns text-center">
         <h1 className={`${i18n.language === "ar" && "arabic"}`}>{t("About Me")}</h1>
         <iframe width="100%" height="265px" src={resumeVideo}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>
   );

   const TextBanner = () => (
      <div className="six columns main-col">
         <h5 className={`bio ${i18n.language === "ar" && "arabic padding"}`}>{t(bio)}</h5>
         <div className="row">
            {files.map(file =>
               <div className={`${filesLength} columns`}>
                  <a target="_blank" href={file.link} rel="noopener noreferrer" download className={`downloadButton button ${i18n.language === "ar" && "arabic"}`}><FontAwesomeIcon icon={file.icon} /><br />{t(file.text)}</a>
               </div>
            )}
         </div>
      </div>
   );
   return (
      <section id="about">
         <div className="row">
            {divs}
         </div>
      </section>
   );
};
