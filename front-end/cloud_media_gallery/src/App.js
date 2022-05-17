import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MainNavigation from "./components/layout/MainNavigation";
import "./App.css";

import * as Pages from "./pages";
import MainHeader from "./components/layout/MainHeader";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="app">
      <MainHeader pseudo={true} />
      <MainHeader />
      <div className="main">
        {isLoggedIn && <MainNavigation />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Pages.HomePage />} />
            <Route path="login" element={<Pages.LoginPage />} />
            <Route path="signup" element={<Pages.SignUpPage />} />
            <Route path="albums" element={<Pages.AlbumsPage />} />
            <Route path="album/:albumId" element={<Pages.AlbumPage />} />
            <Route path="people" element={<Pages.PeoplePage />} />
            <Route path="events" element={<Pages.EventsPage />} />
            <Route path="event/:eventId" element={<Pages.EventPage />} />
            <Route path="explore" element={<Pages.ExplorePage />} />
            <Route path="media/:mediaId" element={<Pages.MediaDetailPage />} />
            <Route path="share" element={<Pages.SharePage />} />
            <Route path="*" element={<Pages.NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
