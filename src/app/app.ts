import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TyraDexApiService } from '../services/tyradex-api/tyradex-api.service';
import { Pokemon } from '../services/tyradex-api/pokemon';
import { PokemonView } from '../component/pokemon-view/pokemon-view';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    PokemonView,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tyradex-angular20';
  private pokemonService = inject(TyraDexApiService);
  pokemonData: Pokemon | undefined;
  pokemonNotExist = false;
  pokemonNotFoundName: string | undefined | null;

  pokemonForm = new FormGroup({
    pokemonName: new FormControl('')
  });

  onSubmit() {
  const pokemonName = this.pokemonForm.value.pokemonName;

  if (!pokemonName) return;

  this.pokemonService.getPokemonByName(pokemonName)
    .subscribe({
      next: (response) => {
        this.pokemonData = response;
        this.pokemonNotExist = false;
      },
      error: () => {
        this.pokemonData = undefined;
        this.pokemonNotExist = true;
        this.pokemonNotFoundName = pokemonName;
      }
    });
}

}