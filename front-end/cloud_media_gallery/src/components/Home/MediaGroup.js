import MediaCard from "../UI/MediaCard";

const MediaGroup = (props) => {
  const media = props.media.map((val) => {
    return (
      <div key={val.id} className="col-sm-4">
        <MediaCard
          id={val.id}
          url={val.url}
          alt={val.alt}
          type={val.type}
          shape="rectangle"
        />
      </div>
    );
  });
  return (
    <div>
      <h6 className="mb-2 mt-4">{props.date}</h6>
      <div className="row justify-content-between">{media}</div>
    </div>
  );
};

export default MediaGroup;
