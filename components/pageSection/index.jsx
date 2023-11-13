import SectionTitle from "./SectionTitle";

const PageSection = ({
  title,
  subtitle,
  children,
  color = "white",
  rounded = false,
  card = false,
  id = "",
  ...rest
}) => {
  const Content = () => (
    <div
      className={`bg-${color} p-5 ${rounded && "rounded"}`}
      id={id}
      {...rest}
    >
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
