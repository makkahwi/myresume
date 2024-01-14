import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

import Data from "../resumeData";

export default function ResumeSheet({ job = "web" }) {
  const { t, i18n } = useTranslation();

  const contacts = [...Data.main.socialList, ...Data.links[job]];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        background: "url('/images/Background.png')",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
      className="padding"
    >
      <div className="row banner">
        <div className="six columns">
          <img
            src="/images/profile.jpg"
            style={{
              border: "10px solid #ff5d00",
              borderRadius: "15px",
            }}
            width="100%"
          />
        </div>

        <div className="six columns name-banner">
          <h1 className={`${i18n.language === "ar" && "arabic padding"}`}>
            {t("Suhaib Ahmad")}
          </h1>

          <h4 style={{ color: "black" }}>{t("Full-Stack Web Developer")}</h4>

          <ul className="social row">
            {contacts.map((networks, x) => (
              <div key={x}>
                {networks.map((network, y) => (
                  <li
                    style={{ display: "inline-block", marginRight: "15px" }}
                    key={`${x}-${y}`}
                  >
                    <h3>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={network.url}
                      >
                        <FontAwesomeIcon
                          icon={network.icon}
                          data-tip={network.name}
                        />
                      </a>
                    </h3>
                  </li>
                ))}
                <h6 style={{ display: "inline-block" }}>{networks[0].text}</h6>
              </div>
            ))}
          </ul>
        </div>

        <div className="twelve columns">
          <h5
            className={`bio ${i18n.language === "ar" && "arabic padding"}`}
            style={{ color: "black" }}
          >
            {t(Data.about[job].bio)}
          </h5>
        </div>

        <div className="six columns">
          <h1 className={`${i18n.language === "ar" && "arabic padding"}`}>
            {t("Works")}
          </h1>

          {Data.resume[job].jobsList.map((work, i) => (
            <div key={i}>
              <h3>
                {work.certificate ? (
                  <a target="_blank" href={work.certificate} download>
                    {t(work.title)}
                  </a>
                ) : (
                  t(work.title)
                )}
              </h3>
              <p className="info">
                <a target="_blank" href={work.website}>
                  {work.company}
                </a>
                <span> &bull; </span> <em className="date">{work.years}</em>
              </p>
              {/* <p style={{ textAlign: "justify" }}>{t(work.description)}</p> */}
            </div>
          ))}
        </div>

        <div className="six columns">
          <h1 className={`${i18n.language === "ar" && "arabic padding"}`}>
            {t("Skills")}
          </h1>

          {Data.resume[job].skillsList.map((skill, i) => (
            <div key={i}>
              <div className="six columns skill">
                <em>
                  <h4>
                    <a
                      target="_blank"
                      href={skill.website}
                      style={{ color: `#${skill.color}` }}
                      data-tip={skill.subskills && skill.subskills.join(", ")}
                    >
                      <FontAwesomeIcon icon={skill.icon} /> {skill.name}
                    </a>
                  </h4>
                </em>
              </div>
            </div>
          ))}
        </div>

        <div className="twelve columns">
          <h1 className={`${i18n.language === "ar" && "arabic padding"}`}>
            {t("Education & Training")}
          </h1>
        </div>

        {[...Data.education, ...Data.training[job]].map((education, i) => (
          <div
            className="six columns row item"
            style={{ padding: "5vh 0" }}
            key={i}
          >
            <div className="twelve columns">
              {education.link && education.logo && (
                <a target="_blank" href={education.link}>
                  <img alt={"profilePhoto"} src={education.logo} />
                </a>
              )}
            </div>

            <div className="twelve columns">
              <div key={i}>
                <h3>{t(education.degree)}</h3>
                <p className="info">{t(education.school)}</p>
                {/* <p>{t(education.description)}</p> */}

                {/* {education.projects && education.projects.length && (
                  <span>
                    {t("You may check")}...
                    {education.projects.map((project, y) => (
                      <div key={y}>
                        <a
                          target="_blank"
                          href={project.link}
                          download={project.download}
                          rel="noopener noreferrer"
                        >
                          {t(project.title)}
                        </a>{" "}
                        {t(project.more)}
                      </div>
                    ))}
                  </span>
                )} */}

                {/* {education.cert && (
                  <a
                    target="_blank"
                    href={education.cert.link}
                    download
                    className="downloadButton button"
                    style={{
                      backgroundColor: "#ff5d00",
                      margin: "10px 0",
                      color: "#fff",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      style={{ margin: "0 5px" }}
                    />
                    {t(education.cert.title)}
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
