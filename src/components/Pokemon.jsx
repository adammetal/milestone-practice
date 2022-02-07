import Type from "./Type";
import style from "./Pokemons.module.css";

const Pokemon = (props) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={props.img} alt="pokemon" />
      <h1 className={style.name}>{props.name}</h1>
      {props.type.map((type) => {
        return <Type key={type} type={type} />;
      })}
    </div>
  );
};

export default Pokemon;
