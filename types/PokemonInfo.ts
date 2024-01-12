export interface Stat {
  name: string;
}

export interface PokemonStats {
  base_stat: number;
  stat: Stat;
}

export interface PokemonSprites {
  front_default: string;
}

export interface Type {
  name: string;
}

export interface PokemonType {
  type: Type;
}

export interface PokemonInfo {
  stats: PokemonStats[];
  sprites: PokemonSprites;
  types: PokemonType[];
}
