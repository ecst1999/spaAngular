import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  heroesBusqueda:any = {};
  personaje: string;

  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute) { 

      this.activatedRoute.params.subscribe(parametro => {
        this.personaje = parametro['personajes'];
        this.heroesBusqueda = this.heroesService.buscarHeroes(parametro['personajes']);        
      });
    }


}
