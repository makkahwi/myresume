import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Loading() {
   const { t } = useTranslation();

   return (
      <section id="about">
         <div className="row">
            <div className="five columns">
            </div>
            <div className="two columns">
               <div className="loader" />
               <h1>{`${t("Loading")}...`}</h1>
            </div>
            <div className="five columns">
            </div>
         </div>
      </section>
   );
};
