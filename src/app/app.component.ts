import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CounterComponent } from './components/counter/counter.component';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { ListComponent } from './components/heroes/list/list.component';
import { DbzMainPageComponent } from './components/dbz/pages/dbz-main-page/dbz-main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CounterComponent,
    HeroComponent,
    ListComponent,
    DbzMainPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Hola Mundo';
}
