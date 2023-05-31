import data from "@/resumeData";

const Header = () => {
  const socials = [
    ...data.main.socialList.reduce(
      (final, current) => [...final, ...current],
      []
    ),
    ...data.links.web.reduce((final, current) => [...final, ...current], []),
  ];

  return (
    <div className="row g-0 justify-content-center align-items-center">
      <div className="col-md-12 col-12">
        <img
          src={"/images/" + data.main.profile}
          width="100%"
          alt="profileImage"
          className="border border-5 border-white rounded-5"
        />
      </div>

      <div className="col-md-12 col-6 py-3">
        <h3>{data.main.name}</h3>

        <h5>Senior Full-Stack Developer</h5>
      </div>

      <div className="col-12">
        <div className="justify-content-center py-2">
          {socials.map(({ Icon, url }, i) => (
            <a href={url} target="_blank" className="text-white mx-2" key={i}>
              <Icon size={25} className="my-1" />
            </a>
          ))}
        </div>
      </div>

      <div className="col-12">
        <div className="btn-group py-3" role="group">
          <a
            href="/documents/Suhaib-Ahmad-WD-Resume-Sheet.pdf"
            download
            type="button"
            className="btn btn-light text-theme"
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
