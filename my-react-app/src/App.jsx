import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";

function App() {
const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];
const [pokemonIndex, setPokemonIndex] = useState(0);


const handleClickPrevious = () => {
  if (pokemonIndex > 0 ) {
    setPokemonIndex(pokemonIndex - 1);
  }
};


const handleClickNext = () => {
  if (pokemonIndex < pokemonList.length - 1) {
  setPokemonIndex(pokemonIndex + 1);
  }   
};


console.log(pokemonIndex);
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handleClickPrevious}>Previous</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default App;
