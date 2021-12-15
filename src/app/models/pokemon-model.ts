export interface PokemonModel {
  count: number;
  next: string;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
  id: string;
  details: PokemonDetails;
}

export interface PokemonDetails {
  name: string;
  id: number;
  sprites: any;
  abilities?: Array<any>;
  types?: Array<any>;
}
