import React from 'react';
import { useTranslation } from "react-i18next";

export default function Portfolio({ data }) {
  const { t, i18n } = useTranslation();

  const { projectsList } = data;

  const projects = projectsList.map(project => (
    <div key={project.title} className="columns portfolio-item">
      <a target="_blank" href={project.url}>
        <div className="item-wrap">
          <img alt={project.title} src={project.image} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{project.title}</h5>
              <p>{t(project.description)}</p>
            </div>
          </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
        </div>
      </a>
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