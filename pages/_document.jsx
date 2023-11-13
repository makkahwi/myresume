import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { Fragment } from "react";

export const socialLinksList = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://linkedin.com/in/makkahwi/",
    label: "Let's Connect",
    color: "#0077b5 ",
  },
  {
    name: "Github",
    icon: faGithub,
    link: "https://github.com/makkahwi",
    label: "We Could Collaborate",
    color: "#6cc644",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962788424973",
    label: "Start a Direct Contact",
    color: "#075e54",
  },
  {
    name: "Telegram",
    icon: faTelegram,
    link: "https://t.me/makkahwi",
    label: "You Prefare Telegram?",
    color: "#0088cc",
  },
  {
    name: "Phone",
    icon: faPhone,
    link: "tel:+962788424973",
    label: "I don't Prefare But...",
    color: "warning",
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:SuhaibAhmadAi@hotmail.com",
    label: "Better To Type",
    color: "#0072C6",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    link: "https://facebook.com/makkahwi",
    label: "Facebook Me",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://instagram.com/makkahwi",
    label: "Let's Instagram",
    color: "#962fbf",
  },
];

export const title = "Suhaib Ahmad - Resume Website";

class MyDocument extends Document {
  render() {
    const description = "Suhaib Ahmad";

    return (
      <Html dir="ltr" lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/images/logo.png" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta name="description" content={description} />

          {socialLinksList.map(({ name, link }, i) => (
            <Fragment key={i}>
              <meta name={name + ":url"} content={link} />
              <meta name={name + ":title"} content={title} />
              <meta name={name + ":description"} content={description} />
              <meta name={name + ":card"} content="summary" />
            </Fragment>
          ))}

          <meta property="og:url" content="https://Suhaib.dev/" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
