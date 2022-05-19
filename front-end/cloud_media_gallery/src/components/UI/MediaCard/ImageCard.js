import classes from "./ImageCard.module.css";

const ImageCard = (props) => {
  return (
    <div className={classes.img}>
      <div
        style={{
          backgroundImage: `url("${props.url}")`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default ImageCard;
