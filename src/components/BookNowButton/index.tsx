"use client";

import { Link } from "react-scroll";

const BookNowButton = () => {
  return (
    <Link
      to="contact"
      className="btn btn-danger position-fixed bottom-0 end-0 m-5 p-3 rounded-circle text-capitalize"
      role="button"
      style={{
        zIndex: 1000,
        fontSize: "calc(10px + 0.15vw)",
      }}
    >
      Book Call
      <br />
      For Free
    </Link>
  );
};

export default BookNowButton;
