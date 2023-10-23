import SectionTitle from "./SectionTitle";

const PageSection = ({ title, subtitle, children, color = "light" }) => {
  return (
    <div className={`bg-${color} p-5`}>
      {title && (
        <SectionTitle title={title} subtitle={subtitle} color={color} />
      )}

      {children}
    </div>
  );
};

export default PageSection;
