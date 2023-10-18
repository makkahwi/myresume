const PageSection = ({ children, color = "light" }) => {
  return <div className={`bg-${color} p-5`}>{children}</div>;
};

export default PageSection;
