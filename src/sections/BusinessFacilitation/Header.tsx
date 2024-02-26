import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

const BusinessFacilitationHeaderSection = () => {
  return (
    <PageSection
      title="Why Choose My Executive Development Programs?"
      color="secondary"
      id="business"
    >
      <Col lg={6}>
        <img
          src="/images/gallery/IMG-20231128-WA0021.jpg"
          width="100%"
          className="rounded-5 soft-edges mb-4"
        />
      </Col>

      <Col lg={6}>
        <h5 className="text-block text-dark">
          {
            "My executive development programs are tailored for excellence, designed to meet the unique needs and objectives of your organization. I understand that one size does not fit all, and I work closely with you to create a program that aligns perfectly with your leadership development goals. "
          }
        </h5>
      </Col>

      <Col md={12} className="my-auto">
        <h5 className="text-block text-dark">
          {
            "As an experienced executive development facilitator with a super energetic, dynamic and engaging style, I bring a wealth of knowledge and expertise to your program. I've successfully delivered executive development programs for a diverse range of organizations, including multinational corporations and governmental institutions, consistently delivering improved leadership skills, increased productivity, and enhanced strategic thinking."
          }
        </h5>

        <h5 className="text-block my-5 text-dark">
          {
            "My holistic approach covers a wide range of topics, including leadership, communication, strategic thinking, performance improvement, and building high performing teams. I'll help you excel in all aspects of your role."
          }
        </h5>

        <h5 className="text-block text-dark">
          {
            "I emphasize practical, real-world application in my programs, ensuring you gain valuable knowledge and actionable strategies that can be immediately implemented to make a difference in your organization."
          }
        </h5>
      </Col>
    </PageSection>
  );
};

export default BusinessFacilitationHeaderSection;
