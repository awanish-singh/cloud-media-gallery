import MediaCard from "../UI/MediaCard";

const Album = ({ id, img, title, count }) => {
  return (
    <div class="grid-container">
      <div class="grid-item">
        <div className="album-data" key={id}>
          <MediaCard url={img} alt={title} type="image" />
          <div className="album-info">
            <h5 className="mt-2">{title}</h5>
            <p id="item-text">
              {count} item{count > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
