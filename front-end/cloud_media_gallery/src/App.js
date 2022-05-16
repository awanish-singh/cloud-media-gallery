import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import "./App.css";

import * as Pages from "./pages";
import MainHeader from "./components/layout/MainHeader";

function App() {
  return (
    <div className="app">
      <MainHeader pseudo={true} />
      <MainHeader />
      <div className="main">
        <MainNavigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Pages.HomePage />} />
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
