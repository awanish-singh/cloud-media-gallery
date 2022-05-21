import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import PeopleList from "../components/People/PeopleList";
import SearchBar from "../components/UI/SearchBar";
import useHttp from "../hooks/http-hook";
import { peopleActions } from "../store/people-slice";

const PeoplePage = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { people } = useSelector((state) => state.people);
  const { data, sendRequest, cleanUp } = useHttp();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  });

  useEffect(() => {
    if (isLoggedIn && people.length === 0) {
      sendRequest("https://randomuser.me/api/?results=8", "GET");
    }
    return cleanUp;
  }, [isLoggedIn, sendRequest, cleanUp, people]);

  useEffect(() => {
    if (data) {
      dispatch(peopleActions.fill({ people: data.results }));
    }
  }, [data, dispatch]);

  return (
    <>
      <div>
        <h2>People</h2>
      </div>
      <SearchBar />
      <PeopleList />
    </>
  );
};

export default PeoplePage;
