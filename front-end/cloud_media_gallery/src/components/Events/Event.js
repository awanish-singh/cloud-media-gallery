import MediaCard from "../UI/MediaCard";

const Event = ({ id, img, title, count, type }) => {
  return (
    <div className="event-data">
      <MediaCard url={img} alt={title} type={type} shape="rectangle" />
      <div className="event-info">
        <h5 className="mt-2">{title}</h5>
        <p id="item-text">
          {count} item{count > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default Event;
