import SectionTitle from "./SectionTitle";

const PageSection = ({
  title,
  subtitle,
  children,
  color = "light",
  rounded = false,
  card = false,
}) => {
  const Content = () => (
    <div className={`bg-${color} p-5 ${rounded && "rounded"}`}>
      {title && (
        <SectionTitle title={title} subtitle={subtitle} color={color} />
      )}

      {children}
    </div>
  );

  return card ? (
    <div className="p-5">
      <Content />
    </div>
  ) : (
    <Content />
  );
};

export default PageSection;
