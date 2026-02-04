import { Component, input } from '@angular/core';
import { PokemonType } from '../../services/tyradex-api/pokemon-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-type-information',
  imports: [CommonModule],
  templateUrl: './pokemon-type-information.html',
  styleUrl: './pokemon-type-information.css',
})
export class PokemonTypeInformation {
  types = input<PokemonType[]>();
}
