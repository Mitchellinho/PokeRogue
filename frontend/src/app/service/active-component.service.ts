import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ActiveComponentService{

    private isMainMenuActive: Subject<Boolean> =  new Subject<Boolean>;
    private isSettingsActive: Subject<Boolean> = new Subject<Boolean>;
    private isGameActive: Subject<Boolean> = new Subject<Boolean>;
    private isAttackChoiceActive: Subject<Boolean> = new Subject<Boolean>;
    private isDecisionActive: Subject<Boolean> = new Subject<Boolean>;
    private isGameModeActive: Subject<Boolean> = new Subject<Boolean>;
    private isHealthbarActive: Subject<Boolean> = new Subject<Boolean>;
    private isPokemonSelectionActive: Subject<Boolean> = new Subject<Boolean>;
    private isTextActive: Subject<Boolean> = new Subject<Boolean>;
    private isLoadGameActive: Subject<Boolean> = new Subject<Boolean>;

  constructor() {
  }

updateIsMainMenuActive(active: Boolean){
    this.isMainMenuActive.next(active);
}

getIsMainMenuActive(): Subject<Boolean>{
    return this.isMainMenuActive;
}

updateIsSettingsActive(active: Boolean){
    this.isSettingsActive.next(active);
}

getIsSettingsActive(): Subject<Boolean>{
    return this.isSettingsActive;
}

updateIsGameActive(active: Boolean){
    this.isGameActive.next(active);
}

getIsGameActive(): Subject<Boolean>{
    return this.isGameActive;
}

updateIsAttackChoiceActive(active: Boolean){
    this.isAttackChoiceActive.next(active);
}

getIsAttackChoiceActive(): Subject<Boolean>{
    return this.isAttackChoiceActive;
}

updateIsDecisionActive(active: Boolean){
    this.isDecisionActive.next(active);
}

getIsDecisionActive(): Subject<Boolean>{
    return this.isDecisionActive;
}

updateIsGameModeActive(active: Boolean){
    this.isGameModeActive.next(active);
}

getIsGameModeActive(): Subject<Boolean>{
    return this.isGameModeActive;
}

updateisHealthbarActive(active: Boolean){
    this.isHealthbarActive.next(active);
}

getIsHealthbarActive(): Subject<Boolean>{
    return this.isHealthbarActive;
}

updateIsPokemonSelectionActive(active: Boolean){
    this.isPokemonSelectionActive.next(active);
}

getIsPokemonSelectionActive(): Subject<Boolean>{
    return this.isPokemonSelectionActive;
}

updateIsTextActive(active: Boolean){
    this.isTextActive.next(active);
}

getIsTextActive(): Subject<Boolean>{
    return this.isTextActive;
}

updateIsLoadGameActive(value: Boolean){
    this.isLoadGameActive.next(value);
}

getIsLoadGameActive(): Subject<Boolean>{
    return this.isLoadGameActive;
}

}