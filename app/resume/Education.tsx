import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";
import { FaScroll } from "react-icons/fa";

const Education = () => {
  return (
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

              {projects.map(({ title, link, more, download }, i) => (
                <a
                  href={(download ? "documents" : "") + link}
                  target="_blank"
                  className="text-decoration-none text-dark"
                  key={i}
                  download={download}
                >
                  <h6 className="text-justify text-theme">
                    {title}{" "}
                    <span className="text-justify text-dark">{more}</span>
                  </h6>
                </a>
              ))}

              {cert?.title && (
                <a
                  href={"documents" + cert?.link}
                  className="btn btn-theme"
                  download
                >
                  <FaScroll /> {cert?.title}
                </a>
              )}
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
};

export default Education;
