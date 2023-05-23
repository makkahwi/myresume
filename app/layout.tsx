import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suhaib Ahmad - Resume Website",
  description: "Suhaib Ahmad Resume Website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={"bg-light " + inter.className}>
        <div
          className="card border border-2 border-warning"
          style={{
            minHeight: "90vh",
            width: "95vw",
            margin: "5vh 2.5vw",
            overflowX: "hidden",
          }}
        >
          <div className="card-body p-0 row g-0 border-0 w-100">
            <div className="col-md-5 p-4 m-0 text-center text-white bg-warning">
              <Header />
            </div>

            <div className="col-md-1 p-0 m-0">
              <Navbar />
            </div>

            <div className="col-md-6 p-4 m-0">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
