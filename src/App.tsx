import { useState, Suspense } from "react";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonGrid } from "./components/PokemonGrid";
import { Loading } from "./components/Loading";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const handleSelectPokemon = (pokemon: string) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-slate-900 text-white min-w-screen min-h-screen">
        {selectedPokemon ? (
          <PokemonCard
            selectedPokemon={selectedPokemon}
            clearHandler={() => setSelectedPokemon(null)}
          />
        ) : (
          <PokemonGrid handleSelectPokemon={handleSelectPokemon} />
        )}
      </div>
    </Suspense>
  );
}

export default App;
