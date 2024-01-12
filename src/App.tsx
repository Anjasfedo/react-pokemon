import { useState, Suspense } from "react";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonGrid } from "./components/PokemonGrid";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const handleSelectPokemon = (pokemon: string) => {
      setSelectedPokemon(pokemon);
  };

  return (
      <Suspense fallback={<div>Loading . . .</div>}>
        <div className="App">
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
