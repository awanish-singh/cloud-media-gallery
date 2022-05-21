import items from "./data";
import Album from "./Album";

import classes from "./AlbumList.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const AlbumList = React.memo((props) => {
  const navigate = useNavigate();
  const { albums } = useSelector((state) => state.albums);

  const albumClickHandler = (albumId) => {
    const link = `/album/${albumId}`;
    navigate(link);
  };
  return (
    <>
      <div>
        <ul className={classes.albumList}>
          {albums.map((albumData) => {
            return (
              <li
                onClick={albumClickHandler.bind(this, albumData.date)}
                key={albumData.date}
                className={classes.album}
              >
                <Album
                  id={albumData.date}
                  img={albumData.url}
                  count={Math.round(Math.random() * 30) + 1}
                  title={albumData.title}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
});

export default AlbumList;
