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

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d698.600803271303!2d35.90988694719205!3d32.037112182595486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1685368327429!5m2!1sen!2sjo"
        width="100%"
        height="365px"
        style={{ border: 0 }}
        loading="lazy"
      /> */}
    </PageLayout>
  );
};

export default Contacts;
