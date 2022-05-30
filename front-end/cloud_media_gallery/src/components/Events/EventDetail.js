import { useNavigate } from "react-router-dom";
import MediaCard from "../UI/MediaCard";
import classes from "./EventDetail.module.css";
import { MdLocationPin } from "react-icons/md";

const EventDetail = (props) => {
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
    <section className={classes.event}>
      <h6 className={classes.description}>{props.description}</h6>
      <p className={classes.location}>
        <MdLocationPin />
        <span>{props.location}</span>
      </p>
      <p className={classes.date}>{new Date(props.date).toDateString()}</p>
      <ul>{mediaList}</ul>
    </section>
  );
};

export default EventDetail;
