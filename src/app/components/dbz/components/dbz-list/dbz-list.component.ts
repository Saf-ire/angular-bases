import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DbzCharacter } from '../../interfaces/dbz-character.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.scss',
})
export class DbzListComponent {
  @Input() characters?: DbzCharacter[];
  @Output() characterId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.characterId.emit(id);
  }
}
