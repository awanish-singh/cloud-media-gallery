import { useNavigate } from "react-router-dom";
import MediaCard from "../UI/MediaCard";
import classes from "./AlbumDetail.module.css";

const AlbumDetail = (props) => {
  const navigate = useNavigate();

  const mediaList = props.media.map((item) => {
    return (
      <li key={item.id} onClick={navigate.bind(this, "/media/" + item.mediaId)}>
        <MediaCard
          url={item.url}
          alt={item.alt}
          type={item.type}
          shape="rectangle"
        />
      </li>
    );
  });
  return (
    <section className={classes.album}>
      <h6 className={classes.description}>{props.description}</h6>
      <p className={classes.date}>{new Date(props.date).toDateString()}</p>
      <ul>{mediaList}</ul>
    </section>
  );
};

export default AlbumDetail;
