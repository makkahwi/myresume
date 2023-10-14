import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="error-area" style={{ minHeight: "100vh" }}>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <img src="/images/error.png" alt="image" width="80%" />
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>

              <Link href="/">
                <span className="default-btn">Back To Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
