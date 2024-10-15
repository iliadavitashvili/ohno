import arrowIcon from "../images/buttonIcons/arrow.png";
import playIcon from "../images/buttonIcons/play.svg";
import messageIcon from "../images/buttonIcons/message.png";

const CustomButton = ({
  text,
  //   color = "#003459",
  bgcolor = "transparent",
  icon,
  children,
  transparent,
  ...rest
}) => {
  let styles = {
    color: transparent ? "#003459" : "white",
    fontSize: "14px",
    fontWeight: "bolder",
    padding: "0 10px",
    backgroundColor: transparent ? "transparent" : "#003459",
    border: transparent ? "2px solid #003459 " : "2px solid white",
    height: "48px",
    width: "160px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: icon === "message" ? "row-reverse" : "",
    alignItems: "center",
    whiteSpace: "nowrap",
    ...rest,
  };
  const imageStyles = {
    margin: "0 10px",
    border: icon === "play" && "2px solid white",
    borderRadius: icon === "play" && "50%",
  };
  let image = "";
  if (icon === "arrow") {
    image = arrowIcon;
  } else if (icon === "play") {
    image = playIcon;
  } else if (icon === "message") {
    image = messageIcon;
  }
  return (
    <button style={styles} {...rest}>
      {text || children}
      {icon && <img src={image} style={imageStyles} />}
    </button>
  );
};

export default CustomButton;
