import data from "@/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const Header = () => {
  const socials = [...data.main.socialList, ...data.links.web];

  return (
    <Fragment>
      <img
        src={"/images/" + data.main.profile}
        width="50%"
        alt="profileImage"
        className="rounded-circle border border-5 border-white"
      />

      <div className="py-4">
        <h2>{data.main.name}</h2>

        <h4>Full-stack web developer</h4>
      </div>

      <div className="row justify-content-center">
        {socials.map(({ icon, url }, i) => (
          <div className="col-1" key={i}>
            <h6>
              <a href={url} target="_blank" className="text-white">
                <FontAwesomeIcon icon={icon} />
              </a>
            </h6>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Header;
