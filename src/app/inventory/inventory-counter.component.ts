import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';

@Component({
  selector: 'inventory-counter',
  templateUrl: './inventory-counter.component.html',
  styleUrls: ['./inventory-counter.component.css']
})
export class InventoryCounterComponent implements OnInit {

  @Output()
  newHeroEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  addNewHero(value:string) {
    this.newHeroEvent.emit(value);
    console.log(this.newHeroEvent.emit(value));
  }

}
