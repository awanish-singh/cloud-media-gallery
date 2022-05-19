import MediaCard from "../UI/MediaCard";

import classes from "./PeopleItem.module.css";

const PeopleItem = (props) => {
  return (
    <div className={classes.item}>
      <MediaCard url={props.url} alt={props.alt} shape="circle" type="image" />
      <h6 className={classes.name}>{props.name}</h6>
    </div>
  );
};

export default PeopleItem;
