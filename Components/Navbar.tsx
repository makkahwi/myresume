const Navbar = () => {
  const navLinks = [
    { text: "Home" },
    { text: "About" },
    { text: "Resume" },
    { text: "Works" },
    { text: "Contacts" },
    { text: "Lang" },
  ];

  return (
    <div
      className="nav flex-column nav-pills h-100"
      role="tablist"
      aria-orientation="vertical"
    >
      {navLinks.map(({ text }, i) => (
        <div
          className={`nav-link rounded-0 text-white text-center 
                        ${i % 2 === 0 ? "bg-dark" : "active"}`}
          data-toggle="pill"
          role="tab"
          aria-selected="true"
          style={{
            height: `${(1 / navLinks.length) * 100}%`,
            cursor: "pointer",
          }}
          key={i}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
