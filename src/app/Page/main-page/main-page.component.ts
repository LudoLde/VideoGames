import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `
  <div>
      <app-header></app-header>
      <app-info-section></app-info-section>
      <app-footer></app-footer>
  </div>`,
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
