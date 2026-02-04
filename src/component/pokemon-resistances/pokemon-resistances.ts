import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokemonRes } from '../../services/tyradex-api/pokemon-res';

@Component({
  selector: 'app-pokemon-resistances',
  imports: [CommonModule],
  templateUrl: './pokemon-resistances.html',
  styleUrl: './pokemon-resistances.css',
})
export class PokemonResistancesComp {
  resistances = input<PokemonRes[]>();

  getResistancesImage(resistanceName: string) {
    const resistanceFormated = resistanceName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return `https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/${resistanceFormated}.png`
  }
}
