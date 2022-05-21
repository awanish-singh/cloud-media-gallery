import MediaCard from "../UI/MediaCard";

const Album = ({ id, img, title, count }) => {
  return (
    <div className="album-data">
      <MediaCard url={img} alt={title} type="image" shape="rectangle" />
      <div className="album-info">
        <h5 className="mt-2">{title}</h5>
        <p id="item-text">
          {count} item{count > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default Album;
