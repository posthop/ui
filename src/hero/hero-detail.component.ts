import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'my-heroes',
  template: `./heroes.component.html`,
  styles: ['./heroes.component.css']
})
export class AppComponent {
  title = 'posthop';
}

export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  showNgFor = false;
}

constructor(private router: Router, private heroService: HeroService) {}

addHero(): void {
  this.addingHero = true;
this.selectedHero = null;
}

close(savedHero: Hero): void {
  this.addingHero = false;
if (savedHero) {
  this.getHeroes();
}
}

deleteHero(hero: Hero, event: any): void {
  event.stopPropagation();
this.heroService.delete(hero).subscribe(res => {
  this.heroes = this.heroes.filter(h => h !== hero);
  if (this.selectedHero === hero) {
    this.selectedHero = null;
  }
}, error => (this.error = error));
}

ngOnInit(): void {
  this.getHeroes();
}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
this.addingHero = false;
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}