import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  @HostListener('document: keydown', ['$event'])
  handleEnterEvent(event: KeyboardEvent) { 
    if(event.key == 'ArrowRight'){
      alert();
    }
  }
}
