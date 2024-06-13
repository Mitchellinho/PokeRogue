import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ActiveComponentService{

    isMainMenuActive: Subject<Boolean> =  new Subject<Boolean>;
    isSettingsActive: Subject<Boolean> = new Subject<Boolean>;
    isGameActive: Subject<Boolean> = new Subject<Boolean>;

  constructor() {
  }

updateIsMainMenuActive(active: Boolean){
    this.isMainMenuActive.next(active);
}

updateIsSettingsActive(active: Boolean){
    this.isSettingsActive.next(active);
}

updateIsGameActive(active: Boolean){
    this.isGameActive.next(active);
}

}