import Document, { Head, Html, Main, NextScript } from "next/document";
import { Fragment } from "react";

export const socialLinksList = [
  {
    icon: "ri-linkedin-fill",
    link: "https://linkedin.com/in/makkahwi/",
  },
  { icon: "ri-github-fill", link: "https://github.com/makkahwi" },
  {
    icon: "ri-whatsapp-fill",
    link: "https://wasap.my/962788424973",
  },
  {
    icon: "ri-telegram-fill",
    link: "https://t.me/makkahwi",
  },
  {
    icon: "ri-phone-fill",
    link: "tel:+962788424973",
  },
  { icon: "ri-mail-fill", link: "mailto:SuhaibAhmadAi@hotmail.com" },
  {
    icon: "ri-facebook-fill",
    link: "https://facebook.com/makkahwi",
  },
  {
    icon: "ri-instagram-fill",
    link: "https://instagram.com/makkahwi",
  },
];

class MyDocument extends Document {
  render() {
    const title = "Suhaib Ahmad - Resume Website";
    const description = "Suhaib Ahmad";

    return (
      <Html dir="ltr" lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/images/logo.png" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <title>{title}</title>

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
