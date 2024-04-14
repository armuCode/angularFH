import { Injectable } from '@angular/core';
import { Character } from '../pages/interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 6000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 5000,
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 3000,
    },
    {
      id: uuid(),
      name: 'Freezer',
      power: 8000,
    },
    {
      id: uuid(),
      name: 'Cell',
      power: 12000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(character);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  deletedCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
