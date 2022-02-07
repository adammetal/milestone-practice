import { useState } from "react";
import PokemonList from "./components/PokemonList";
import SearchForm from "./components/SearchForm";
import pokemons from "./pokedex.json";

function App() {
  const [list, setList] =
    useState(pokemons.pokemon.slice(0, 50));

  const handleSearch = (search) => {
    let all = pokemons.pokemon;

    if (search.name) {
      all = all.filter((p) => {
        return p.name.includes(search.name);
      });
    }

    if (search.type) {
      all = all.filter((p) => {
        return p.type.includes(search.type);
      });
    }

    setList(all.slice(0, 50));
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default App;
