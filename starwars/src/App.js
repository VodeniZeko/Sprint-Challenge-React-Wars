import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchedCharacters = async () => {
      return await axios.get("https://swapi.co/api/people/");
    };
    fetchedCharacters()
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(`here is the error I catched: ${err}`);
      });
  }, []);

  return (
    <div className="App">
      {characters ? (
        <CardList characters={characters} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
