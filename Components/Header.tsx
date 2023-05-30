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

        <h4>Senior Full-Stack Web Developer</h4>
      </div>

      <div className="col-12">
        <div className="justify-content-center py-3">
          {socials.map(({ Icon, url }, i) => (
            <a href={url} target="_blank" className="text-white mx-2" key={i}>
              <Icon size={30} className="my-1" />
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
