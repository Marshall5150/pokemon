import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { PokemonItemsComponent } from './containers/pokemon-items/pokemon-items.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonFilterComponent } from './components/pokemon-filter/pokemon-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemsComponent,
    PokemonItemComponent,
    PokemonFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
