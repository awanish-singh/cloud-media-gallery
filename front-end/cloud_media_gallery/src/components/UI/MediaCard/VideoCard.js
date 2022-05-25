import classes from "./VideoCard.module.css";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from "react";

const VideoCard = (props) => {
  const videoRef = useRef();
  const [videoHeight, setVideoHeight] = useState("");

  useEffect(() => {
    const videoDem = videoRef.current.getBoundingClientRect();

    const height = videoDem.width * 0.6;

    setVideoHeight(height);
  });

  return (
    <div
      ref={videoRef}
      className={classes.video}
      style={{ height: videoHeight }}
    >
      <IconContext.Provider value={{ size: "40px" }}>
        <span className={classes.videoIcon}>
          <MdOutlinePlayCircleFilled />
        </span>
      </IconContext.Provider>
      <video>
        <source
          style={{ paddingTop: "60%" }}
          src={`${props.url}#t=0.1`}
        ></source>
      </video>
    </div>
  );
};

export default VideoCard;
