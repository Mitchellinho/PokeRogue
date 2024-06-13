import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainMenuComponent,
    MenuComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menu: Boolean = false;
  mainMenu: Boolean = true;
   
  @HostListener('document: keydown', ['$event'])
  handleEnterEvent(event: KeyboardEvent) {
    if(event.key == 'Escape' || event.key == 'm'){
      this.menu = !this.menu;
    }
  }
}
