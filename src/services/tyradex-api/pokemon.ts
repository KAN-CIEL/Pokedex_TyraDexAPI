import { ErrorPokemonNotFound } from "./error-pokemon-not-found";
import { PokemonEvolution } from "./pokemon-evolution";
import { PokemonEvolutionWrapper } from "./pokemon-evolution-wrapper";
import { Pokemonformes } from "./pokemon-forme";
import { PokemonName } from "./pokemon-name";
import { PokemonRes } from "./pokemon-res";
import { PokemonSexe } from "./pokemon-sexe";
import { PokemonSprite } from "./pokemon-sprite";
import { PokemonStat } from "./pokemon-stat";
import { PokemonTalent } from "./pokemon-talent";
import { PokemonType } from "./pokemon-type";

export interface Pokemon extends ErrorPokemonNotFound {
    pokedex_id: number;
    generation: number;
    category: string;
    name:PokemonName;
    sprites: PokemonSprite;
    types: PokemonType[];
    talents: PokemonTalent[];
    stats: PokemonStat;
    resistances: PokemonRes[];
    evolution: PokemonEvolutionWrapper;
    height: string;
    weight: string;
    egg_groups: string[];
    sexe: PokemonSexe;
    catch_rate: number;
    level_100: number;
    fromes: Pokemonformes;
}