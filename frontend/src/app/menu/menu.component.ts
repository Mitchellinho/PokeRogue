import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @HostListener('document: keydown', ['$event'])
  handleKeyEvent(event: KeyboardEvent) {
    if(event.key == 'ArrowDown') {
      const activeMenuItem = document.getElementsByClassName('menuActive')[0];
      (activeMenuItem.nextSibling as HTMLLIElement).classList.add('menuActive');
      activeMenuItem.classList.remove('menuActive');
    } else if(event.key == 'ArrowUp'){
      const activeMenuItem = document.getElementsByClassName('menuActive')[0];
      (activeMenuItem.previousSibling as HTMLLIElement).classList.add('menuActive');
      activeMenuItem.classList.remove('menuActive');
    }
  }
}
