import PageLayout from "@/Components/PageLayout";
import data from "@/resumeData";

const Home = () => {
  return (
    <PageLayout title={"Welcome"}>
      <iframe
        width="100%"
        height="365px"
        src={data.about.web.resumeVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </PageLayout>
  );
};

export default Home;
