import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <PageLayout title={"About Me"}>
      <p className="text-justify lh-lg">{data.about.web.bio}</p>

      <div className="btn-group w-100 py-3">
        {data.about.web.downloads.map(({ link, text, icon }, i) => (
          <a href={link} className="btn btn-theme py-3" key={i}>
            {/* <FontAwesomeIcon icon={icon} className="text-sm" /> */}
            {text}
          </a>
        ))}
      </div>
    </PageLayout>
  );
};

export default About;