
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
export default PokemonCard;