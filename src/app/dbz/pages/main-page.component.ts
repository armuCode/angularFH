import { Component } from '@angular/core';
import { Character } from './interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 6000,
    },
    {
      name: 'Gohan',
      power: 5000,
    },
    {
      name: 'Piccolo',
      power: 3000,
    },
    {
      name: 'Freezer',
      power: 8000,
    },
    {
      name: 'Cell',
      power: 12000,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
