import {PropTypes} from "prop-types";

function NavBar ({pokemonList,setPokemonIndex}) {

    const pokemonSelect = (i) => {
        setPokemonIndex(i);
      };
    

    return (
        <>
        {pokemonList.map((pokemon, i) => (
            <button key={i} onClick={() => pokemonSelect(i)}>
                {pokemon.name}
            </button>
        ))}
  
        </>
    );

}

NavBar.propTypes = {
    setPokemonIndex: PropTypes.number.isRequired,
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.array.isRequired,
    
};

export default NavBar;