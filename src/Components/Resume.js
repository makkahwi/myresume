import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Resume({ data, educations }) {
  const { t, i18n } = useTranslation();
  const [workDivs, setWorkDivs] = useState([]);
  const [eduDivs, setEduDivs] = useState([]);

  const setRTL = () => {
    setWorkDivs([<FreelanceBanner key={0} />, <JobsBanner key={1} />]);
    setEduDivs([<TextDiv key={2} />, <LogoDiv key={3} />]);
  }

  const setLTR = () => {
    setWorkDivs([<JobsBanner key={0} />, <FreelanceBanner key={1} />]);
    setEduDivs([<LogoDiv key={2} />, <TextDiv key={3} />]);
  }

  useEffect(() => {
    i18n.dir() === "rtl" ? setRTL() : setLTR()
  }, [i18n, t])

  const { freelancesList, jobsList, skillsList } = data;

  const jobs = jobsList.map((work, i) => (
    <div key={i}>
      <h3>{work.certificate ? <a target="_blank" href={work.certificate} download>{t(work.title)}</a> : t(work.title)}</h3>
      <p className="info"><a target="_blank" href={work.website} >{work.company}</a><span>{" "}&bull;{" "}</span> <em className="date">{work.years}</em></p>
      <p style={{ textAlign: "justify" }}>{t(work.description)}</p>
    </div>
  ));

  const freelances = freelancesList.map((work, i) => (
    <div key={i}>
      <h3>{t(work.title)}</h3>
      <p className="info"><em className="date">{work.years}</em></p>
      <p style={{ textAlign: "justify" }}>{t(work.description)}</p>
    </div>
  ));

  const skills = skillsList.map((skill, i) => (
    <div className="four columns skill" key={i}>
      <em><h4><a target="_blank" href={skill.website} style={{ color: `#${skill.color}` }} ><FontAwesomeIcon icon={skill.icon} />{" "}{skill.name}</a></h4></em>
    </div>
  ));

  const education = educations.map((education, i) => (
    <div key={i}>
      <h3>{t(education.degree)}</h3>
      <p className="info">{t(education.school)}<span>{" "}&bull;{" "}</span><em className="date">{education.graduated}</em></p>
      <p>{t(education.description)}</p></div>
  ));

  const JobsBanner = () => (
    <div className="six columns main-col">
      <h4 className="subheader"><span className={`${i18n.language === "ar" && "arabic"}`}>{t("Jobs")}</span></h4>
      {jobs}
    </div>
  );

  const FreelanceBanner = () => (
    <div className="six columns main-col">
      <h4 className="subheader"><span className={`${i18n.language === "ar" && "arabic"}`}>{t("Freelancing")}</span></h4>
      {freelances}
    </div>
  );

  const LogoDiv = () => (
    <div className="six columns">
      <a target="_blank" href={"https://www.iium.edu.my/"} ><img alt={"profilePhoto"} src={`images/IIUM.png`} /></a>
    </div>
  );

  const TextDiv = () => (
    <div className="six columns">
      {education}
      {t("You may check")} <a target="_blank" href="https://fyp.suhaib.dev/" rel="noopener noreferrer" >{t("my FYP project")}</a> ({t("a web app")})<br />
      <a target="_blank" href={"/My-Certificates.pdf"} download className="downloadButton button" style={{ backgroundColor: "#ff5d00", margin: "10px 0", color: "#fff" }}><FontAwesomeIcon icon={faDownload} style={{ margin: "0 5px" }} />{t("My Certificates")}</a>
    </div>
  )

  return (
    <section id="resume">
      <div className="work">
        <div className="row">
          <h1><span className={`${i18n.language === "ar" && "arabic"}`}>{t("Works")}</span></h1>
          {workDivs}
        </div>
      </div>

      <div className="skills">
        <div className="row">
          <div className="twelve columns main-col">
            <h1><span className={`${i18n.language === "ar" && "arabic"}`}>{t("Skills")}</span></h1>
          </div>

          <div className="twelve columns main-col" style={{ direction: "ltr" }}>
            <div className="skill">
              {skills}
            </div>
          </div>
        </div>
      </div>

      <div className="education">
        <div className="row">
          <div className="twelve columns main-col">
            <h1><span className={`${i18n.language === "ar" && "arabic"}`}>{t("Education")}</span></h1>
          </div>

          <div className="twelve columns main-col">
            <div className="row item">
              {eduDivs}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}