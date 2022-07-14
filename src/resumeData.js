import { faBootstrap, faCss3Alt, faDiscord, faDocker, faFacebook, faGithub, faHackerrank, faHtml5, faInstagram, faJs, faKaggle, faLaravel, faLinkedin, faMicrosoft, faNode, faNodeJs, faPhp, faPython, faReact, faSlack, faTelegram, faVuejs, faWhatsapp, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faArrowsRotate, faArrowsSpin, faCamera, faChartBar, faCloud, faDatabase, faEdit, faEnvelope, faFan, faFileAlt, faGlobe, faHashtag, faImages, faNewspaper, faPaintBrush, faPaintRoller, faRing, faScroll, faVectorSquare, faVideo } from '@fortawesome/free-solid-svg-icons';

const portfolioLink = 'images/portfolio';

const Data = {
   main: {
      socialList: [
         [{
            icon: faEnvelope,
            name: "Email",
            url: "mailto:SuhaibAhmadAi@hotmail.com",
            text: "SuhaibAhmadAi@hotmail.com"
         }],
         [{
            icon: faLinkedin,
            name: "Linkedin",
            url: "https://linkedin.com/in/makkahwi/",
            text: "Makkahwi"
         },
         {
            icon: faFacebook,
            name: "Facebook",
            url: "https://facebook.com/makkahwi",
            text: "Makkahwi"
         },
         {
            icon: faInstagram,
            name: "Instagram",
            url: "https://instagram.com/makkahwi",
            text: "Makkahwi"
         }],
         [{
            icon: faWhatsapp,
            name: "Whatsapp",
            url: "https://wasap.my/601128094804",
            text: "+601128094804"
         },
         {
            icon: faTelegram,
            name: "Telegram",
            url: "https://t.me/makkahwi",
            text: "+601128094804"
         }]
      ],
      name: "Suhaib Ahmad",
      profile: "profile.jpg"
   },
   about: {
      web: {
         bio: "An individual with a constant passion & burning desire to keep exploring, learning & giving a try to things, which makes me a fit for the IT sector. I'm highly organized, detail-oriented and timing-particular, and I believe that also what makes me a good programmer. You may scroll down to see it for yourself, and you may also download my...",
         downloads: [
            { text: "Resume Sheet", link: "/Suhaib-Ahmad-WD-Resume-Sheet.pdf", icon: faFileAlt },
            { text: "Personality Test", link: "https://www.16personalities.com/profiles/aa175983b37f8", icon: faScroll },
            { text: "Psychometric Analysis", link: "/Suhaib-Ahmad-Psychometric.pdf", icon: faChartBar },
         ],
         resumeVideo: "https://www.youtube.com/embed/JxHy8wEhrEg"
      },
      gd: {
         bio: "An individual with a constant passion & burning desire to keep exploring, learning & giving a try to things, which makes me a fit for the IT sector. You may scroll down to see it for yourself, and you may also download my...",
         downloads: [
            { text: "Resume Sheet", link: "/Suhaib-Ahmad-GD-Resume-Sheet.pdf", icon: faFileAlt },
            { text: "Personality Test", link: "https://www.16personalities.com/profiles/aa175983b37f8", icon: faScroll },
            { text: "Psychometric Analysis", link: "/Suhaib-Ahmad-Psychometric.pdf", icon: faChartBar },
         ],
         resumeVideo: "https://www.youtube.com/embed/JxHy8wEhrEg"
      }
   },
   links: {
      web: [
         [
            {
               icon: faGithub,
               name: "Github",
               url: "https://github.com/makkahwi",
               text: "Makkahwi"
            },
            {
               icon: faHackerrank,
               name: "HackerRank",
               url: "https://www.hackerrank.com/makkahwi",
               text: "Makkahwi"
            },
            {
               icon: faFan,
               name: "SoloLearn",
               url: "https://www.sololearn.com/profile/25072713",
               text: "Makkahwi"
            },
            {
               icon: faKaggle,
               name: "Kaggle",
               url: "https://www.kaggle.com/makkahwi",
               text: "Makkahwi"
            }
         ],
         [
            {
               icon: faDiscord,
               name: "Discord",
               url: "https://discordapp.com/users/772634530992619530",
               text: "Makkahwi"
            },
            {
               icon: faSlack,
               name: "Slack",
               url: "https://slack.com/app_redirect?channel=U02TS20JT8X",
               text: "Makkahwi"
            }
         ]
      ],
      gd: []
   },
   education: [
      {
         degree: "Bachelor of Computer Science",
         description: "Specialized in Data Science and Computational Intelligence",
         graduated: "May 2021",
         school: "International Islamic University Malaysia",
         logo: "images/IIUM.png",
         link: "https://www.iium.edu.my/",
         projects: [
            {
               link: "/Suhaib's-Internship-Final-Report.pdf",
               title: "My Internship report",
               more: "(a web app)"
            },
            {
               link: "https://github.com/makkahwi/iDecide",
               title: "My FYP project",
               more: "(a web app)"
            }
         ],
         cert: {
            link: "/My-Certificates.pdf",
            title: "My Certificates"
         }
      }
   ],
   training: {
      web: [
         {
            degree: "6-Month Training Camp",
            description: "Python-Based Web Dev (Code Fellows Curriculum)",
            graduated: "Jan - July 2022",
            school: "ASAC of LTUC College (Jordan)",
            logo: "images/LTUC.png",
            link: "https://www.ltuc.com/",
            projects: [
               {
                  link: "https://github.com/makkahwi/asac-works",
                  title: "Individual works",
                  more: "(Several Python & Web Apps)"
               },
               {
               {
                  link: "https://silent-speakers.github.io/silent-speakers/",
                  title: "Mid-term group project",
                  more: "(Desktop Python App)"
               },
                  link: "https://tadreebi.netlify.app/",
                  title: "Final group project",
                  more: "(React-Django Web App)"
               },
            ],
            // cert: {
            //    link: "/LTUC-Certificate.pdf",
            //    title: "The Certificate"
            // }
         }
      ],
      gd: []
   },
   resume: {
      web: {
         jobsList: [
            {
               company: "ArabWork",
               website: "https://www.linkedin.com/company/arabwork/",
               description: "Full-time job to develop a Vue-Symfony web-app for an online service.",
               title: "Frontend Developer",
               // certificate: "/luxtag.pdf",
               years: "Jun 2022 - Present"
            },
            {
               company: "LuxTag",
               website: "https://luxtag.io/",
               description: "Full-time job to develop a flagship PERN-based web-app for an online service.",
               title: "Frontend Developer",
               certificate: "/luxtag.pdf",
               years: "May 2021 - Oct 2021"
            },
            {
               company: "LuxTag",
               website: "https://luxtag.io/",
               description: "Full-time internship to develop a flagship PERN-based web-app for an online service.",
               title: "Full-Stack Developer",
               certificate: "/luxtag.pdf",
               years: "Nov 2021 - Apr 2021"
            },
            {
               company: "AIS School",
               website: "http://aqsa.edu.my/",
               description: "Part-time job to develop a Laravel-based web-app of a student information system.",
               title: "Full-Stack Developer",
               certificate: "/ais.pdf",
               years: "Sep 2019 - Aug 2020"
            }
         ],
         freelancesList: [
            {
               company: "Freelance",
               description: "Executed several Laravel-based & PERN-based web app projects.",
               title: "Full-Stack Developer",
               years: "Sep 2019 - Present"
            },
            {
               company: "Freelance",
               description: "Several code-based frontend-only landing-page projects.",
               title: "Frontend Developer",
               years: "May 2018 - Aug 2019"
            },
            {
               company: "Freelance",
               description: "Several wordpress-based website projects.",
               title: "Wordpress Developer",
               years: "Oct 2015 - Apr 2018"
            }
         ],
         skillsList: [
            { icon: faReact, name: "React.Js", color: "61dafb", website: "https://reactjs.org/", subskills: ["Redux", "Material-UI", "TailwindCSS", "Axios", "i18next", "React Hook Form"] },
            { icon: faReact, name: "Next.Js", color: "000000", website: "https://nextjs.org/" },
            { icon: faVuejs, name: "Vue.Js", color: "00bd83", website: "https://vuejs.org/", subskills: ["VueX", "Vuetify", "Axios", "Webpack", "i18next"] },
            { icon: faNode, name: "Node.Js", color: "8bc500", website: "https://nodejs.org/", subskills: ["npm", " yarn"] },
            { icon: faNodeJs, name: "Express.Js", color: "000000", website: "https://expressjs.com/", subskills: [""] },
            { icon: faLaravel, name: "Laravel", color: "ff2d20", website: "https://laravel.com/", subskills: [""] },
            { icon: faHashtag, name: "Django", color: "092d1f", website: "https://www.djangoproject.com/", subskills: ["DJ REST API", "DJ Simple JWT", "DJ Environ"] },
            { icon: faWordpress, name: "Wordpress", color: "21759b", website: "https://wordpress.com/" },
            { icon: faDatabase, name: "PostgreSQL", color: "2f6091", website: "https://www.postgresql.org/" },
            { icon: faDatabase, name: "MySQL", color: "ffa518", website: "https://www.mysql.com/" },
            { icon: faGithub, name: "Github", color: "000000", website: "https://www.github.com/" },
            { icon: faDocker, name: "Docker", color: "2496ed", website: "https://www.docker.com/" },
            { icon: faMicrosoft, name: "VS Code", color: "0082cf", website: "https://code.visualstudio.com/" },
            { icon: faJs, name: "JavaScript", color: "f7e018", website: "https://www.javascript.com/", subskills: ["ES6", "ES5"] },
            { icon: faArrowsSpin, name: "jQuery", color: "0868ac", website: "https://jquery.com/" },
            { icon: faRing, name: "JSON", color: "0f0f0f", website: "https://www.json.org/" },
            { icon: faPython, name: "Python", color: "3771a1", website: "https://www.python.org/", subskills: ["Numpy", "Pandas", "Matplotlib"] },
            { icon: faPhp, name: "PhP", color: "4f5c93", website: "https://www.php.net/" },
            { icon: faHtml5, name: "HTML", color: "e44d26", website: "https://html.spec.whatwg.org/" },
            { icon: faCss3Alt, name: "CSS", color: "379ad6", website: "https://www.w3.org/TR/CSS/#css" },
            { icon: faBootstrap, name: "Bootstrap", color: "7952b3", website: "https://getbootstrap.com/" },
            { icon: faArrowsSpin, name: "Agile", color: "00a99d", website: "https://www.scrum.org/", subskills: ["SCRUM", "Kanban"] },
            { icon: faArrowsRotate, name: "SCRUM", color: "1f93b8", website: "https://www.scrum.org/" },
            { icon: faCloud, name: "REST API", color: "176985" },
         ],
      },
      gd: {
         jobsList: [
            {
               company: "Speed Wheels",
               website: "https://speedwheelstrade.online/",
               description: "Part-time temporary work about designing and preparing for a social-media promotional campaign.",
               title: "Graphic Designer",
               certificate: "",
               years: "Jan 2017 - Feb 2017"
            },
            {
               company: "QFM Malaysia",
               website: "http://qfmalaysia.org/",
               description: "Part-time job to design serveral booklets & brochures.",
               title: "Graphic Designer",
               certificate: "",
               years: "Jun - Aug 2016, May & July 2017, Jun 2018"
            },
            {
               company: "Mercy Mission World",
               website: "https://www.mercymissionworld.org/",
               description: "Part-time work included gaphic designing & events management.",
               title: "PR Executive",
               certificate: "",
               years: "Dec 2015 - Jun 2016"
            },
            {
               company: "PSA Malaysia",
               website: "https://ppam.org.my/",
               description: "Univeristy club volunteering work to prepare the publicity materials of digital and print-out designs.",
               title: "Media Bureau",
               certificate: "",
               years: "Feb 2013 - Jun 2015"
            }
         ],
         freelancesList: [
            {
               company: "Freelance",
               description: "One experience to edit & produce videos for an event.",
               title: "Video Editor",
               years: "Oct 2019 - Nov 2019"
            },
            {
               company: "Freelance",
               description: "Executed enormous number of graphic designs for both print-out & digital uses.",
               title: "Graphic Designer",
               years: "Feb 2015 - Apr 2019"
            }
         ],
         skillsList: [
            { icon: faImages, name: "Adobe Photoshop", color: "09375b", website: "https://www.adobe.com/products/photoshop" },
            { icon: faVectorSquare, name: "Adobe Illustrator", color: "330000", website: "https://www.adobe.com/products/illustrator.html" },
            { icon: faNewspaper, name: "Adobe InDesign", color: "47021e", website: "https://www.adobe.com/products/indesign.html" },
            { icon: faGlobe, name: "Adobe XD", color: "470137", website: "https://www.adobe.com/products/xd.html" },
            { icon: faVideo, name: "Adobe Premiere Pro", color: "00005b", website: "https://www.adobe.com/products/premiere.html" },
            { icon: faImages, name: "Figma", color: "09375b", website: "https://www.figma.com" },
            { icon: faImages, name: "Draw.io", color: "09375b", website: "https://draw.io" },
            { icon: faPaintBrush, name: "Graphic Design", color: "8bc500" },
            { icon: faPaintRoller, name: "UI / UX Design", color: "7952b3" },
            { icon: faEdit, name: "Photo Editing", color: "e44d26" },
            { icon: faCamera, name: "Photography", color: "0082cf" }
         ],
      }
   },
   portfolio: {
      web: {
         projectsList: [
            {
               "category": "Web App",
               "description": "Frontend Dev of Vue-Based Web App (Collaborative, Soon to be Launched)",
               "image": `${portfolioLink}/10.jpg`,
               "title": "Trellah",
               // "url": "https://trellah.com/"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website (Soon to be Launched)",
               "image": `${portfolioLink}/12.jpg`,
               "title": "Dr. Ahmad Abu Mahfouth",
               "url": "https://aam.arromi.net/"
            },
            {
               "category": "Web App",
               "description": "Frontend Dev of PERN-Based Web App (Collaborative)",
               "image": `${portfolioLink}/7.jpg`,
               "title": "BrandTag",
               "url": "https://app.brandtag.io/"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website (Soon to be Launched)",
               "image": `${portfolioLink}/10.jpg`,
               "title": "R&K ",
               // "url": "#portfolio"
            },
            {
               "category": "Web App",
               "description": "Full-Stack Dev of Vue-Django-Based Web App (Soon to be Launched)",
               "image": `${portfolioLink}/11.jpg`,
               "title": "Currency Showroom",
               "url": "https://github.com/makkahwi/currencies-showroom"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/1.jpg`,
               "title": "OneShot Future Company",
               "url": "https://oneshotfuture.com/"
            },
            {
               "category": "Web App",
               "description": "Full-Stack Dev of Laravel-Based Web App",
               "image": `${portfolioLink}/8.jpg`,
               "title": "AIS School",
               "url": "https://students.aqsa.edu.my/"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website (Soon to be Launched)",
               "image": `${portfolioLink}/9.jpg`,
               "title": "xEdu Landing Page",
               "url": "https://xEdu.best/"
            },
            {
               "category": "Web App",
               "description": "Full-Stack Dev of PERN-Based Web App (Soon to be Launched)",
               "image": `${portfolioLink}/9.jpg`,
               "title": "xEdu App",
               "url": "https://xEdu.best/"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/6.jpg`,
               "title": "PPAM Organization",
               "url": "https://ppam.org.my/"
            },
            {
               "category": "Code-Based Sites",
               "description": "React.Js-Based Website",
               "image": `${portfolioLink}/5.jpg`,
               "title": "Arromi",
               "url": "https://arromi.net/"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/2.jpg`,
               "title": "AIS School",
               "url": "https://aqsa.edu.my/"
            },
            {
               "category": "Web App",
               "description": "Full-Stack Dev of React-Django-Based Web App (Coollebraive)",
               "image": `${portfolioLink}/10.jpg`,
               "title": "Tadreebi",
               "url": "https://tadreebi.vercel.app/"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/4.jpg`,
               "title": "SpeedWheels Company",
               "url": "https://speedwheelstrade.online/"
            },
            {
               "category": "Wordpress Websites",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/3.jpg`,
               "title": "Team Foundation",
               "url": "https://teamtr.me/"
            }
         ]
      },
      gd: {
         projectsList: [
            {
               "category": "Logos",
               "description": "Logo Design",
               "image": `${portfolioLink}/Logos/2.jpg`,
               "title": "Finger Speak",
               "url": `https://silent-speakers.github.io/silent-speakers/#overview`,
            },
            {
               "category": "Banners & Posters",
               "description": "Banner Design",
               "image": `${portfolioLink}/Banners/1.jpg`,
               "title": "SpeedWheels",
               "url": `${portfolioLink}/Banners/1.jpg`
            },
            {
               "category": "Booklets",
               "description": "Booklet Design",
               "image": `${portfolioLink}/Booklets/2.jpg`,
               "title": "Mercy Mission World",
               "url": `${portfolioLink}/Booklets/2.pdf`,
            },
            {
               "category": "Banners & Posters",
               "description": "Banner Design",
               "image": `${portfolioLink}/Banners/2.jpg`,
               "title": "Several University Clubs",
               "url": `${portfolioLink}/Banners/2.jpg`,
            },
            {
               "category": "Booklets",
               "description": "Booklet Design",
               "image": `${portfolioLink}/Booklets/5.jpg`,
               "title": "PSAD Southeast Asia",
               "url": `${portfolioLink}/Booklets/5.pdf`,
            },
            {
               "category": "Business Cards",
               "description": "Business Card Design",
               "image": `${portfolioLink}/BusinessCards/3.jpg`,
               "title": "AIS School",
               "url": `${portfolioLink}/BusinessCards/3.jpg`,
            },
            {
               "category": "Booklets",
               "description": "Booklet Design",
               "image": `${portfolioLink}/Booklets/4.jpg`,
               "title": "QFM Malaysia",
               "url": `${portfolioLink}/Booklets/4.pdf`,
            },
            {
               "category": "Logos",
               "description": "Logo Design",
               "image": `${portfolioLink}/Logos/4.jpg`,
               "title": "Univeristy Club",
               "url": `${portfolioLink}/Logos/4.jpg`,
            },
            {
               "category": "Banners & Posters",
               "description": "Poster Design",
               "image": `${portfolioLink}/Others/2.jpg`,
               "title": "FYP Project",
               "url": `${portfolioLink}/Others/2.jpg`,
            },
            {
               "category": "Others",
               "description": "CV Design",
               "image": `${portfolioLink}/Others/3.jpg`,
               "title": "An Engineering Graduate",
               "url": `${portfolioLink}/Others/3.jpg`,
            },
            {
               "category": "Logos",
               "description": "Logo Re-design",
               "image": `${portfolioLink}/Logos/1.jpg`,
               "title": "QFM Malaysia",
               "url": `http://qfmalaysia.org/`,
            },
            {
               "category": "Banners & Posters",
               "description": "Brochure Design",
               "image": `${portfolioLink}/posters/1.jpg`,
               "title": "Makan Sini Resturant",
               "url": `${portfolioLink}/posters/1.jpg`,
            },
            {
               "category": "Business Cards",
               "description": "Business Card Design",
               "image": `${portfolioLink}/BusinessCards/4.jpg`,
               "title": "Global Mediator",
               "url": `${portfolioLink}/BusinessCards/4.jpg`,
            },
            {
               "category": "Booklets",
               "description": "Booklet Design",
               "image": `${portfolioLink}/Booklets/6.jpg`,
               "title": "IIUM",
               "url": `${portfolioLink}/Booklets/6.pdf`,
            },
            {
               "category": "Others",
               "description": "Brochure Design",
               "image": `${portfolioLink}/posters/2.jpg`,
               "title": "IIUM",
               "url": `${portfolioLink}/posters/2.jpg`,
            },
            {
               "category": "Videos",
               "description": "Video Producing",
               "image": `${portfolioLink}/Videos/1.png`,
               "title": "ICPC Asia Regional Contest",
               "url": "https://www.youtube.com/watch?v=nwjGLer53sQ"
            },
            {
               "category": "Videos",
               "description": "Video Producing",
               "image": `${portfolioLink}/Videos/2.png`,
               "title": "ICPC Asia Regional Contest",
               "url": "https://www.youtube.com/watch?v=D1uIlE_YB3U"
            }
         ]
      }
   }
}

export default Data;
