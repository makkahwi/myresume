const PageLayout = ({ title, children }) => {
  return (
    <main>
      <div className="justify-content-center">
        <h3 className="text-center mb-4">{title}</h3>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
