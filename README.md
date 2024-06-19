# Running the Project Locally

## Clone the Repository
### git clone <repository-url>
### cd movie-search-app

## Install Dependencies
### npm install  or yarn install

## Set Up Environment Variables
### Obtain a TMDB API key from TMDB Developer.
### Replace API_KEY in src/App.js with your TMDB API key.
### For this assignment I have given my API Key in project.

## Run the Application
### npm start  or yarn start



# Manual Testing: Test the following scenarios manually:

## Ensure movies are displayed correctly on load.
## Verify the search functionality by typing and submitting queries.
## Check responsiveness across different devices and screen sizes.


# Functionalities and Improvements

## Movie Search App
1) Implemented a movie search app using React.
2) Fetches popular movies from the TMDB API on initial load.
3) Users can search for movies by title using a search bar.
4) Results are displayed in a responsive grid layout using MovieBox and MovieList components.

## Loading Spinner
1) Added a loading spinner component (LoadingSpinner) to indicate when movies are being fetched.
1) Spinner is displayed in the center of the page during loading periods.

## Responsive Design
1) Ensured the application is responsive using Bootstrap grid classes.
1) Movies are displayed in a grid layout that adjusts based on screen size (col-lg-3, col-md-4, col-sm-6).

## Error Handling
1) Implemented basic error handling to log errors to the console in case of API request failures.

## Debounced Search
1) Implemented debouncing for the movie search input to reduce the number of API requests made during user input.

## Modal for Movie Details
1) Added a modal component (Modal) to display additional details when a user clicks "View more" on a movie card.
2) Details include movie poster, ratings, release date, and overview.

## Navbar
1) Created a Navbar component (NavbarComponent) for navigation and movie search functionality.
2) Includes a search bar (FormControl) and a search button (Button).

## Styling
1) Used custom CSS styles to improve readability and layout (App.css).
2) Included Google Fonts (Open Sans) for improved typography.

## Project Structure
1) Organized the project into components for better maintainability and readability.
2) Divided components such as MovieBox, MovieList, LoadingSpinner, and NavbarComponent for clear separation of concerns.
