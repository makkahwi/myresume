import Link from "next/link";

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
    <div className="row g-0 h-100">
      {navLinks.map(({ text }, i) => (
        <Link
          className={`col-md-12 col-2 text-white text-center text-decoration-none py-3
                        ${i % 2 === 0 ? "bg-dark" : "bg-primary"}`}
          href="/"
          key={i}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
