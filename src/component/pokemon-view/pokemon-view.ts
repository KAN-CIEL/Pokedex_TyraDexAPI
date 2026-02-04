import { Component, input } from '@angular/core';
import { Pokemon } from '../../services/tyradex-api/pokemon';
import { PokemonStatistiques } from '../pokemon-statistiques/pokemon-statistiques';
import { PokemonTypeInformation } from '../pokemon-type-information/pokemon-type-information';
import { PokemonRes } from '../../services/tyradex-api/pokemon-res';
import { PokemonResistancesComp } from '../pokemon-resistances/pokemon-resistances';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-view',
  imports: [PokemonStatistiques, PokemonResistancesComp, PokemonTypeInformation, CommonModule],
  templateUrl: './pokemon-view.html',
  styleUrl: './pokemon-view.css'
})
export class PokemonView {
  pokemon = input<Pokemon>();
}