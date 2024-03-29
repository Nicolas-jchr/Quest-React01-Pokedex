import PropTypes from "prop-types";

function PokemonCard ({ pokemon }) {
  return (
    <>
      {pokemon.imgSrc === undefined ? (
        <div>
          {" "}
          <p>?</p>
          <figcaption>{pokemon.name} </figcaption>
        </div>
      ) : (
        <div>
          <img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption>
        </div>
      )}
    </>
  );
}

PokemonCard.propTypes = {
  
  pokemon: PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,

  }) .isRequired,
}
export default PokemonCard;