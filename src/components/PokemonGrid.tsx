// @ts-ignore
import { use, useState } from "react";

import { PokemonData } from "../../types/Pokemon";

import { fetchData } from "../../lib/api";

import { URL } from "../../lib/constant";

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
    <div>
      <h1 className="underline">Pokemon</h1>
      <div>
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
              >
                {pokemon.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};
