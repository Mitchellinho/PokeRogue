import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { ActiveComponentService } from './service/active-component.service';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainMenuComponent,
    MenuComponent,
    GameComponent,
    SettingsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  menu: Boolean = false;
  mainMenu: Boolean = true;
  settings: Boolean = false;
  game: Boolean = false;

  constructor(private readonly activeComponentService: ActiveComponentService){

  }

  ngOnInit(): void{
    this.activeComponentService.isSettingsActive.subscribe((value: Boolean) => this.settings = value);
    this.activeComponentService.isMainMenuActive.subscribe((value: Boolean) => this.mainMenu = value);
    this.activeComponentService.isGameActive.subscribe((value: Boolean) => this.game = value);
  }
   
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
