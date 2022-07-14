import { Component} from '@angular/core';
import { hero } from '../heroe';


@Component({
  selector: 'app_heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

  hero: hero = {
    id: 1,
    name: 'The spantamorras 3000'
  };

  constructor() { }


}
