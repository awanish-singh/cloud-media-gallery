import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Home from "../components/Home/Home";
import useHttp from "../hooks/http-hook";

import { API_KEY } from "../util/api-key";

const HomePage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { data, sendRequest, cleanUp } = useHttp();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    } else {
      console.log("sending");
      sendRequest(
        `https://api.nasa.gov/planetary/apod?count=10&api_key=${API_KEY}`,
        "GET"
      );
    }

    return cleanUp;
  }, [sendRequest, cleanUp]);
  return (
    <>
      <div>
        <h2>Home</h2>
      </div>
      {data && <Home data={data} />}
    </>
  );
};

export default HomePage;
