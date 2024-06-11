import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbilityService } from '../../api/ability/ability.service';
import { UserService } from '../../api/user/user.service';
import { Ability } from '../../api/ability/ability.model';
import { User } from '../../api/user/user.model';
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
  usersList: User[] = [];

  constructor(private readonly abilityService: AbilityService, private readonly userService: UserService){
  
  }   

  ngOnInit(): void {
    // Create audio element and play music
    /* var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../../assets/music/Opening.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.loop=true;
    audioElement.play();  
 */
    //get all Abilities
    this.abilityService.getAbilities().subscribe(
      (abilities: Ability[]) => {
      this.abilitiesList = abilities;
    });

    //get all Users
    this.userService.getUsers().subscribe(
      (users: User[]) => {
      this.usersList = users;
      }
    )
  }

  createAccount(): void{

    // Get Input Field values
    const values = document.getElementsByClassName("createUserInput") as HTMLCollectionOf<HTMLInputElement>;

    // Create new User
    const userToCreate: User = {
      username: "",
      password: "",
    }

    // Assign Input Field Values to new User
    userToCreate.username = values[0].value;
    userToCreate.password = values[1].value;

    // Delete input field values
    values[0].value = "";
    values[1].value = "";

    // Apply Changes to Database and reload page if successful
    this.userService.postUser(userToCreate).subscribe( 
    _ => window.location.reload(),
    );
  }

addAbility(): void{

  // Get Input Field values
  const values = document.getElementsByClassName("addAbilityInput") as HTMLCollectionOf<HTMLInputElement>;

  // Create new Ability
  const abilityToCreate: Ability = {
    id: this.abilitiesList[this.abilitiesList.length-1].id + 1,
    name: "",
  }

  // Assign Input Field Values to new Ability
  abilityToCreate.name = values[0].value;


  // Delete input field values
  values[0].value = "";

  // Apply Changes to Database and reload page if successful
this.abilityService.postUser(abilityToCreate).subscribe( 
  _ => window.location.reload(),
);

}
}
