import Navbar from "@/Components/Navbar";
import data from "@/resumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suhaib Ahmad - Resume Website",
  description: "Suhaib Ahmad Resume Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socials = [...data.main.socialList, ...data.links.web];

  return (
    <html lang="en">
      <body className={"bg-light " + inter.className}>
        <div
          className="card border border-2 border-warning"
          style={{ height: "90vh", width: "95vw", margin: "5vh 2.5vw" }}
        >
          <div className="card-body p-0 row g-0 border-0 w-100">
            <div className="col-md-5 m-0 p-4 text-center text-white bg-warning">
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
            </div>

            <div className="col-md-1 p-0 m-0">
              <Navbar />
            </div>

            <div className="col-md-6 p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
