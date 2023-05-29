import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";

const Portfolio = () => {
  return (
    <PageLayout title={"My Portfolio"}>
      {data.portfolio.web.projectsList.map(
        (
          {
            category,
            description,
            company,
            comingSoon,
            image,
            title,
            link,
            url,
          },
          i
        ) => (
          <a
            href={url}
            className="row justify-content-center text-decoration-none my-2"
            key={i}
          >
            <div className="col-md-4">
              <img src={image} width="100%" />
            </div>

            <div className="col-md-8">
              <h4>
                {title} <span className="h6">{`(${category})`}</span>
              </h4>
              <h6>{company}</h6>
              {comingSoon && <h6>{"Coming Soon"}</h6>}
              <p className="text-justify">{description}</p>
            </div>
          </a>
        )
      )}
    </PageLayout>
  );
};

export default Portfolio;