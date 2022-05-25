import { useEffect, useRef, useState } from "react";
import classes from "./Media.module.css";

const Media = (props) => {
  const mediaContRef = useRef();
  const imgRef = useRef();
  const videoRef = useRef();

  const [mediaClass, setMediaClass] = useState("");

  useEffect(() => {
    const currentEl = props.type.includes("image") ? imgRef : videoRef;
    const mediaContainerDim = mediaContRef.current.getBoundingClientRect();
    const elDim = currentEl.current.getBoundingClientRect();

    const mediaContainerRatio =
      mediaContainerDim.height / mediaContainerDim.width;
    const elRatio = elDim.height / elDim.width;

    // console.log(imgRef.current.style.width);

    if (elRatio < mediaContainerRatio) {
      currentEl.current.style.width = elDim.width + "px";
      setMediaClass("horizontal");
    } else {
      currentEl.current.style.height = elDim.height + "px";
      setMediaClass("vertical");
    }

    // setImgClass(imgRatio < imgContainerRatio ? "horizontal" : "vertical");

    // console.log(imgContainerRatio, imgRatio);
  });
  const imageComp = (
    <img
      ref={imgRef}
      className={classes[mediaClass]}
      src={props.url}
      alt={props.alt}
    />
  );

  const videoComp = (
    <video
      ref={videoRef}
      alt={props.alt}
      className={classes[mediaClass]}
      controls
    >
      <source src={props.url}></source>
    </video>
  );

  return (
    <section className={classes.container}>
      <div className={classes.imgContainer}>
        <div className={classes.media} ref={mediaContRef}>
          {props.type === "image" ? imageComp : videoComp}
        </div>
      </div>
    </section>
  );
};

export default Media;
