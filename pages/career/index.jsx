import PagesLayout from "layout/PagesLayout";
import CareerSection from "sections/career/career";
import BackgroundSection from "sections/home/background";

const CareerPage = () => {
  return (
    <PagesLayout>
      <BackgroundSection page />

      <CareerSection />
    </PagesLayout>
  );
};

export default CareerPage;
