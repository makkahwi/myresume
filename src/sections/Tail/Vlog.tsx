import PageSection from "@/components/PageSection";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col } from "react-bootstrap";

const VlogSection = () => {
  const videos = [
    { link: "spzO8zZmGVY" },
    { link: "MMdhJVb7OaE" },
    { link: "v4eh_yCfzNQ" },
    { link: "41446G9tUhs" },
  ];

  return (
    <PageSection title="Vlog" id="vlog">
      {videos.map(({ link }, i) => (
        <Col md={6} xl={3} key={i}>
          <iframe
            width="100%"
            height="250vh"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Col>
      ))}

      <Col xs={12} className="text-center">
        <a
          href="https://www.youtube.com/channel/UCdCODCOiHkQXfCGHGDQel4Q"
          target="_blank"
        >
          <Button
            style={{ backgroundColor: "#FF0000" }}
            className="p-3 m-3"
            variant="transparent"
          >
            <h5 className="text-white p-0 m-0">
              <FontAwesomeIcon icon={faYoutube} /> Find More On YouTube Channel
            </h5>
          </Button>
        </a>
      </Col>
    </PageSection>
  );
};

export default VlogSection;
