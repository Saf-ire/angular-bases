import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { ListComponent } from './components/heroes/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CounterComponent,
    HeroComponent,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Hola Mundo';
}
