import classes from "./ImageCard.module.css";

const ImageCard = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url("${props.url}")`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default ImageCard;
