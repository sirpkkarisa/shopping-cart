import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {


  @Output()
  removeItem:EventEmitter<number> = new EventEmitter<number>();
  count: number = 0;
  @Input()
  data: Item | undefined;
  increment() {
  this.count += 1;
  }
  decrement() {
    if(this.count){

      this.count -= 1;
    }
  }
  deleteItem(id: number|undefined) {
    this.removeItem.emit(id);
    }
}
