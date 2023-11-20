import Typography from "components/typography";

const PagesHeader = ({ title }) => {
  const Content = () => (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 193, 7, 0.3), rgba(255, 193, 7, 0.3)), url(/images/profile.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        padding: "12.5vh 10vw",
        margin: 0,
        width: "100%",
      }}
    >
      <Typography
        size={1}
        justify="center"
        className="py-3 px-0 m-0"
        color="white"
      >
        {title}
      </Typography>
    </div>
  );

  return <Content />;
};

export default PagesHeader;
