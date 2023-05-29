import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";
import { FaScroll } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const Resume = () => {
  return (
    <Fragment>
      <PageLayout title={"My Resume"}>
        {data.resume.web.jobsList.map(
          (
            {
              company,
              website,
              description,
              title,
              certificate,
              years,
              projects,
            },
            i
          ) => (
            <div key={i} className="mb-5">
              <a href={certificate} download className="text-decoration-none">
                <h4>{title}</h4>
              </a>

              <a href={website} className="text-decoration-none">
                <h6>{"@ " + company + " | " + years}</h6>
              </a>

              <h6>{"Projects: " + projects.join(", ")}</h6>

              <p className="text-justify">{description}</p>
            </div>
          )
        )}
      </PageLayout>

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

      <PageLayout title={"My Education"}>
        <div className="row justify-content-center">
          {[...data.education, ...data.training.web].map(
            (
              {
                degree,
                description,
                graduated,
                school,
                logo,
                link,
                projects,
                cert,
              },
              i
            ) => (
              <div className="justify-content-center" key={i}>
                <a href={link} target="_blank" className="text-decoration-none">
                  <img src={logo} width="100%" />
                </a>

                <h5>{degree}</h5>

                <h6>{school}</h6>

                <p className="text-justify">{description}</p>

                <p className="text-justify">{"You may check..."}</p>

                {projects.map(({ title, link, more }, i) => (
                  <a
                    href={link}
                    target="_blank"
                    className="text-decoration-none"
                    key={i}
                  >
                    <h6 className="text-justify">{title}</h6>

                    <p className="text-justify">{more}</p>
                  </a>
                ))}

                {cert?.title && (
                  <a href={cert?.link} className="btn btn-theme" download>
                    <FaScroll /> {cert?.title}
                  </a>
                )}
              </div>
            )
          )}
        </div>
      </PageLayout>
    </Fragment>
  );
};

export default Resume;
