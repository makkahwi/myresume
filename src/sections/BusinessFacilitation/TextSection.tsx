import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

const TextSection = () => {
  return (
    <PageSection>
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

export default TextSection;
