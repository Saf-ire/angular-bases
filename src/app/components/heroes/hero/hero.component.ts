import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public hero_name: string = 'Ironman';
  public real_name: string = 'Tony Stark';
  public age: number = 45;

  get capitalizedName(): string {
    return this.real_name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.real_name} - ${this.age}`;
  }

  changeName(): void {
    this.real_name = 'Peter Parker';
    this.hero_name = 'Spider-man';
  }

  changeAge(): void {
    this.age = 25;
  }

  reset(): void {
    this.age = 45;
    this.hero_name = 'Ironman';
    this.real_name = 'Tony Stark';
  }
}
