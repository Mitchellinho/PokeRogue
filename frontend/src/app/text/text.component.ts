import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() firstLine: String = "";
  secondLine: String = "";

  updateFirstLine(firstLine: String): void{
    this.firstLine = firstLine;
  }

  updateSecondLine(secondLine: String): void{
    this.secondLine = secondLine;
  }

}
