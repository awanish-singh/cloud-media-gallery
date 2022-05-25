import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";
import classes from "./MediaCard.module.css";

const MediaCard = (props) => {
  const isVideo = props.type.includes("video") ? true : false;

  return (
    <>
      <div className={classes.media + " " + classes[props.shape]}>
        {isVideo ? <VideoCard {...props} /> : <ImageCard {...props} />}
      </div>
    </>
  );
};

export default MediaCard;
