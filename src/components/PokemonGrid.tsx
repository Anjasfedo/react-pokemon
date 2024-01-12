// @ts-ignore
import { use, useState } from "react";

import { PokemonData } from "../../types/Pokemon";

import { fetchData } from "../../lib/api";

import { URL } from "../../lib/constant";

import styles from "./PokemonGrid.module.css";

export const PokemonGrid = ({
  handleSelectPokemon,
}: {
  handleSelectPokemon: (pokemon: string) => void;
}) => {
  const [search, setSearch] = useState("");

  let data: PokemonData;

  const storedData = localStorage.getItem("pokemon-cards");
  if (storedData !== null) {
    data = JSON.parse(storedData);
    console.log("Fetch From localStorage");
  } else {
    data = use(fetchData(URL));
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
              <button
                onClick={() => handleSelectPokemon(pokemon.name)}
                key={index}
                className={styles.pokemon}
              >
                {pokemon.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};
