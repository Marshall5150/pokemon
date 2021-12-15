import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.scss'],
})
export class PokemonFilterComponent {
  public searchTerm: string = '';

  @Output() searchChange = new EventEmitter();

  constructor() {}

  /**
   * Retrieves user input and emits it up to pokemon-items container.
   * @param {string} search - The user input.
   */
  handleSearch(search: string) {
    if (search === '') {
      this.searchTerm = search;
    }
    this.searchChange.emit(this.searchTerm);
  }
}
