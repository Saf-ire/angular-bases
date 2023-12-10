import { Injectable } from '@angular/core';
import { DbzCharacter } from '../interfaces/dbz-character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: DbzCharacter[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 900,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 18000,
    },
  ];

  onNewCharacter(character: DbzCharacter): void {
    const newCharacter: DbzCharacter = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  onDeleteLastCharacter(): void {
    this.characters.pop();
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
