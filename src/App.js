import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ButtonBackground, StyledButton } from './App.styles';
import Router from './app/Router';

function App() {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loadStarships = () => {
    if (page === 1) {
      axios.get(`https://swapi.dev/api/starships/?page=${page}`)
        .then(response => {
          setStarships(response.data.results);
          setHasMore(response.data.next !== null);
        });
    } else {
      axios.get(`https://swapi.dev/api/starships/?page=${page}`)
        .then(response => {
          setStarships(prevStarships => [...prevStarships, ...response.data.results]);
          setHasMore(response.data.next !== null);
        });
    }
  };

  useEffect(() => {
    loadStarships();
  }, [page]);

  const handleLoadMore = () => {
    if (!hasMore) return;
    setPage(prevPage => prevPage + 1);
  };



  const handleStarshipClick = starship => { setSelectedStarship(starship); };
  const handleDetailsClick = () => { setSelectedStarship(null); };

  return (
    <div>
      <Router
        isAuthenticated={isAuthenticated}
        starships={starships}
        selectedStarship={selectedStarship}
        hasMore={hasMore}
        handleLoadMore={handleLoadMore}
        handleStarshipClick={handleStarshipClick}
        handleDetailsClick={handleDetailsClick}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  );
}


export default App;
