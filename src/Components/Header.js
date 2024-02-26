import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Header({ data: { name, profile }, contacts }) {
  const { t, i18n } = useTranslation();

  return (
    <header id="home">
      <div className="row banner">
        <div className="six columns">
          <img
            alt={"profilePhoto"}
            src={`images/${profile}`}
            className="profilePhoto"
          />
        </div>

        <div className="six columns name-banner">
          <h1 className={`${i18n.language === "ar" && "arabic padding"}`}>
            {t(name)}
          </h1>

          {/* <h3 className="mb-4">
            {t("Jordan's Lead")}
            <br />
            <a href="https://commits.top/jordan_public.html" target="_blank">
              {t("Github Contributor")}
            </a>
          </h3> */}

          <h2 style={{ color: "black" }}>{t("Full-Stack Web Developer")}</h2>

          <hr />

          <ul className="social">
            {contacts.map((networks, x) =>
              networks.map((network, y) => (
                <li key={`${x}-${y}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={network.url}
                  >
                    <FontAwesomeIcon
                      icon={network.icon}
                      data-tip={network.name}
                    />
                    <ReactTooltip effect="solid" />
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
      <div className="cornerBox"></div>
    </header>
  );
}
