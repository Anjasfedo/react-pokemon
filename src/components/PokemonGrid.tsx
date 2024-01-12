import { use } from "react";

import styles from "./PokemonGrid.module.css"

const fetchData = async (url) => {
  const res = await fetch(url);

  return res.json();
};

export const PokemonGrid = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  let data;

  if (localStorage.getItem("pokemon-cards")) {
    data = JSON.parse(localStorage.getItem("pokemon-cards"));
    console.log("Fetch From localStorage");
  } else {
    data = use(fetchData(url));
    localStorage.setItem("pokemon-cards", JSON.stringify(data));
    console.log("Fetch From API");
  }

  return <div className={styles.pokemonGrid}>Anjas</div>;
};
