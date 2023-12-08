import { Component } from '@angular/core';

interface Hero {
  hero_name: string;
  real_name: string;
  age: number;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  deletedHero?: Hero;

  heroes: Hero[] = [
    {
      hero_name: 'Ironman',
      real_name: 'Tony Stark',
      age: 45,
    },
    {
      hero_name: 'Hulk',
      real_name: 'Bruce Banner',
      age: 46,
    },
    {
      hero_name: 'Thor',
      real_name: 'Thor Odin-son',
      age: 3000,
    },
    {
      hero_name: 'Hawkeye',
      real_name: 'Clint Barton',
      age: 39,
    },
    {
      hero_name: 'Black Widow',
      real_name: 'Natasha Romanoff',
      age: 32,
    },
  ];

  removeLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
