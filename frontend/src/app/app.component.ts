import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { ActiveComponentService } from './service/active-component.service';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { LoadGameComponent } from './load-game/load-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainMenuComponent,
    MenuComponent,
    GameComponent,
    SettingsComponent,
    LoadGameComponent,
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
  attackChoice: Boolean = false;
  decision: Boolean = false;
  gameMode: Boolean = false;
  healthbar: Boolean = false;
  pokemonSelection: Boolean = false;
  text: Boolean = false;
  loadGame: Boolean = false;

  constructor(private readonly activeComponentService: ActiveComponentService){

  }

  ngOnInit(): void{
    this.activeComponentService.getIsSettingsActive().subscribe((value: Boolean) => this.settings = value);
    this.activeComponentService.getIsMainMenuActive().subscribe((value: Boolean) => this.mainMenu = value);
    this.activeComponentService.getIsGameActive().subscribe((value: Boolean) => this.game = value);
    this.activeComponentService.getIsAttackChoiceActive().subscribe((value: Boolean) => this.attackChoice = value);
    this.activeComponentService.getIsDecisionActive().subscribe((value: Boolean) => this.decision = value);
    this.activeComponentService.getIsGameModeActive().subscribe((value: Boolean) => this.gameMode = value);
    this.activeComponentService.getIsHealthbarActive().subscribe((value: Boolean) => this.healthbar = value);
    this.activeComponentService.getIsPokemonSelectionActive().subscribe((value: Boolean) => this.pokemonSelection = value);
    this.activeComponentService.getIsTextActive().subscribe((value: Boolean) => this.text = value);
    this.activeComponentService.getIsLoadGameActive().subscribe((value: Boolean) => this.loadGame = value);


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
