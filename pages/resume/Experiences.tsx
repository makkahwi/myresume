import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";
import { Fragment } from "react";

const Experiences = () => {
  const JobView = ({
    company,
    website,
    description,
    title,
    certificate,
    years,
    projects,
  }: {
    company: string;
    website?: string;
    description: string;
    title: string;
    certificate?: string;
    years: string;
    projects: string[];
  }) => (
    <div className="mb-5">
      {certificate ? (
        <a
          href={"documents" + certificate}
          download
          className="text-decoration-none text-theme"
        >
          <h4>{title}</h4>
        </a>
      ) : (
        <h4>{title}</h4>
      )}

      <a
        href={website}
        className="text-decoration-none text-theme"
        target="_blank"
      >
        <h6>{"@ " + company + " | " + years}</h6>
      </a>

      <h6>{"Projects: " + projects.join(", ")}</h6>

      <p className="text-justify">{description}</p>
    </div>
  );

  const JobsListView = ({
    title,
    jobs,
    subtitle,
  }: {
    title: string;
    jobs: {
      company: string;
      website?: string;
      description: string;
      title: string;
      certificate?: string;
      years: string;
      projects: string[];
    }[];
    subtitle: string;
  }) => (
    <Fragment>
      <h5 className="mt-3 text-decoration-underline">{title}</h5>
      <h6 className="mb-3">{subtitle}</h6>

      {jobs.map((job, i) => (
        <JobView key={i} {...job} />
      ))}
    </Fragment>
  );

  return (
    <PageLayout title={"My Experiences"}>
      <JobsListView
        title="Jobs"
        subtitle="Jobs are important for soft skills and collaboration"
        jobs={data.resume.web.jobsList}
      />

      <JobsListView
        title="Freelancing"
        subtitle="Freelancing helps to explore whatever the job is restricting or disallowing to discover"
        jobs={data.resume.web.freelancesList}
      />
    </PageLayout>
  );
};

export default Experiences;
