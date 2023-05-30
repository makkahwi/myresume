import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";

const Skills = () => {
  return (
    <PageLayout title={"My Skills"}>
      <div className="row justify-content-center mb-5">
        {data.resume.web.skillsList.map(
          ({ Icon, name, color, website, subskills }, i) => (
            <div className="col-md-3 col-4 text-center px-1 py-2" key={i}>
              <a
                href={website}
                target="_blank"
                style={{ color: `#${color}` }}
                className="text-decoration-none"
              >
                <Icon size={44} />
                <br />
                <span className="fw-bold">{name}</span>
              </a>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};

export default Skills;
