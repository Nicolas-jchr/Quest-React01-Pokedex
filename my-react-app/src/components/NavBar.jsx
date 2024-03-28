import PropTypes from "prop-types";

function NavBar ({pokemonIndex, pokemonList, handleClickPrevious, handleClickNext}) {


    return (
        <>
           {pokemonIndex > 0 ? 
           <button onClick={handleClickPrevious}>Previous</button> : false}

           {pokemonIndex < pokemonList.length -1 ?
            <button onClick={handleClickNext}>Next</button> : false}    
        </>
    )

}

NavBar.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default NavBar;

