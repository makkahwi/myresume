import data from "@/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const socials = [...data.main.socialList, ...data.links.web];

  return (
    <div className="row g-0 justify-content-center align-items-center">
      <div className="col-md-6 col-6">
        <img
          src={"/images/" + data.main.profile}
          width="90%"
          alt="profileImage"
          className="rounded-circle border border-5 border-white"
        />
      </div>

      <div className="col-md-12 col-6 py-3">
        <h2>{data.main.name}</h2>

        <h4>Full-Stack Web Developer</h4>
      </div>

      <div className="col-12">
        <div className="row justify-content-center py-3">
          {socials.map(({ icon, url }, i) => (
            <div className="col-lg-1 col-md-2 col-1 px-2" key={i}>
              <a href={url} target="_blank" className="text-white">
                <small>
                  <FontAwesomeIcon icon={icon} />
                </small>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12">
        <div className="btn-group py-3" role="group">
          <a
            href="/documents/Suhaib-Ahmad-WD-Resume-Sheet.pdf"
            download
            type="button"
            className="btn btn-light text-warning"
          >
            Download Resume
          </a>

          <a
            href="/documents/Suhaib-Ahmad-WD-Resume-Sheet.pdf"
            download
            type="button"
            className="btn btn-outline-light"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
