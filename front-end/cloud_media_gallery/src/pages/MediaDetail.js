import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { API_KEY } from "../util/api-key";
import Media from "../components/Media/Media";
import useHttp from "../hooks/http-hook";

const transformTempData = (data) => {
  return {
    url: data.url,
    alt: data.title,
    tags: data.title.split(" "),
    date: data.date,
    type: data.media_type,
  };
};

const MediaDetailPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { data, sendRequest, cleanUp } = useHttp();
  const navigate = useNavigate();
  const { mediaId } = useParams();
  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    isLoggedIn &&
      sendRequest(
        `https://api.nasa.gov/planetary/apod?date=${mediaId}&api_key=${API_KEY}`
      );

    return cleanUp;
  }, [sendRequest, cleanUp, isLoggedIn, mediaId]);
  return (
    <>
      {/* <h2>Media Detail</h2> */}
      {data && <Media {...transformTempData(data)} />}
    </>
  );
};

export default MediaDetailPage;
