
import { Component } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faGamepad = faGamepad;
  faXmark = faXmark;
  isClicked: boolean = false;

  openMenu(): void{
    this.isClicked = !this.isClicked
  }
}
