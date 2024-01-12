// @ts-ignore
import { use } from "react";

import styles from "./PokemonCard.module.css";

import { fetchData } from "../../lib/api";

import { URL } from "../../lib/constant";

import { PokemonInfo } from "../../types/PokemonInfo";

export const PokemonCard = ({
  selectedPokemon,
  clearHandler,
}: {
  selectedPokemon: string;
  clearHandler: () => void;
}) => {
  const pokemonURL = URL + selectedPokemon;

  const data: PokemonInfo = use(fetchData(pokemonURL));

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4>{selectedPokemon}</h4>
        <div onClick={() => clearHandler()}>X</div>
      </div>
      <img src={data.sprites.front_default} alt={selectedPokemon} />
      <h5>Stats</h5>
      {data.stats.map((stat, index) => {
        return (
          <div key={index}>
            <p>
              <b>{stat.stat.name}:</b> {stat.base_stat}
            </p>
          </div>
        );
      })}
      <h3>Types</h3>
      {data.types.map((type, index) => {
        return (
          <div key={index}>
            <p>
              <b>{type.type.name}</b>
            </p>
          </div>
        );
      })}
    </div>
  );
};
