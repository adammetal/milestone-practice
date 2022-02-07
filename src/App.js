import pokemons from "./pokedex.json";

function App() {
  return <div className="App">{JSON.stringify(pokemons)}</div>;
}

export default App;
