import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  PokemonDetails,
  PokemonModel,
  Results,
} from 'src/app/models/pokemon-model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-items',
  templateUrl: './pokemon-items.component.html',
  styleUrls: ['./pokemon-items.component.scss'],
})
export class PokemonItemsComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  public filteredPokemonList: Results[] = [];
  public page: number = 1;
  public isLoaded: boolean = false;
  public searchTerm: string = '';

  public pokemonApi!: PokemonModel;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.isLoaded = false;
    this.loadPokemons();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /**
   * Retreives the pokemon data from the api and subscribes it to the pokemons variable
   */
  public loadPokemons(): void {
    this.subscriptions.push(
      this.service.getPokemon().subscribe((data: any) => {
        this.pokemonApi = data;
        this.filteredPokemonList = [...this.pokemonApi.results];

        if (this.pokemonApi.results && this.pokemonApi.results.length) {
          this.pokemonApi.results.forEach((pokemon) => {
            this.getPokemonDetails(pokemon);
          });
          this.isLoaded = true;
        }
      })
    );
  }

  /**
   * Retrieves the details of the individual pokemon and stops retrieving once it has the original 151 pokemon
   * @param {Results} pokemon - The inividual pokemon getting it's details retrieved
   */
  getPokemonDetails(pokemon: Results): void {
    this.subscriptions.push(
      this.service
        .getPokemonDetails(pokemon.name)
        .subscribe((details: PokemonDetails) => {
          pokemon.details = details;
        })
    );
  }

  /**
   * Handles the ngx-pagination page change
   * @param {number} page - The number of the page selected
   */
  public pageChange(page: number): void {
    this.page = page;
    this.isLoaded = false;

    this.loadPokemons();
  }

  /**
   * Filters the pokemon displayed that matches the search term
   * @param {string} query - The search term emmitted from the filter component
   */
  public handleSearch(query: string): void {
    this.searchTerm = query;
    if (query !== '') {
      this.filteredPokemonList = this.pokemonApi.results.filter((pokemon) =>
        pokemon.name.includes(query.toLowerCase())
      );
    } else {
      this.filteredPokemonList = this.pokemonApi.results;
    }
  }
}
