import PagesLayout from "layout/PagesLayout";
import ProjectsSection from "sections/projects/projects";
import WhySection from "sections/projects/why";

const ProjectsPage = () => {
  return (
    <PagesLayout>
      <WhySection />

      <ProjectsSection />
    </PagesLayout>
  );
};

export default ProjectsPage;
