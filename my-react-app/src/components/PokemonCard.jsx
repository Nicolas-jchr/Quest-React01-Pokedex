const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0];
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