import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DbzCharacter } from '../../interfaces/dbz-character.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './dbz-add-character.component.html',
  styleUrl: './dbz-add-character.component.scss',
})
export class DbzAddCharacterComponent {
  @Output() onNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter();
  character: DbzCharacter = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character?.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
