import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AlbumDetail from "../components/Albums/AlbumDetail";
import useHttp from "../hooks/http-hook";
import { API_KEY } from "../util/api-key";

const transformTempData = (data) => {
  return {
    title: data[data.length - 1].title,
    date: data[data.length - 1].date,
    description: data[data.length - 1].explanation,
    media: data
      .map((item) => ({
        id: item.title,
        mediaId: item.date,
        url: item.url,
        date: item.date,
        alt: item.title,
        type: item.media_type,
      }))
      .reverse(),
  };
};

const AlbumPage = ({ items }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { data, sendRequest, cleanUp } = useHttp();
  const navigate = useNavigate();
  const { albumId } = useParams();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const startDate = new Date(albumId);
    let endDate =
      startDate - (1000 * 60 * 60 * 24 * Math.round(Math.random() * 20) + 1);
    endDate = new Date(endDate);
    endDate = `${endDate.getFullYear()}-${
      endDate.getMonth() + 1
    }-${endDate.getDate()}`;

    console.log(endDate);

    {
      isLoggedIn &&
        sendRequest(
          `https://api.nasa.gov/planetary/apod?start_date=${endDate}&end_date=${albumId}&api_key=${API_KEY}`
        );
    }

    return cleanUp;
  }, [isLoggedIn, sendRequest, cleanUp]);

  return (
    <>
      <div>
        <h2>{data ? data[data.length - 1].title : "Album"}</h2>
      </div>
      {data && <AlbumDetail {...transformTempData(data)} />}
    </>
  );
};

export default AlbumPage;
