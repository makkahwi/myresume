import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from "react-i18next";

export default function Resume({ data: { freelancesList, jobsList, skillsList }, educations }) {
  const { t, i18n } = useTranslation();

  return (
    <section id="resume">
      <div className="work">
        <div className="row">
          <h1>
            <span className={`${i18n.language === "ar" && "arabic"}`}>{t("Works")}</span>
          </h1>

          <div className="six columns main-col">
            <h4 className="subheader">
              <span className={`${i18n.language === "ar" && "arabic"}`}>{t("Jobs")}</span>
            </h4>

            {jobsList.map((work, i) => (
              <div key={i}>
                <h3>{work.certificate ? <a target="_blank" href={work.certificate} download>{t(work.title)}</a> : t(work.title)}</h3>
                <p className="info"><a target="_blank" href={work.website} >{work.company}</a><span>{" "}&bull;{" "}</span> <em className="date">{work.years}</em></p>
                <p style={{ textAlign: "justify" }}>{t(work.description)}</p>
              </div>
            ))}
          </div>

          <div className="six columns main-col">
            <h4 className="subheader"><span className={`${i18n.language === "ar" && "arabic"}`}>{t("Freelancing")}</span></h4>

            {freelancesList.map((work, i) => (
              <div key={i}>
                <h3>{t(work.title)}</h3>
                <p className="info"><em className="date">{work.years}</em></p>
                <p style={{ textAlign: "justify" }}>{t(work.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="row">
          <div className="twelve columns main-col">
            <h1>
              <span className={`${i18n.language === "ar" && "arabic"}`}>{t("Skills")}</span>
            </h1>
          </div>

          <div className="twelve columns main-col" style={{ direction: "ltr" }}>
            <div className="skill">
              {skillsList.map((skill, i) => (
                <div className="four columns skill" key={i}>
                  <em><h4><a target="_blank" href={skill.website} style={{ color: `#${skill.color}` }} ><FontAwesomeIcon icon={skill.icon} />{" "}{skill.name}</a></h4></em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="education">
        <div className="row">
          <div className="twelve columns main-col">
            <h1><span className={`${i18n.language === "ar" && "arabic"}`}>{t("Education & Training")}</span></h1>
          </div>

          <div className="twelve columns main-col">
            {educations.map((education, i) => (
              <div className="row item" style={{ padding: "5vh 0" }}>
                <div className="six columns">
                  {(education.link && education.logo) && (<a target="_blank" href={education.link} ><img alt={"profilePhoto"} src={education.logo} /></a>)}
                </div>

                <div className="six columns">
                  <div key={i}>
                    <h3>{t(education.degree)}</h3>
                    <p className="info">{t(education.school)}<span>{" "}&bull;{" "}</span><em className="date">{education.graduated}</em></p>
                    <p>{t(education.description)}</p>

                    {education.project && <div> {t("You may check")} < a target="_blank" href={education.project.link} rel="noopener noreferrer" >{education.project.title}</a> {education.project.more}</div>}

                    {education.cert && <a target="_blank" href={education.cert.link} download className="downloadButton button" style={{ backgroundColor: "#ff5d00", margin: "10px 0", color: "#fff" }}><FontAwesomeIcon icon={faDownload} style={{ margin: "0 5px" }} />{education.cert.title}</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}