import items from "./data";
import Album from "./Album";

import classes from "./AlbumList.module.css";

const AlbumList = (props) => {
  return (
    <>
      <div>
        <ul className={classes.albumList}>
          {items.map((albumData) => {
            return (
              <li key={albumData.id} className={classes.album}>
                <Album {...albumData} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AlbumList;
