import Typography from "components/typography";
import { Fragment } from "react";

const SectionTitle = ({ title = "", subtitle = "", color = "" }) => {
  const textColor = () => {
    switch (color) {
      case "secondary":
        return "white";
      case "warning":
        return "white";
      default:
        return "dark";
    }
  };

  return (
    <Fragment>
      <Typography size={6} justify="center" color={textColor()}>
        {subtitle}
      </Typography>

      <Typography
        size={2}
        justify="center"
        className="py-3 mb-5"
        color={textColor()}
      >
        {title}
      </Typography>
    </Fragment>
  );
};

export default SectionTitle;
