import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";

@Injectable({
    providedIn: 'root'
})

export class TyraDexApiService{

    private http = inject(HttpClient);

    private BASE_URL = 'https://tyradex.vercel.app/api/v1'

    getPokemonByName(name: string) {
    return this.http.get<Pokemon>(`${this.BASE_URL}/pokemon/${name}`)
  }

  getPokemonRegion(name: string, region: string) {
    return this.http.get<Pokemon>(`${this.BASE_URL}/pokemon/${name}/${region}`)
  }
}