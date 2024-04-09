

# Bookmark Page :
(Here I am facing Problem)
I'm encountering difficulties with implementing the bookmark functionality in my application. The goal is to allow users to save their favorite movies or TV shows locally and have them displayed in a bookmark section for easy access later. However, despite implementing the logic to save the card data to local storage and display it in the bookmark section, it's not functioning as expected.

In the application, each card representing a movie or TV show includes a bookmark icon. When clicked, it's supposed to trigger an event to save the corresponding card data to local storage. Additionally, the bookmarked cards should be rendered in a bookmark section for the user to view later.

I've ensured that the bookmark icon's onClick event handler correctly triggers the function responsible for saving the card data to local storage. However, upon inspection, it seems that the data isn't being stored properly, or there might be an issue with retrieving the saved data and rendering it in the bookmark section.

I've reviewed the implementation multiple times and can't seem to identify the root cause of the problem. I suspect there might be an error in how the data is formatted before saving it to local storage or how it's retrieved and displayed in the bookmark section.

What i have done in my bookmark Page (Description):

State Management: It utilizes React's useState hook to manage the state of bookmarked cards (bookmarkedCards).

Bookmark Toggle Functionality: The toggleBookmark function allows users to toggle the bookmark status of a card by updating its isBookmarked property. This function is triggered when a user interacts with the bookmark icon on a card.

Local Storage Integration: The component utilizes React's useEffect hook to synchronize the state of bookmarked cards with the browser's local storage. Whenever the bookmarkedCards state changes, it updates the local storage with the latest data.

Rendering Bookmarked Cards: It renders the bookmarked cards in the card-container section, iterating over the bookmarkedCards array and rendering a Card component for each card. The toggleBookmark function is passed down to each Card component to enable bookmark toggling.

# CardComponent:

Card component represents a reusable card UI element used to display information about movies or TV shows. 
It includes features such as displaying the poster image, title, release date, and bookmarking functionality.
The component utilizes React icons for bookmarking, CSS modules for styling, and the Link component 
from react-router-dom for navigation to detailed information pages. It also includes placeholder images for 
cases where the poster image is not available. The component is highly configurable, accepting various props 
such as title, poster URL, release date, media type, and more, to adapt to different data sources and use cases.


# Movie Details Page Component:

This React component which displays detailed information about movies or TV shows. 
It fetches data from The Movie Database (TMDb) API, including title, poster, rating, length, genres, synopsis, 
cast, and external links like IMDb and the movie's homepage.


# Home Component:

The Home component represents the main page of a movie and TV show browsing application. 
It consists of a sidebar, a search bar, and sections for displaying trending content and recommended 
movies or TV shows. The component utilizes data fetched from The Movie Database (TMDb) API to populate
these sections dynamically.

Features:
Trending Section: Displays trending movies and TV shows fetched from TMDb API, allowing users to scroll through them horizontally.
Recommended Section: Shows recommended movies or TV shows based on user preferences or a default list if no search query is provided.
Search Bar: Enables users to search for movies and TV shows by title or keywords.
Responsive Design: The component is designed to adapt to different screen sizes and devices for a seamless user experience.
Technologies Used:
React: The component is built using React, a popular JavaScript library for building user interfaces.
Axios: Axios is used for making HTTP requests to fetch data from the TMDb API.
React Icons: Various icons from React Icons library are utilized for visual elements.
CSS Modules: CSS Modules are employed for modular CSS styling, ensuring encapsulation and maintainability.



# LoginSignUp Component:

The LoginSignUp component represents a login and sign-up form for users of a movie browsing application. 
It allows users to either sign up for a new account or log in to an existing one. 
The component utilizes React state to manage form inputs, errors, and form submission.
 Additionally, it integrates with the React Router library to enable navigation between different pages 
of the application.

The key features of the LoginSignUp component include:

Sign-Up and Login Forms: Users can toggle between sign-up and login forms to create a new account or access an existing one.

Form Validation: Input fields for email, password, and repeat password (for sign-up) are validated to ensure correct input format and length.

Error Handling: Errors are displayed to users if input validation fails or if there are issues with submitting the form data.

API Integration: The component interacts with a backend server using HTTP requests (POST) to handle sign-up and login actions.

Toast Notifications: Success and error messages are displayed using toast notifications from the react-toastify library, providing feedback to users about the outcome of their actions.

# MoviePage Component:

The MoviesPage component is a React component that represents a page dedicated to displaying movies
in a movie browsing application. It includes functionality for searching movies, rendering movie cards 
with relevant information, and integrating with external APIs to fetch movie data.

Key Features:
Search Functionality: Users can search for movies using a search bar located at the top of the page. 
The component dynamically updates the displayed movies based on the user's search query.

Movie Cards: Movies are displayed as cards containing key information such as title, release date, and poster image. Each card provides a visual representation of the movie and includes a link or action to view more details about the movie.

API Integration: The component integrates with The Movie Database (TMDb) API to fetch movie data. It makes HTTP requests to retrieve information about movies, including details like title, release date, and poster image.

Loading Indicator: While movie data is being fetched from the API, a loading indicator is displayed to provide feedback to the user. This ensures a smooth user experience by indicating that data is being loaded.

Technologies Used:
React: The component is built using React, a JavaScript library for building user interfaces. React enables the creation of reusable UI components and facilitates efficient updates to the DOM.

Axios: Axios is used to make HTTP requests from the client-side React application to the TMDb API. It provides a simple and concise API for sending asynchronous HTTP requests.

React Icons: Icons from the React Icons library are utilized to enhance the visual representation of elements such as search icons.

CSS Styling: CSS stylesheets are used to apply custom styles to the component, ensuring a visually appealing layout and design.



# TvSeriesPage :

The TvSeriesPage component represents a page in a React application dedicated to displaying TV series. 
It leverages the TMDB API to fetch data about popular TV series or to perform searches based on user input. 
The component features a sidebar for navigation, a search bar for filtering TV series, and a main content 
area where TV series cards are displayed.

When the page loads, it fetches data about popular TV series from the TMDB API. If the user performs a search, 
the component updates the displayed TV series based on the search query. A loading spinner is shown 
while the data is being fetched to provide feedback to the user.

Each TV series is represented by a card component, which includes details such as 
the title, poster image, release date, and a television icon. 
These cards are dynamically rendered based on the fetched data.


