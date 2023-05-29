const PageLayout = ({ title, children }) => {
  return (
    <main>
      <div className="justify-content-center">
        <h3 className="text-center my-4 text-theme text-decoration-underline">
          {title}
        </h3>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;