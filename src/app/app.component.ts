import { Component } from '@angular/core';
import { Item } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '@Input/@Output Demo';

  userEntry: any;

  childChange(): void{}

  items = [
    new Item( 'item 1' ),
    new Item( 'item 2' ),
    new Item( 'item 3' ),
    new Item( 'item 4' )
  ];

  onNotify(message:string):void {
    this.items.push(this.userEntry);
  }


  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  addHero(newHero: string) {
    console.log('addHero()');
    this.heroes.push(newHero);
  }

}
