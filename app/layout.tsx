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
  return (
    <html lang="en">
      <body className={"bg-light " + inter.className}>
        <div
          className="card"
          style={{ height: "90vh", width: "95vw", margin: "5vh 2.5vw" }}
        >
          <div className="card-body p-4 row">
            <div className="col-md-6 text-center"></div>

            <div className="col-md-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
