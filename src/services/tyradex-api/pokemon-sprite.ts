import { PokemonGmax } from "./pokemon-gmax";

export interface PokemonSprite {
    regular: string;
    shiny: string;
    gmax: PokemonGmax;
}