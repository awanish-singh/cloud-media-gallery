import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../util/api-key";
import { useMemo } from "react";
import Event from "./Event";
import EventList from "../components/Events/EventList";
import SearchBar from "../components/UI/SearchBar";
import useHttp from "../hooks/http-hook";
import { eventsActions } from "../store/events-slice";

const EventsPage = React.memo((props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.events);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, sendRequest, cleanUp } = useHttp();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && events.length === 0) {
      sendRequest(
        `https://api.nasa.gov/planetary/apod?count=13&api_key=${API_KEY}`,
        "GET"
      );
    }
    return cleanUp;
  }, [sendRequest, cleanUp, events, isLoggedIn]);

  useEffect(() => {
    if (data) {
      dispatch(eventsActions.fill({ events: data }));
    }
  }, [data, dispatch]);

  const eventComp = useMemo(() => <EventList />, []);
  return (
    <>
      <div>
        <h2>Events</h2>
      </div>
      <SearchBar />
      {eventComp}
    </>
  );
});

export default EventsPage;
