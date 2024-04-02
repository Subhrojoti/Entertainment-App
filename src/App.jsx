
import React from "react";
import "./App.css";
import Home from "./components/Home";
import DetailsPage from "./components/DetailsPage";
import LoginSignUp from "./components/LoginSignUp";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import TvSeriesPage from "./components/TvSeriesPage";
function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvseries" element={<TvSeriesPage />} />
        <Route path="/detail/:movieid/:mediatype" element={<DetailsPage />} />
        <Route path="/signup" element={<LoginSignUp isSignUp={true} />} />
        <Route path="/login" element={<LoginSignUp isSignUp={false} />} />
      </Routes>
    </>
  );
}

export default App;
