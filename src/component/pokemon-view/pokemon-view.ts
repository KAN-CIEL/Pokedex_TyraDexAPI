import { Component, effect, input } from '@angular/core';
import { Pokemon } from '../../services/tyradex-api/pokemon';
import { PokemonStatistiques } from '../pokemon-statistiques/pokemon-statistiques';
import { PokemonTypeInformation } from '../pokemon-type-information/pokemon-type-information';
import { PokemonResistancesComp } from '../pokemon-resistances/pokemon-resistances';
import { CommonModule } from '@angular/common';
import { TyraDexApiService } from '../../services/tyradex-api/tyradex-api.service';
import { PokemonTalentInformation } from '../pokemon-talent-information/pokemon-talent-information';

@Component({
  selector: 'app-pokemon-view',
  imports: [
    PokemonStatistiques,
    PokemonResistancesComp,
    PokemonTypeInformation,
    PokemonTalentInformation,
    CommonModule
  ],
  templateUrl: './pokemon-view.html',
  styleUrl: './pokemon-view.css'
})
export class PokemonView {
  pokemon = input<Pokemon>();

  previousPokemon: Pokemon[] = [];
  nextPokemon: Pokemon[] = [];

  showEvolutions = false;
  showGmax = false;

  constructor(private api: TyraDexApiService) {

    effect(() => {
      const p = this.pokemon();
      if (!p) return;

      this.previousPokemon = [];
      this.nextPokemon = [];

      this.showEvolutions = false;
      this.showGmax = false;

      // -----------------------------
      // 🔥 PRÉ‑ÉVOLUTIONS (TOUTES, DANS LE BON ORDRE)
      // -----------------------------
      if (p.evolution?.pre?.length) {
        this.previousPokemon = new Array(p.evolution.pre.length);

        p.evolution.pre.forEach((pre, index) => {
          const apiName = this.normalizeName(pre.name);

          this.api.getPokemonByName(apiName)
            .subscribe(data => {
              this.previousPokemon[index] = data; // GARDE LE BON ORDRE
            });
        });
      }

      // -----------------------------
      // 🔥 ÉVOLUTIONS SUIVANTES (TOUTES, DANS LE BON ORDRE)
      // -----------------------------
      if (p.evolution?.next?.length) {
        this.nextPokemon = new Array(p.evolution.next.length);

        p.evolution.next.forEach((next, index) => {
          const apiName = this.normalizeName(next.name);

          this.api.getPokemonByName(apiName)
            .subscribe(data => {
              this.nextPokemon[index] = data; // GARDE LE BON ORDRE
            });
        });
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

  // -----------------------------------------
  // 🔘 Boutons
  // -----------------------------------------
  toogleEvolutions() {
    this.showEvolutions = !this.showEvolutions;
  }

  toogleGmax() {
    this.showGmax = !this.showGmax;
  }
}
