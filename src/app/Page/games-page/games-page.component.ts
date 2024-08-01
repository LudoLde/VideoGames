import { Component } from '@angular/core';

@Component({
  selector: 'app-games-page',
  template: `
  <div>
      <app-header></app-header>
      <app-article-gamespot></app-article-gamespot>
  </div>`,
  styleUrl: './games-page.component.css'
})
export class GamesPageComponent {

}
