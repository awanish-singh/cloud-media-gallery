import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import SearchBar from "../components/UI/SearchBar";

const ExplorePage = React.memo(() => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  });
  return (
    <>
      <div>
        <h2>Explore</h2>
      </div>
      <SearchBar />
    </>
  );
});

export default ExplorePage;
