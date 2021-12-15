import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonModel, PokemonDetails } from '../models/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = 'http://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  public getPokemon(): Observable<PokemonModel> {
    return this.http
      .get<PokemonModel>(this.url + 'pokemon?limit=151')
      .pipe(catchError((response: any) => throwError(response)));
  }

  public getPokemonDetails(name: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(this.url + `pokemon/${name}`)
      .pipe(catchError((response: any) => throwError(response)));
  }
}
