import { useEffect } from "react";
import { useSelector } from "react-redux";
import dummy from "../../dummy.png";
import useHttp from "../../hooks/http-hook";
// import MediaCard from "../../UI/MediaCard";
import MediaGroup from "./MediaGroup";

const DUMMY_DATA = [
  {
    id: "g1",
    date: new Date("01-04-2022").toDateString(),
    media: [
      {
        id: "pic1",
        mediaId: "pic1",
        url: require("../../logo.svg").default,
        alt: "pic1",
        type: "image",
      },
      {
        id: "pic2",
        mediaId: "pic2",
        url: dummy,
        alt: "pic2",
        type: "image",
      },
      {
        id: "pic3",
        mediaId: "pic3",
        url: require("../../logo.svg").default,
        alt: "pic3",
        type: "image",
      },
    ],
  },
  {
    id: "g2",
    date: new Date("12-05-2022").toDateString(),
    media: [
      {
        id: "pic1",
        mediaId: "pic1",
        url: require("../../logo.svg").default,
        alt: "pic1",
        type: "image",
      },
      {
        id: "pic2",
        mediaId: "pic2",
        url: dummy,
        alt: "pic2",
        type: "image",
      },
      {
        id: "pic3",
        mediaId: "pic3",
        url: require("../../logo.svg").default,
        alt: "pic3",
        type: "image",
      },
    ],
  },
];

const Home = (props) => {
  const { allMedia } = useSelector((state) => state.home);
  const mediaList = allMedia.map((group) => {
    return <MediaGroup key={group.id} {...group} />;
  });

  return (
    <div>
      <div className="container">{mediaList}</div>
    </div>
  );
};

export default Home;
