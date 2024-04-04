// import React from 'react'
// import SideBar from './SideBar'
// import SearchBar from './SearchBar'

// const BookMarkPage = () => {
//   return (
//     <div className="moviesPage">
//     <div className="sideBar">
//       <SideBar />
//     </div>
//     <div className="mainContent">
//       <div className="searchBar w-screen">
//         <SearchBar placeholder="Search for bookmarks"/>
//       </div>
//       <div className="heading">Bookmarks</div>


//     <div>
        
//     </div>

//       </div>
//       </div>
//   )
// }

// export default BookMarkPage;











import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import Card from './Card';

const BookMarkPage = () => {
  // State to store bookmarked cards
  const [bookmarkedCards, setBookmarkedCards] = useState([]);

// Function to toggle bookmark status
const toggleBookmark = (id) => {
  // Create a copy of the bookmarkedCards array
  const updatedBookmarkedCards = [...bookmarkedCards];
  console.log(id)
  
  // Find the index of the card in the bookmarkedCards array
  const cardIndex = updatedBookmarkedCards.findIndex((card) => card.id === id);
  console.log(id)
  // If the card is found
  if (cardIndex !== -1) {
    // Toggle the isBookmarked property of the card at the specified index
    updatedBookmarkedCards[cardIndex] = {
      ...updatedBookmarkedCards[cardIndex],
      isBookmarked: !updatedBookmarkedCards[cardIndex].isBookmarked
    };
  
    // Update state with the updated bookmarkedCards array
    setBookmarkedCards(updatedBookmarkedCards);
  }
};

// Update localStorage with the updated bookmarked cards after state update
useEffect(() => {
  localStorage.setItem('bookmarkedCards', JSON.stringify(bookmarkedCards));
  console.log(bookmarkedCards)
}, [bookmarkedCards]);

  return (
    <div className="moviesPage">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainContent">
        <div className="searchBar w-screen">
          <SearchBar placeholder="Search for bookmarks" />
        </div>
        <div className="heading">Bookmarks</div>
        <div className="card-container">
          {bookmarkedCards.map((card, index) => (
              <Card
              key={index}
              {...card} // Spread the card props
              toggleBookmark={() => toggleBookmark(card.id)} // Pass the toggleBookmark function with card id
              isBookmarked={card.isBookmarked} // Pass the isBookmarked state
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMarkPage;
