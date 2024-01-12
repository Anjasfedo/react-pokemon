// @ts-ignore
import { use } from "react";

import { fetchData } from "../../lib/api";

import { URL } from "../../lib/constant";

import { PokemonInfo } from "../../types/PokemonInfo";

import { RiCloseCircleLine } from "react-icons/ri";

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
    <div className="min-h-screen flex flex-col items-center relative px-24 lg:px-[30rem] font-semibold pt-3 lg:pt-6">
      <div className="flex justify-between p-4 text-3xl items-center">
        <h4 className="uppercase font-bold text-violet-400">{selectedPokemon}</h4>
        <button
          onClick={() => clearHandler()}
          className="absolute right-0 pr-4 lg:pr-12"
        >
          <RiCloseCircleLine />
        </button>
      </div>
      <img
        src={data.sprites.front_default}
        alt={selectedPokemon}
        className="w-32 h-32 border-2 border-violet-400 rounded-full"
      />
      <div className="py-4 w-full">
        <h1 className="font-bold text-xl text-violet-400">Stats:</h1>
        {data.stats.map((stat, index) => {
          return (
            <div key={index}>
              <p>
                <b>{stat.stat.name}:</b> {stat.base_stat}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <h1 className="font-bold text-xl text-violet-400">Types:</h1>
        <div className="flex space-x-4 flex-wrap">
          {data.types.map((type, index) => {
            return (
              <div key={index} className="grow">
                <p>
                  {type.type.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
