import Pokemon from "./Pokemon";
import style from "./Pokemons.module.css";

const PokemonList = (props) => {
  const pokemonsDisplay = [];

  for (const pokemon of props.pokemons) {
    pokemonsDisplay.push(
      <Pokemon
        key={pokemon.id}
        name={pokemon.name}
        img={pokemon.img}
        type={pokemon.type}
      />
    );
  }

  return <div className={style.container}>{pokemonsDisplay}</div>;
};

export default PokemonList;
