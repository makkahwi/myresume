import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  const socials = [...data.main.socialList, ...data.links.web];

  return (
    <PageLayout title={"My Contacts"}>
      {socials.map((social, i) => (
        <div className="row px-2 align-items-center" key={i}>
          {social.map(({ icon, url, text }, y) => (
            <a href={url} target="_blank" className="col-2 text-theme" key={y}>
              <FontAwesomeIcon icon={icon} size="2xs" />
            </a>
          ))}

          <span className="col text-theme">{social[0].text}</span>
        </div>
      ))}
    </PageLayout>
  );
};

export default Contacts;
