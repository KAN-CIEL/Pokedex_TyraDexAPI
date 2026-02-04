import { Component, input } from '@angular/core';
import { PokemonStat } from '../../services/tyradex-api/pokemon-stat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-statistiques',
  imports: [CommonModule],
  templateUrl: './pokemon-statistiques.html',
  styleUrl: './pokemon-statistiques.css',
})
export class PokemonStatistiques {
  statistics = input<PokemonStat>();

  getColor(value: number): string {
    if (value < 30) return '#ff4d4d';        // rouge
    if (value < 50) return '#ff944d';        // orange
    if (value < 100) return '#ffe44d';       // jaune
    if (value < 120) return '#6aff6a';       // vert
    return '#009900';                        // vert foncé
  }

  getWidth(value: number): number {
  return Math.min(value, 100);
}



}
