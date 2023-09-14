import { Component, OnInit } from '@angular/core';
import { Item } from './item/model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shopping Cart';
  data: Item[]  = []
 
  constructor(
    private itemService: ItemService
  ){

  }
  ngOnInit(): void {
    this.data=this.itemService.fetchData()

  }
  handleDelete(id: number | undefined){
    this.itemService.deleteItem(id);
    this.data = this.itemService.fetchData()
  }
}
