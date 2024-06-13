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
      const mainMenuList = (document.getElementsByClassName('mainMenuList')[0] as HTMLUListElement);
      if(!this.menu){
        this.menu = true;
        mainMenuList.classList.remove('active');
      } else{
        this.menu = false;
        mainMenuList.classList.add('active');
      }
    }
  }
}
