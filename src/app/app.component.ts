import { Component } from '@angular/core';
import { Item } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '@Input/@Output ';




  heroes = ['batman', 'superman', 'Flash'];

  addHero(newHero: string) {
    console.log('addHero()');
    this.heroes.push(newHero);
  }

}
