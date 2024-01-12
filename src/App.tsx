import { useState, Suspense, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonGrid } from "./components/PokemonGrid";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(false);

  return (
    <ErrorBoundary fallback={<div>Error . . .</div>}>
      <Suspense fallback={<div>Loading . . .</div>}>
        <div className="App">
          {selectedPokemon ? <PokemonCard /> : <PokemonGrid />}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
