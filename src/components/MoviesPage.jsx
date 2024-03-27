import React from 'react';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import '../styles/moviesPage.css';

const MoviesPage = () => {
  return (
    <div className='moviesPage'>
      <div className='sideBar'>
        <SideBar />
      </div>
      <div className='searchBar'>
        <SearchBar placeholder="Search for movies"/>
      </div>
    </div>
  );
}

export default MoviesPage;
