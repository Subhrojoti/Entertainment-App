// Import necessary modules and components
import React from "react";
import "./App.css"; // Import CSS file for styling
import Home from "./components/Home"; // Import Home component
import DetailsPage from "./components/DetailsPage"; // Import DetailsPage component
import LoginSignUp from "./components/LoginSignUp"; // Import LoginSignUp component
import { Routes, Route } from "react-router-dom"; // Import Routes and Route components for routing
import MoviesPage from "./components/MoviesPage"; // Import MoviesPage component
import TvSeriesPage from "./components/TvSeriesPage"; // Import TvSeriesPage component
import BookMarkPage from "./components/BookMarkPage"; // Import BookMarkPage component

// Main App component
function App() {
  return (
    <>
      {/* Define routing for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvseries" element={<TvSeriesPage />} />
        <Route path="/detail/:movieid/:mediatype" element={<DetailsPage />} />
        <Route path="/bookmarks" element={<BookMarkPage />} />
        <Route path="/signup" element={<LoginSignUp isSignUp={true} />} />
        <Route path="/login" element={<LoginSignUp isSignUp={false} />} />
      </Routes>
    </>
  );
}

// Export the App component as default
export default App;
