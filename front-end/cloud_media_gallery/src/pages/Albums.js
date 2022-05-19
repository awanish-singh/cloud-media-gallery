import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Album from "./Album";
import items from "../components/Albums/data";
import AlbumList from "../components/Albums/AlbumList";

const AlbumsPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [albumData] = useState(items);
  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  });
  return (
    <>
      <div>
        <h2>Albums</h2>
      </div>

      <AlbumList />
    </>
  );
};

export default AlbumsPage;
