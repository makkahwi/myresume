import PageSection from "components/pageSection";
import Typography from "components/typography";

const AboutSection = () => {
  return (
    <PageSection color="warning">
      <Typography size={3} justify="center" className="p-5">
        With many years of experience and passion about building digital
        solutions, and with high interests into education sector & its
        challenges, I'm all about dedicating myself to overcome those issues
        with availability & endless development of skills & experience.
      </Typography>

      <Typography size={3} justify="center" className="p-5">
        Passionate entrepreneur with a vision to revolutionize the edtech
        industry. Founder and CEO of Semesteer, dedicated to creating
        cutting-edge solutions to digitize schools education. Bringing 8 years
        of experience in web development, corporate world and proven track
        record in bringing new products to market.
      </Typography>
    </PageSection>
  );
};

export default AboutSection;
