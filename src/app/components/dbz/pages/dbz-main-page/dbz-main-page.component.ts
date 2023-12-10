import { Component, inject } from '@angular/core';
import { DbzListComponent } from '../../components/dbz-list/dbz-list.component';
import { DbzAddCharacterComponent } from '../../components/dbz-add-character/dbz-add-character.component';

import { DbzCharacter } from '../../interfaces/dbz-character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [DbzListComponent, DbzAddCharacterComponent],
  templateUrl: './dbz-main-page.component.html',
  styleUrl: './dbz-main-page.component.scss',
})
export class DbzMainPageComponent {
  private dbzService = inject(DbzService);
  get characters(): DbzCharacter[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onDeleteLastCharacter(): void {
    this.dbzService.onDeleteLastCharacter();
  }

  onNewCharacter(character: DbzCharacter): void {
    this.dbzService.onNewCharacter(character);
  }
}
