import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";

const Skills = () => {
  return (
    <PageLayout title={"My Skills"}>
      <div className="row justify-content-center">
        {data.resume.web.skillsList.map(
          ({ Icon, name, color, website, subskills }, i) => (
            <div className="col-md-2 col-2 text-center" key={i}>
              <a
                href={website}
                target="_blank"
                style={{ color: `#${color}` }}
                className="text-decoration-none"
              >
                <Icon size={44} /> {name}
              </a>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};

export default Skills;
