import { Component, input } from '@angular/core';
import { PokemonTalent } from '../../services/tyradex-api/pokemon-talent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-talent-information',
  imports: [CommonModule],
  templateUrl: './pokemon-talent-information.html',
  styleUrl: './pokemon-talent-information.css',
})
export class PokemonTalentInformation {
talents = input<PokemonTalent[]>();
}
