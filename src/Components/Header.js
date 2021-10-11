import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

export default function Header({ data, jobsList, setJob }) {
   const { t, i18n } = useTranslation();
   const [divs, setDivs] = useState([]);

   const setRTL = () => {
      setDivs([<NameBanner />, <PhotoImage />]);
   }

   const setLTR = () => {
      setDivs([<PhotoImage />, <NameBanner />]);
   }

   useEffect(() => {
      i18n.dir() === "rtl" ? setRTL() : setLTR()
   }, [i18n, t])

   const { name, profile, socialList } = data;

   const networks = socialList.map(networks => networks.map(network => (
      <li>
         <a target="_blank" href={network.url}><FontAwesomeIcon icon={network.icon} /></a>
      </li>
   )))

   const PhotoImage = () => (
      <div className="six columns">
         <img alt={"profilePhoto"} src={`images/${profile}`} className="profilePhoto" />
      </div>
   )

   const NameBanner = () => (
      <div className="six columns name-banner">
         <h1 className={`${i18n.language === "ar" && "arabic padding"}`}>{t(name)}</h1>
         <h3>
            {t("Full-Stack Web Developer")}
            {/* <select style={{ width: "100%", textAlign: "center" }} className={`${i18n.language === "ar" && "arabic"}`} onChange={job => setJob(job.target.value)}>
               {jobsList.map(job => (
                  <option value={job.value} key={`job${job.value}`}>
                     {t(job.title)}
                  </option>
               ))}
            </select> */}
         </h3>
         <hr />
         <ul className="social">
            {networks}
         </ul>
      </div>
   )

   return (
      <header id="home">
         <div className="row banner">
            {divs}
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
         <div className="cornerBox"></div>
      </header>
   );
}
