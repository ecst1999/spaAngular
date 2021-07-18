import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesservice: HeroesService,
    private router: Router) { }

  ngOnInit(): void {

    this.heroes = this.heroesservice.getHeroes();
  }

  verHeroe(idx: number) {
    
    this.router.navigate(['/heroe', idx]);
    
  }


}
