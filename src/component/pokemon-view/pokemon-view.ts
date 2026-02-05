import { Component, effect, input } from '@angular/core';
import { Pokemon } from '../../services/tyradex-api/pokemon';
import { PokemonStatistiques } from '../pokemon-statistiques/pokemon-statistiques';
import { PokemonTypeInformation } from '../pokemon-type-information/pokemon-type-information';
import { PokemonResistancesComp } from '../pokemon-resistances/pokemon-resistances';
import { CommonModule } from '@angular/common';
import { TyraDexApiService } from '../../services/tyradex-api/tyradex-api.service';

@Component({
  selector: 'app-pokemon-view',
  imports: [
    PokemonStatistiques,
    PokemonResistancesComp,
    PokemonTypeInformation,
    CommonModule
  ],
  templateUrl: './pokemon-view.html',
  styleUrl: './pokemon-view.css'
})
export class PokemonView {
  pokemon = input<Pokemon>();

  previousPokemon: Pokemon[] = [];
  nextPokemon: Pokemon[] = [];

  constructor(private api: TyraDexApiService) {

    effect(() => {
      const p = this.pokemon();
      if (!p) return;

      this.previousPokemon = [];
      this.nextPokemon = [];

      // -----------------------------
      // 🔥 PRÉ‑ÉVOLUTION (1 seule)
      // -----------------------------
      if (p.evolution?.pre?.length) {
        const firstPre = p.evolution.pre[p.evolution.pre.length - 1];
        if (firstPre?.name?.trim()) {
          const apiName = this.normalizeName(firstPre.name);
          this.api.getPokemonByName(apiName)
            .subscribe(data => {
              this.previousPokemon = [data];
            });
        }
      }

      // -----------------------------
      // 🔥 ÉVOLUTION SUIVANTE (1 seule)
      // -----------------------------
      if (p.evolution?.next?.length) {
        const firstNext = p.evolution.next[0];
        if (firstNext?.name?.trim()) {
          const apiName = this.normalizeName(firstNext.name);
          this.api.getPokemonByName(apiName)
            .subscribe(data => {
              this.nextPokemon = [data];
            });
        }
      }
    });
  }

  // -----------------------------------------
  // 🔧 Fonction de normalisation (accents)
  // -----------------------------------------
  private normalizeName(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
