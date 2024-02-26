import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

import Loading from "./Components/Loading";
import Data from "./resumeData";

import "./App.css";

const Nav = lazy(() => import("./Components/Nav"));
const Header = lazy(() => import("./Components/Header"));
const About = lazy(() => import("./Components/About"));
const Resume = lazy(() => import("./Components/Resume"));
const Portfolio = lazy(() => import("./Components/Portfolio"));
const Contact = lazy(() => import("./Components/Contact"));
const Footer = lazy(() => import("./Components/Footer"));

export default function App() {
  const { t, i18n } = useTranslation();
  document.dir = i18n.dir();
  document.lang = i18n.language;

  const [job, setJob] = useState("web");

  useEffect(() => {
    document.title = t("Suhaib Ahmad - Resume Website");
  }, [i18n, t]);

  ReactGA.initialize("UA-110570651-1");
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Nav />
        <Header
          data={Data.main}
          contacts={[...Data.main.socialList, ...Data.links[job]]}
        />
        <About data={Data.about[job]} />
        <Resume
          data={Data.resume[job]}
          educations={[...Data.training[job], ...Data.education]}
        />
        <Portfolio data={Data.portfolio[job].projectsList} />
        <Contact data={[...Data.main.socialList, ...Data.links[job]]} />
        <Footer data={Data.main} />
      </Suspense>
    </div>
  );
}
