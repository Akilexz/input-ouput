import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


@Input() parentMessage: string;

@Output()
childMessage = new EventEmitter<string>();

onChange(value: string) {
  this.childMessage.emit(value);
}

  ngOnInit() {
  }




}
