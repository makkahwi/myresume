import PagesLayout from "@/layout/PagesLayout";
import CareerSection from "@/sections/career/career";
import WorksSection from "@/sections/career/works";
import BackgroundSection from "@/sections/home/background";

const CareerPage = () => {
  return (
    <PagesLayout>
      <BackgroundSection page />

      <CareerSection />

      <WorksSection />
    </PagesLayout>
  );
};

export default CareerPage;
