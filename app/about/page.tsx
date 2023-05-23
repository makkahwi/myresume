import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <PageLayout title={"About Me"}>
      <p className="text-justify lh-lg">{data.about.web.bio}</p>

      <iframe
        width="100%"
        height="265px"
        src={data.about.web.resumeVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

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
