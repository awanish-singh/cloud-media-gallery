import classes from "./VideoCard.module.css";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const VideoCard = (props) => {
  return (
    <div className={classes.video}>
      <span className={classes.videoIcon}>
        <MdOutlinePlayCircleFilled />
      </span>
      <video>
        <source src={`${props.url}#t=0.1`}></source>
      </video>
    </div>
  );
};

export default VideoCard;
