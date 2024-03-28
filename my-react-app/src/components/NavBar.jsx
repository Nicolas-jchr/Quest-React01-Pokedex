import {PropTypes} from "prop-types";

function NavBar ({pokemonIndex, pokemonList,setPokemonIndex}) {

    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1);
      };
    
    const handleClickNext = () => {
      setPokemonIndex(pokemonIndex + 1);
      };   


    return (
        <>
           {pokemonIndex > 0 ? 
           ( <button onClick={handleClickPrevious}>Previous</button> ) : false}

           {pokemonIndex < pokemonList ?
           ( <button onClick={handleClickNext}>Next</button> ) : false}    
        </>
    )

}

NavBar.propTypes = {
    setPokemonIndex: PropTypes.number.isRequired,
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.array.isRequired,
    
};

export default NavBar;

