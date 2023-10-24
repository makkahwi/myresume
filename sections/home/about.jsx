import PageSection from "components/pageSection";
import Typography from "components/typography";

const AboutSection = () => {
  return (
    <PageSection color="warning" id="about">
      <Typography size={4} justify="center" className="p-5">
        Passionate entrepreneur with a vision to revolutionize the edtech
        industry. Founder and CEO of Semesteer, dedicated to creating
        cutting-edge solutions to digitize schools education. Bringing 8 years
        of experience in IT jobs, corporate world and proven track record in
        bringing new products to market.
      </Typography>
    </PageSection>
  );
};

export default AboutSection;
