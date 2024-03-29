import { PropTypes } from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {

  return (

    <>
    
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => {
            setPokemonIndex(index);
            if (index === 24) {
              alert("Pika pika CHUUUUUUUUU !");
            }
          }}
        >

          {pokemon.name}

        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;