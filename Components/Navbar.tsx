import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Resume", link: "/resume" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Contacts", link: "/contacts" },
    { text: "Lang", link: "#" },
  ];

  return (
    <div className="row g-0 h-100">
      {navLinks.map(({ text, link }, i) => (
        <Link
          className={`col-md-12 col-2 text-white text-center text-decoration-none py-3
                        ${i % 2 === 0 ? "bg-dark" : "bg-primary"}`}
          href={link}
          key={i}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
