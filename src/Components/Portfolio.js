import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Portfolio({ data }) {
  const { t, i18n } = useTranslation();

  const [filters, setFilters] = useState([]);
  const [filter, setFilter] = useState();
  const [projects, setProjects] = useState(data);

  const filtersLength = count => count === 2 ? "six" : count === 3 ? "four" : count === 4 ? "three" :
    count < 7 ? "two" : count < 9 ? "three" : "two";

  useEffect(() => {
    setFilters([...new Set(data.map(project => project.category))]);
    setFilter();
  }, [data]);

  useEffect(() => {
    setProjects(filter ? data.filter(project => project.category === filter) : data);
  }, [filter, data]);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 className={`${i18n.language === "ar" && "arabic"}`}>{t("Samples of My Work")}</h1>
          {filters.length > 0 && (
            <div className="twelve columns main-col text-center text-underline">
              <div className={`${filtersLength(filters.length + 1)} columns main-col`}>
                <p><a className={`button buttonWidth ${!filter && "selected"}`} onClick={() => setFilter()}>{t("All")}</a></p>
              </div>
              {filters.map((filt, i) => (
                <div key={i} className={`${filtersLength(filters.length + 1)} columns main-col`}>
                  <p><a className={`button buttonWidth ${filter === filt && "selected"}`} onClick={() => setFilter(filt)}>{t(filt)}</a></p>
                </div>
              ))}
            </div>
          )}
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects.map((project, i) => (
              <div key={`${project.title}-${i}`} className="columns portfolio-item" id={project.link}>
                <a target="_blank" href={project.url} download>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}