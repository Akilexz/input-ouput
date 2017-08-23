import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'inventory-counter',
  templateUrl: './inventory-counter.component.html',
  styleUrls: ['./inventory-counter.component.css']
})
export class InventoryCounterComponent implements OnInit {

  constructor() { }


  // @Output()
  // newItemData: EventEmitter<string> = new EventEmitter<string>();

  // @Output()
  // notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }
  // addItem(value:string) {
  //   this.newItemData.emit(value);
  //   console.log(this.newItemData.emit);
  // }

  @Output()
  newHeroEvent: EventEmitter<string> = new EventEmitter<string>();

  addNewHero(value:string) {
    this.newHeroEvent.emit(value);
    console.log(this.newHeroEvent.emit(value));
  }

  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  // addHero(newHero: string) {
  //   if (newHero) {
  //     this.heroes.push(newHero);
  //   }
  // }

}
