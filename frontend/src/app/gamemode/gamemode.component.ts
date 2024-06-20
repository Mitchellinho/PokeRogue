import { Component, HostListener } from '@angular/core';
import { ActiveComponentService } from '../service/active-component.service';

@Component({
  selector: 'app-gamemode',
  standalone: true,
  imports: [],
  templateUrl: './gamemode.component.html',
  styleUrl: './gamemode.component.css'
})
export class GamemodeComponent {

  constructor(private readonly activeComponentService: ActiveComponentService){

  }

  @HostListener('document: keydown', ['$event'])
  handleKeyEvent(event: KeyboardEvent) {
    if(document.getElementsByClassName('active')[0].classList.contains('active')){
      const activegameModeItem = document.getElementsByClassName('gameModeActive')[0];
      if(event.key == 'ArrowDown') {
        (activegameModeItem.nextSibling as HTMLLIElement).classList.add('gameModeActive');
        activegameModeItem.classList.remove('gameModeActive');
      } else if(event.key == 'ArrowUp'){
        (activegameModeItem.previousSibling as HTMLLIElement).classList.add('gameModeActive');
        activegameModeItem.classList.remove('gameModeActive');
      } else if(event.key == 'Enter' || event.key == 'z'){
        switch(activegameModeItem.innerHTML){
          case 'Classic':  
            this.activeComponentService.updateIsPokemonSelectionActive(true);
            break; 
            case 'Endless': 
            this.activeComponentService.updateIsPokemonSelectionActive(true);
            break;
          case 'Cancel': 
            this.activeComponentService.updateIsMainMenuActive(true);
            break;
        }
        this.activeComponentService.updateIsTextActive(false);
        this.activeComponentService.updateIsGameModeActive(false);
      } else if(event.key == 'x'){
        this.activeComponentService.updateIsMainMenuActive(true);
        this.activeComponentService.updateIsTextActive(false);
        this.activeComponentService.updateIsGameModeActive(false);
      }
    }
  }

}
