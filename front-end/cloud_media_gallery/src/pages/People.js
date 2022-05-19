import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PeopleList from "../components/People/PeopleList";

const PeoplePage = () => {
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
        <h2>People</h2>
      </div>
      <PeopleList />
    </>
  );
};

export default PeoplePage;
