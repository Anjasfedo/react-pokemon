interface Stat {
  name: string;
}

interface PokemonStats {
  base_stat: number;
  stat: Stat;
}

interface PokemonSprites {
  front_default: string;
}

interface Type {
  name: string;
}

interface PokemonType {
  type: Type;
}

export interface PokemonInfo {
  stats: PokemonStats[];
  sprites: PokemonSprites;
  types: PokemonType[];
}
