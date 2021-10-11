import { faBootstrap, faCss3Alt, faDocker, faFacebook, faGithub, faHtml5, faInstagram, faLaravel, faLinkedin, faNode, faNodeJs, faReact, faTelegram, faVuejs, faWhatsapp, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faDatabase, faEnvelope, faFileAlt, faScroll, faImages, faVectorSquare, faNewspaper, faGlobe, faVideo } from '@fortawesome/free-solid-svg-icons';

const portfolioLink = 'images/portfolio/';

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
            icon: faGithub,
            name: "Github",
            url: "https://github.com/makkahwi",
            text: "Makkahwi"
         },
         {
            icon: faLinkedin,
            name: "Linkedin",
            url: "https://linkedin.com/in/makkahwi/",
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
         }],
         [{
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
         }]
      ],
      name: "Suhaib Ahmad",
      profile: "profile.jpg"
   },
   about: {
      web: {
         bio: "An individual with a constant passion & burning desire to keep exploring, learning & giving a try to things, which makes me a fit for the IT sector. I'm highly organized, detail-oriented and timing-particular, and I believe that also what makes me a good programmer. You may scroll down to see it for yourself, and you may also download my...",
         downloads: [
            { text: "Resume Sheet", link: "/assets/Suhaib%20Ahmad%20WD%20Resume%20Sheet.pdf", icon: faFileAlt },
            { text: "Personality Test", link: "https://www.16personalities.com/profiles/aa175983b37f8", icon: faScroll },
            { text: "Psychometric Analysis", link: "/assets/Suhaib%20Ahmad%20Psychometric.pdf", icon: faChartBar },
         ],
         resumeVideo: "https://www.youtube.com/embed/JxHy8wEhrEg"
      },
      gd: {
         bio: "An individual with a constant passion & burning desire to keep exploring, learning & giving a try to things, which makes me a fit for the IT sector. I'm highly organized, detail-oriented and timing-particular, and I believe that also what makes me a good programmer. You may scroll down to see it for yourself, and you may also download my...",
         downloads: [
            { text: "Resume Sheets", link: "/assets/Suhaib%20Ahmad%20GD%20Resume%20Sheet.pdf", icon: faFileAlt },
            { text: "Personality Test", link: "https://www.16personalities.com/profiles/aa175983b37f8", icon: faScroll },
            { text: "Psychometric Analysis", link: "/assets/Suhaib%20Ahmad%20Psychometric.pdf", icon: faChartBar },
         ],
         resumeVideo: "https://www.youtube.com/embed/JxHy8wEhrEg"
      }
   },
   resume: {
      web: {
         jobsList: [
            {
               company: "LuxTag",
               website: "https://luxtag.io/",
               description: "Full-time job to develop a flagship PERN-based web-app for an online service.",
               title: "Frontend Developer",
               years: "May 2021 - Oct 2021"
            },
            {
               company: "LuxTag",
               website: "https://luxtag.io/",
               description: "Full-time internship to develop a flagship PERN-based web-app for an online service.",
               title: "Full-Stack Developer",
               years: "Nov 2021 - Apr 2021"
            },
            {
               company: "AIS School",
               website: "http://aqsa.edu.my/",
               description: "Part-time job to develop a web app of a student information system.",
               title: "Full-Stack Developer",
               years: "Sep 2019 - Aug 2020"
            },
            {
               company: "PCOM",
               website: "https://pcomalaysia.com/",
               description: "Part-time job to manage the content of a wordpress-based foundation website, including the update work of news section, outlook and theme color of website.",
               title: "Website Manager",
               years: "Nov 2015 - May 2016"
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
               description: "Few code-based frontend-only website projects.",
               title: "Frontend Developer",
               years: "May 2019 - Aug 2019"
            },
            {
               company: "Freelance",
               description: "Several wordpress-based website projects.",
               title: "Wordpress Developer",
               years: "Dec 2015 - Apr 2019"
            }
         ],
         skillsList: [
            { icon: faReact, name: "React.Js", color: "61dafb", website: "https://reactjs.org/" },
            { icon: faVuejs, name: "Vue.Js", color: "00bd83", website: "https://vuejs.org/" },
            { icon: faNode, name: "Node.Js", color: "8bc500", website: "https://nodejs.org/" },
            { icon: faNodeJs, name: "Express.Js", color: "000000", website: "https://expressjs.com/" },
            { icon: faLaravel, name: "Laravel", color: "ff2d20", website: "https://laravel.com/" },
            { icon: faDatabase, name: "MySQL", color: "ffa518", website: "https://www.mysql.com/" },
            { icon: faDatabase, name: "PostgreSQL", color: "2f6091", website: "https://www.postgresql.org/" },
            { icon: faWordpress, name: "Wordpress", color: "21759b", website: "https://wordpress.com/" },
            { icon: faDocker, name: "Docker", color: "2496ed", website: "https://www.docker.com/" },
            { icon: faBootstrap, name: "Bootstrap", color: "7952b3", website: "https://getbootstrap.com/" },
            { icon: faHtml5, name: "HTML", color: "e44d26" },
            { icon: faCss3Alt, name: "CSS", color: "379ad6" }
         ],
      },
      gd: {
         jobsList: [
            {
               company: "QFM Malaysia",
               website: "https://qfmalaysia.org/",
               description: "Part-time job to design serveral booklets & brochures.",
               title: "Graphic Designer",
               years: ["Jun 2018", "July 2017", "May 2017", "Jun 2016 - Aug 2016"]
            },
            {
               company: "Mercy Mission World",
               website: "https://www.mercymissionworld.org/",
               description: "Part-time work included gaphic designing & events organization.",
               title: "PR Executive",
               years: "Dec 2015 - Jun 2016"
            },
            {
               company: "PSA Malaysia",
               website: "https://ppam.org.my/",
               description: "Univeristy club volunteering work to prepare the publicity materials of digital and print-out designs.",
               title: "Media Bureau Head",
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
            { icon: faImages, name: "Adobe Photoshop", color: "61dafb", website: "https://www.adobe.com/products/photoshop" },
            { icon: faVectorSquare, name: "Adobe Illustrator", color: "00bd83", website: "https://www.adobe.com/products/illustrator.html" },
            { icon: faNewspaper, name: "Adobe InDesign", color: "8bc500", website: "https://www.adobe.com/products/indesign.html" },
            { icon: faGlobe, name: "Adobe XD", color: "000000", website: "https://www.adobe.com/products/xd.html" },
            { icon: faVideo, name: "Adobe Premiere Pro", color: "ff2d20", website: "https://www.adobe.com/products/premiere.html" }
         ],
      },
      educationList: [
         {
            degree: "Bachelor of Computer Science",
            description: "Specialized in Data Science and Computational Intelligence",
            graduated: "May 2021",
            school: "International Islamic University Malaysia"
         }
      ]
   },
   portfolio: {
      web: {
         projectsList: [
            {
               "category": "codeBasedApp",
               "description": "PERN-Based Web App (Collaborative)",
               "image": `${portfolioLink}/7.jpg`,
               "title": "BrandTag",
               "url": "https://app.brandtag.io/"
            },
            {
               "category": "wordpress",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/1.jpg`,
               "title": "OneShot Future Company",
               "url": "https://oneshotfuture.com/"
            },
            {
               "category": "codeBasedApp",
               "description": "Laravel-Based Web App",
               "image": `${portfolioLink}/8.jpg`,
               "title": "AIS School",
               "url": "https://students.aqsa.edu.my/"
            },
            {
               "category": "codeBasedWebsite",
               "description": "React.Js-Based Website",
               "image": `${portfolioLink}/5.jpg`,
               "title": "Arromi",
               "url": "https://arromi.net/"
            },
            {
               "category": "wordpress",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/9.jpg`,
               "title": "PPAM Organization",
               "url": "https://ppam.org.my/"
            },
            {
               "category": "wordpress",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/2.jpg`,
               "title": "AIS School",
               "url": "https://aqsa.edu.my/"
            },
            {
               "category": "wordpress",
               "description": "Wordpress Website",
               "image": `${portfolioLink}/4.jpg`,
               "title": "SpeedWheels Company",
               "url": "https://speedwheelstrade.online/"
            },
            {
               "category": "wordpress",
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
               "category": "banner",
               "description": "Banner Design",
               "image": `${portfolioLink}/Banners/1.jpg`,
               "title": "SpeedWheels",
               "url": `${portfolioLink}/Banners/1.jpg`
            },
            {
               "category": "booklet",
               "description": "Booklet Design",
               "image": `${portfolioLink}/Booklets/2.jpg`,
               "title": "Mercy Mission World",
               "url": `${portfolioLink}/Booklets/2.jpg`,
            },
            {
               "category": "banner",
               "description": "Banner Design",
               "image": `${portfolioLink}//Banners/2.jpg`,
               "title": "Several University Clubs",
               "url": `${portfolioLink}/Banners/2.jpg`,
            },
            {
               "category": "booklet",
               "description": "Booklet Design",
               "image": `${portfolioLink}//Booklets/5.jpg`,
               "title": "PSAD Southeast Asia",
               "url": `${portfolioLink}/Booklets/5.jpg`,
            },
            {
               "category": "businessCard",
               "description": "Business Card Design",
               "image": `${portfolioLink}//BusinessCards/3.jpg`,
               "title": "AIS School",
               "url": `${portfolioLink}/BusinessCards/3.jpg`,
            },
            {
               "category": "booklet",
               "description": "Booklet Design",
               "image": `${portfolioLink}//Booklets/4.jpg`,
               "title": "QFM Malaysia",
               "url": `${portfolioLink}/Booklets/4.jpg`,
            },
            {
               "category": "logos",
               "description": "Logo Design",
               "image": `${portfolioLink}//Logos/4.jpg`,
               "title": "Univeristy Club",
               "url": `${portfolioLink}/Logos/4.jpg`,
            },
            {
               "category": "banner",
               "description": "Poster Design",
               "image": `${portfolioLink}//Others/2.jpg`,
               "title": "FYP Project",
               "url": `${portfolioLink}/Others/2.jpg`,
            },
            {
               "category": "others",
               "description": "CV Design",
               "image": `${portfolioLink}//Others/3.jpg`,
               "title": "An Engineering Graduate",
               "url": `${portfolioLink}/Others/3.jpg`,
            },
            {
               "category": "logos",
               "description": "Logo Re-design",
               "image": `${portfolioLink}//Logos/1.jpg`,
               "title": "QFM Malaysia",
               "url": `${portfolioLink}/Logos/1.jpg`,
            },
            {
               "category": "banner",
               "description": "Brochure Design",
               "image": `${portfolioLink}//posters/1.jpg`,
               "title": "Makan Sini Resturant",
               "url": `${portfolioLink}/posters/1.jpg`,
            },
            {
               "category": "businessCard",
               "description": "Business Card Design",
               "image": `${portfolioLink}//BusinessCards/4.jpg`,
               "title": "Global Mediator",
               "url": `${portfolioLink}/BusinessCards/4.jpg`,
            },
            {
               "category": "booklet",
               "description": "Booklet Design",
               "image": `${portfolioLink}//Booklets/6.jpg`,
               "title": "IIUM",
               "url": `${portfolioLink}/Booklets/6.jpg`,
            },
            {
               "category": "others",
               "description": "Brochure Design",
               "image": `${portfolioLink}//posters/2.jpg`,
               "title": "IIUM",
               "url": `${portfolioLink}/posters/2.jpg`,
            },
            {
               "category": "videos",
               "description": "Video Producing",
               "image": `${portfolioLink}/3.jpg`,
               "title": "ICPC Asia Regional Contest",
               "url": "https://www.youtube.com/watch?v=nwjGLer53sQ"
            },
            {
               "category": "videos",
               "description": "Video Producing",
               "image": `${portfolioLink}/3.jpg`,
               "title": "ICPC Asia Regional Contest",
               "url": "https://www.youtube.com/watch?v=D1uIlE_YB3U"
            }
         ]
      }
   }
}

export default Data;