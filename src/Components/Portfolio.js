import React from 'react';
import { useTranslation } from "react-i18next";

export default function Portfolio({ data }) {
  const { t, i18n } = useTranslation();

  const { projectsList } = data;

  const projects = projectsList.map(projects => (
    <div key={projects.title} className="columns portfolio-item">
      <div className="item-wrap">
        <a target="_blank" href={projects.url}>
          <img alt={projects.title} src={projects.image} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
              <p>{t(projects.description)}</p>
            </div>
          </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
        </a>
      </div>
    </div>
  ))

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 className={`${i18n.language === "ar" && "arabic"}`}>{t("Samples of My Work")}</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}