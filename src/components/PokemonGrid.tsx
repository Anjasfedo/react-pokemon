import { use, useState } from "react";

import { PokemonData } from "../../types/Pokemon";

import styles from "./PokemonGrid.module.css";

const fetchData = async (url) => {
  const res = await fetch(url);

  return res.json();
};

export const PokemonGrid = ({ handleSelectPokemon }) => {
  const [search, setSearch] = useState("");

  const url = "https://pokeapi.co/api/v2/pokemon/";

  let data: PokemonData;

  if (localStorage.getItem("pokemon-cards")) {
    data = JSON.parse(localStorage.getItem("pokemon-cards"));
    console.log("Fetch From localStorage");
  } else {
    data = use(fetchData(url));
    localStorage.setItem("pokemon-cards", JSON.stringify(data));
    console.log("Fetch From API");
  }

  return (
    <div className={styles.pokemonGrid}>
      <h1 className={styles.header}>Pokemon</h1>
      <div className={styles.listContainer}>
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {data.results
          .filter((val) => {
            return val.name.includes(search);
          })
          .map((pokemon, index: number) => {
            return (
              <div
                onClick={handleSelectPokemon(pokemon)}
                key={index}
                className={styles.pokemon}
              >
                {pokemon.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};
