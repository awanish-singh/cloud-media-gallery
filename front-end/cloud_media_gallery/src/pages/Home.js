import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Home from "../components/Home/Home";
import useHttp from "../hooks/http-hook";

import { API_KEY } from "../util/api-key";
import { homeActions } from "../store/home-slice";

const transformTempData = (data) => {
  return data.map((val) => {
    return {
      id: val.title,
      date: val.date,
      media: [
        {
          id: val.title,
          mediaId: val.date,
          url: val.url,
          alt: val.title,
          type: val.media_type,
        },
      ],
    };
  });
};

const HomePage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { allMedia } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, sendRequest, cleanUp } = useHttp();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (isLoggedIn && allMedia.length === 0) {
      sendRequest(
        `https://api.nasa.gov/planetary/apod?count=10&api_key=${API_KEY}`,
        "GET"
      );
    }

    return cleanUp;
  }, [isLoggedIn, allMedia, sendRequest, cleanUp]);

  useEffect(() => {
    if (data) {
      dispatch(homeActions.fill({ allMedia: transformTempData(data) }));
    }
  }, [data, dispatch]);

  return (
    <>
      <div>
        <h2>Home</h2>
      </div>
      <Home />
    </>
  );
};

export default HomePage;
