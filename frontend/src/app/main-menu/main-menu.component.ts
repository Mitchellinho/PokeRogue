import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbilityService } from '../../api/ability/abilities.service';
import { Ability } from '../../api/ability/ability.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit {
  title = 'PokeRogue';
  abilitiesList: Ability[] = [];

constructor(private readonly abilityService: AbilityService){
  
}

ngOnInit(): void{
  this.abilityService.getAbilities().subscribe(
    (abilities: Ability[]) => {
    this.abilitiesList = abilities;
  });
}

}
