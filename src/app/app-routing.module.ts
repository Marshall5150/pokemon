import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonItemsComponent } from './containers/pokemon-items/pokemon-items.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonItemsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
