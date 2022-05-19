import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Album from "./Album";

const AlbumsPage = ({ items }) => {
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

    <div>
      <div className="title">
        <h2>Album</h2>
      </div>

      <div class="main-list"><Album items={albumData} /></div>
    </div>
  );
};

export default AlbumsPage;
