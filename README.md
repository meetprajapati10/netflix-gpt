# Netflix-GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login/Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup `Authentication`
- Deploying Our App to Production
- Create SignUp user account in Firebase
- Implement SignIn API
- Created `REDUX Store` with userSlice
- Implemented Update User Profile API from Firebase (with Name & Photo)
- Implemented SignOut API
- Add hardcoded values to the constants file
- BugFix: SignUp user displayName & Profile picture Update in Redux Store
- BugFix: `Protecting Routing` - if the user is not Logged in Redirect to /browse to Login Page & vice-versa
- Unsubscribed to the onAuthStateChanged Callback
- Registered in `TMDB API` & Create an app to get API Read Access Token
- Get Data to TMDB Now Playing Movies list API
- Add Custom Hook for NowPlaying movies
- Create movieSlice & Update store with all list of movie data
- Planning for MainContainer & SecondaryContainer
- Fetch data for Trailer video `(use of TMDB Movies Videos API)`
- Embedded the YouTube video and make it AutoPlay & Mute
- Build Secondary Component
- Build Movie List
- Build Movie Card
- Use `IMDB CDN` image URL
- Made the BROWSE page amazing with Tailwind CSS
- Get `Popular`, `Upcoming`, `Top Rated` Movies Data
- Inside Custom Hooks - `MODULAR fashion of writing code`
- Build `GPT Search Fetaure` into our App
- GPT Search Page
- GPT Search Bar
- (EXTRA) `Multi Language Support` Feature into our App
- Get `Gemini AI` Key
- Gemini Search API call
- Fetch the search movies data from TMDB Search API
- Reusable MovieList Component to make movie suggestion container
- All secret or sensitive Key in `.env` file
- Use the Concept of `Memoization`.
- Make our site `Responsive`.

## Features

### Login/SignUp Page

- Sign In / Sign Up Form
- redirect to `Browse` Page

### Browse (after authentication)

- Header
- Main Movie

  - Trailer Running in background
  - Title & Description
  - MovieSuggestions
    - MovieLists \* N

### Netflix + `GPT`

- Search Bar
- Movie Suggestion
