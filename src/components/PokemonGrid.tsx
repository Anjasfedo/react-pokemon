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
    <div className="px-20 text-center pt-3 lg:px-96">
      <h1 className="font-bold text-5xl text-violet-400 py-3">Pokemon</h1>
      <div className="py-1 lg:py-8">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="transition-all duration-500 border-2 rounded-md p-1 text-slate-950 font-semibold border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-wrap gap-3 py-5 lg:py-8">
        {data.results
          .filter((val) => {
            return val.name.includes(search);
          })
          .map((pokemon, index: number) => {
            return (
              <button
                onClick={() => handleSelectPokemon(pokemon.name)}
                key={index}
                className="bg-violet-400 grow rounded-md p-1 hover:bg-violet-600 transition-all duration-500"
              >
                {pokemon.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};
