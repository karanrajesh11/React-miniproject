import React, { useState, useRef } from "react";
import "./styles.css";
import MovieCard from "./components/MovieCard.jsx";
import NavBar from "./components/NavBar.jsx";

const movies = [ { title: "Gomez and the Chocolate Bag", description: "A Malayalam short film about a young man who accidentally finds himself in trouble due to his social anxiety.", image: "https://img.youtube.com/vi/8K1dSp6rL34/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/8K1dSp6rL34", releaseDate: "March 10, 2023" }, { title: "J A V I T H", description: "A short film based on parallel universes, where the lead character is given a chance to change a past mistake.", image: "https://img.youtube.com/vi/PvmG6X6Fqi4/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/PvmG6X6Fqi4", releaseDate: "July 21, 2022" }, { title: "Friendship", description: "A story of two close friends whose bond is tested when fate takes an unexpected turn.", image: "https://img.youtube.com/vi/0f8OIsA23yc/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/0f8OIsA23yc", releaseDate: "January 5, 2023" }, { title: "Anatomy of a Confession", description: "An exploration of the complexities of human emotions and the consequences of our actions.", image: "https://img.youtube.com/vi/kKvmsDZIAug/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/kKvmsDZIAug", releaseDate: "February 15, 2023" }, { title: "The First Puff", description: "A philosophical drama rooted in existentialism, exploring self-discovery and the pursuit of meaning through late-night conversations.", image: "https://img.youtube.com/vi/0pwtoedNSTU/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/0pwtoedNSTU", releaseDate: "April 20, 2023" }, { title: "Unplugged", description: "The story of a young girl torn between following her own ambitions and obeying the wishes of her parents.", image: "https://img.youtube.com/vi/O4AS5Wyqtus/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/O4AS5Wyqtus", releaseDate: "June 10, 2023" }, { title: "Too Late", description: "Time can be unkind to those who treat it lightly. Lost on those who seek retribution. But what if time changes?", image: "https://img.youtube.com/vi/tRRLBE8egMc/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/tRRLBE8egMc", releaseDate: "August 5, 2023" }, { title: "HimForHer", description: "Dedicated to all the wonderful women in various parts of a man's life.", image: "https://img.youtube.com/vi/NKhzMUcMxXw/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/NKhzMUcMxXw", releaseDate: "October 12, 2023" }, { title: "Ehsaas", description: "A reflection on hostel life and the importance of staying connected with our loved ones.", image: "https://img.youtube.com/vi/FrYep65o-5s/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/FrYep65o-5s", releaseDate: "December 1, 2023" }, { title: "#REV", description: "A film revolving around people's idea of change and the impact of their choices.", image: "https://img.youtube.com/vi/TKpZXojTw5c/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/TKpZXojTw5c", releaseDate: "January 20, 2024" }, { title: "SAALA", description: "Vishal discovers his bicycle locked with a different lock, leading to a heated confrontation with Amrit, escalating into a chaotic showdown.", image: "https://img.youtube.com/vi/INVXybIiPWg/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/INVXybIiPWg", releaseDate: "February 15, 2025" }, { title: "Scaredinger's Cat", description: "Exploring the paradoxes of life through the lens of a cat's tale, inspired by Schrödinger's thought experiment.", image: "https://img.youtube.com/vi/ZeJ8LvDELps/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/ZeJ8LvDELps", releaseDate: "March 5, 2025" }, { title: "FAN: Main Bhi", description: "A short film delving into the psyche of an obsessive fan and the blurred lines between admiration and fixation.", image: "https://img.youtube.com/vi/V3jlwGWdEDw/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/V3jlwGWdEDw", releaseDate: "March 20, 2025" }, { title: "Matte", description: "Love drives people crazy. It also makes them stare longingly at cosmetic products.", image: "https://img.youtube.com/vi/MyA2mEZzwRY/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/MyA2mEZzwRY", releaseDate: "April 1, 2025" }, { title: "the end.", description: "An introspective look into the final moments of a journey, contemplating the essence of closure and new beginnings.", image: "https://img.youtube.com/vi/yLo6tLTnh7Y/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/yLo6tLTnh7Y", releaseDate: "April 10, 2025" }, { title: "Happy Birthday", description: "A story of love and gratitude, as a girl wishes her best friend a happy birthday, unraveling the relationship between the two.", image: "https://img.youtube.com/vi/sjp5gVd8sEI/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/sjp5gVd8sEI", releaseDate: "April 15, 2025" }, { title: "WAKE UP", description: "A social commentary on environmental awareness and the urgent need for action.", image: "https://img.youtube.com/vi/cZXtkwLYR80/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/cZXtkwLYR80", releaseDate: "April 20, 2025" }, {title: "Life Through A Lens", description: "A photographer walks the streets of his city, documenting routine life and discovering beauty in the mundane.", image: "https://img.youtube.com/vi/your_video_id/maxresdefault.jpg", videoUrl: "https://www.youtube.com/embed/your_video_id", releaseDate: "May 5, 2024"} ];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const videoRef = useRef(null);

  const openFullscreen = (movie) => {
    setSelectedMovie(movie);

    setTimeout(() => {
      if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) { 
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { 
          videoRef.current.msRequestFullscreen();
        }
      }
    }, 200);
  };

    
  const closeFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setSelectedMovie(null);
  };
  return (
   

    <div className="app-container">
       <div className="blob"></div>
      <NavBar />
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onClick={() => openFullscreen(movie)} />
        ))}
        <footer className="footer">
        © Karan Rajesh. 23BDS0277 @ 2025 VIT Film Society. All rights reserved.
      </footer>
      </div>

      {selectedMovie && (
        <div className="modal" ref={videoRef} onClick={closeFullscreen}>
          <iframe
            className="fullscreen-video"
            src={`${selectedMovie.videoUrl}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>

   );
 }
 
 export default App;
