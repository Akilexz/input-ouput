import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  @Input()
  count: number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }


}
