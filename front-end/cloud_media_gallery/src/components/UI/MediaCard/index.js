import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";

const MediaCard = (props) => {
  const isVideo = props.type.includes("video") ? true : false;

  return <>{isVideo ? <VideoCard {...props} /> : <ImageCard {...props} />}</>;
};

export default MediaCard;
