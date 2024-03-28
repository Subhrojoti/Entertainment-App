import "./App.css";
import Card from "./components/Card";
import MoviesPage from "./components/MoviesPage";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import TrendingCard from "./components/TrendingCard";
import Home from "./components/Home";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <>
      {/* <SearchBar />
      <SideBar />
      <h1>Entertainment App</h1> */}
      {/* <div className="testing">
        <Card /> */}
      {/* <TrendingCard /> */}
      {/* </div> */}
      {/* <DetailsPage /> */}
      <Home placeholder="Search for movies" />
    </>
  );
}

export default App;
