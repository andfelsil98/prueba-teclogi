import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { GamesComponent } from './components/games/games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

const routes: Routes = [
  {//para el caso en que quiera que se cargue por defecto el home con la ruta 'home' y no '' hay que crear estas lineas para redirigir el path '' al path 'home'
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
{
  path: 'home',
  component: GamesComponent
},
{
  path: 'details/:id',
  component:GameDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
