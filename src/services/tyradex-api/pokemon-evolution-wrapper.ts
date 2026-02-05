import { PokemonEvolution } from "./pokemon-evolution";
import { PokemonMega } from "./pokemon-mega";

export interface PokemonEvolutionWrapper {
    pre: PokemonEvolution[];
    next: PokemonEvolution[];
    mega: PokemonMega;
}