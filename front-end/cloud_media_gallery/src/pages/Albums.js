import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../util/api-key";
import { useMemo } from "react";
import Album from "./Album";
import items from "../components/Albums/data";
import AlbumList from "../components/Albums/AlbumList";
import SearchBar from "../components/UI/SearchBar";
import useHttp from "../hooks/http-hook";
import { albumsActions } from "../store/albums-slice";

const AlbumsPage = React.memo((props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { albums } = useSelector((state) => state.albums);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, sendRequest, cleanUp } = useHttp();
  const [albumData] = useState(items);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && albums.length === 0) {
      sendRequest(
        `https://api.nasa.gov/planetary/apod?count=13&api_key=${API_KEY}`,
        "GET"
      );
    }
    return cleanUp;
  }, [sendRequest, cleanUp, albums, isLoggedIn]);

  useEffect(() => {
    if (data) {
      dispatch(albumsActions.fill({ albums: data }));
    }
  }, [data, dispatch]);

  const albumComp = useMemo(() => <AlbumList />, []);
  return (
    <>
      <div>
        <h2>Albums</h2>
      </div>
      <SearchBar />
      {albumComp}
    </>
  );
});

export default AlbumsPage;
