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
    name: "linkedin",
    icon: faLinkedinIn,
    link: "https://linkedin.com/in/makkahwi/",
  },
  {
    name: "github",
    icon: faGithub,
    link: "https://github.com/makkahwi",
  },
  {
    name: "whatsapp",
    icon: faWhatsapp,
    link: "https://wasap.my/962788424973",
  },
  {
    name: "telegram",
    icon: faTelegram,
    link: "https://t.me/makkahwi",
  },
  {
    name: "phone",
    icon: faPhone,
    link: "tel:+962788424973",
  },
  {
    name: "email",
    icon: faEnvelope,
    link: "mailto:SuhaibAhmadAi@hotmail.com",
  },
  {
    name: "facebook",
    icon: faFacebook,
    link: "https://facebook.com/makkahwi",
  },
  {
    name: "instagram",
    icon: faInstagram,
    link: "https://instagram.com/makkahwi",
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
