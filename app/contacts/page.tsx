import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";
import ContactForm from "./ContactForm";

const Contacts = () => {
  const socials = [...data.main.socialList, ...data.links.web];

  return (
    <PageLayout title={"My Contacts"}>
      {socials.map((social, i) => (
        <div className="py-3 align-items-center" key={i}>
          {social.map(({ Icon, url, text }, y) => (
            <a href={url} target="_blank" className="text-theme px-3" key={y}>
              <Icon size={44} />
            </a>
          ))}

          <span className="text-theme h5">{social[0].text}</span>
        </div>
      ))}

      <ContactForm />
    </PageLayout>
  );
};

export default Contacts;
