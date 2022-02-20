import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from "react-i18next";
import ReactTooltip from 'react-tooltip';

export default function Header({ data: { name, profile }, contacts, jobsList, setJob }) {
   const { t, i18n } = useTranslation();

   return (
      <header id="home">
         <div className="row banner">
            <div className="six columns">
               <img alt={"profilePhoto"} src={`images/${profile}`} className="profilePhoto" />
            </div>

            <div className="six columns name-banner">
               <h1 className={`${i18n.language === "ar" && "arabic padding"}`}>{t(name)}</h1>

               <h3>
                  {/* {t("Full-Stack Web Developer")} */}
                  <select style={{ width: "100%", textAlign: "center" }} className={`${i18n.language === "ar" && "arabic"}`} onChange={job => setJob(job.target.value)}>
                     {jobsList.map(job => (
                        <option value={job.value} key={`job${job.value}`}>
                           {t(job.title)}
                        </option>
                     ))}
                  </select>
               </h3>

               <hr />

               <ul className="social">
                  {contacts.map((networks, x) => networks.map((network, y) => (
                     <li key={`${x}-${y}`} >
                        <a target="_blank" rel="noopener noreferrer" href={network.url}>
                           <FontAwesomeIcon icon={network.icon} data-tip={network.name} />
                           <ReactTooltip effect="solid" />
                        </a>
                     </li>
                  )))}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
         <div className="cornerBox"></div>
      </header>
   );
}
