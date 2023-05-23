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

      <div className="col-md-12 col-6 py-4">
        <h2>{data.main.name}</h2>

        <h4>Full-Stack Web Developer</h4>
      </div>

      <div className="col-12">
        <div className="row justify-content-center py-4">
          {socials.map(({ icon, url }, i) => (
            <div className="col-lg-1 col-md-2 col-1 p-2" key={i}>
              <small>
                <a href={url} target="_blank" className="text-white">
                  <FontAwesomeIcon icon={icon} />
                </a>
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
