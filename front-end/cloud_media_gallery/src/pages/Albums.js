import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../util/api-key";
import { useMemo } from "react";
import Album from "./Album";
import items from "../components/Albums/data";
import AlbumList from "../components/Albums/AlbumList";
import SearchBar from "../components/UI/SearchBar";
import useHttp from "../hooks/http-hook";

const AlbumsPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { data, sendRequest, cleanUp } = useHttp();
  const [albumData] = useState(items);
  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    } else {
      sendRequest(
        `https://api.nasa.gov/planetary/apod?count=13&api_key=${API_KEY}`,
        "GET"
      );
    }

    return cleanUp;
  }, [sendRequest, cleanUp, navigate, isLoggedIn]);

  const albumComp = useMemo(() => <AlbumList albums={data} />, [data]);
  return (
    <>
      <div>
        <h2>Albums</h2>
      </div>
      <SearchBar />
      {data && albumComp}
    </>
  );
};

export default AlbumsPage;
