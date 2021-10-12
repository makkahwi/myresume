import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from "react-i18next";
import './App.css';
import Data from './resumeData';
import Loading from './Components/Loading';

const Nav = lazy(() => import('./Components/Nav'));
const Header = lazy(() => import('./Components/Header'));
const About = lazy(() => import('./Components/About'));
const Resume = lazy(() => import('./Components/Resume'));
const Portfolio = lazy(() => import('./Components/Portfolio'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));

export default function App() {
  const { i18n } = useTranslation();
  document.dir = i18n.dir();
  document.lang = i18n.language;

  const [job, setJob] = useState("web");
  const [about, setAbout] = useState(Data.about.web);
  const [resume, setResume] = useState(Data.resume.web);
  const [portfolio, setPortfolio] = useState(Data.portfolio.web);

  const jobsList = [{ value: "web", title: "Full-Stack Web Developer" }, { value: "gd", title: "UI / UX & Graphic Designer" }];

  const setWeb = () => {
    setAbout(Data.about.web);
    setResume(Data.resume.web);
    setPortfolio(Data.portfolio.web);
  }

  const setGd = () => {
    setAbout(Data.about.gd);
    setResume(Data.resume.gd);
    setPortfolio(Data.portfolio.gd);
  }

  useEffect(() => {
    job === "gd" ? setGd()
      : setWeb()
  }, [job])

  ReactGA.initialize('UA-110570651-1');
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Nav />
        <Header data={Data.main} jobsList={jobsList} setJob={setJob} />
        <About data={about} />
        <Resume data={resume} educations={Data.resume.educationList} />
        <Portfolio data={portfolio} />
        <Contact data={Data.main} />
        <Footer data={Data.main} />
      </Suspense>
    </div>
  );
}
