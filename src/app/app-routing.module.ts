import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Page/main-page/main-page.component';
import { GamesPageComponent } from './Page/games-page/games-page.component';

const routes: Routes = [
  {path: 'accueil', component: MainPageComponent},
  {path:'games', component: GamesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
