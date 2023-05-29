import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";

const About = () => {
  return (
    <PageLayout title={"About Me"}>
      <p className="text-justify lh-lg">{data.about.web.bio}</p>

      <div className="btn-group w-100 py-3">
        {data.about.web.downloads.map(({ link, text, Icon }, i) => (
          <a
            href={link}
            className={`btn ${
              i % 2 === 0 ? "btn-theme" : "btn-outline-theme"
            } py-3`}
            key={i}
          >
            <Icon /> {text}
          </a>
        ))}
      </div>
    </PageLayout>
  );
};

export default About;
