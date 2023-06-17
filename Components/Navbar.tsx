"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaHome,
  FaIndustry,
  FaPhone,
  FaPortrait,
  FaScroll,
} from "react-icons/fa";

const Navbar = () => {
  const { asPath } = useRouter();

  const navLinks = [
    { text: "Home", link: "/", Icon: FaHome },
    { text: "About", link: "/about", Icon: FaPortrait },
    { text: "Resume", link: "/resume", Icon: FaScroll },
    { text: "Portfolio", link: "/portfolio", Icon: FaIndustry },
    { text: "Contacts", link: "/contacts", Icon: FaPhone },
  ];

  return (
    <div className="row g-0 h-100 shadow">
      <span
        className="col-md-12 col-2 text-center text-decoration-none py-3 border-0 text-dark bg-theme"
        style={{ cursor: "pointer" }}
      >
        <Link href={""}>
          <img src="/images/logo.png" width="50%" alt="logo" />
        </Link>
      </span>

      {navLinks.map(({ text, link, Icon }, i) => (
        <span
          className={`col-md-12 col-2 text-center text-decoration-none py-4 border border-1 border-dark
                        ${
                          asPath === link
                            ? "text-dark bg-white shadow-lg"
                            : "text-white bg-dark"
                        }`}
          style={{ cursor: "pointer" }}
          key={i}
        >
          <Link href={link}>
            <Icon className="h3" />
            {/* {text} */}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Navbar;
