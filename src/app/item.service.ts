import { Injectable } from '@angular/core';
import { Item } from './item/model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private data: Item[]=  [
    {
      id: 1,
      description: "Stylish Leather Jacket",
      price: 179099,
      color: 'Black',
      instock: true,
      imgUrl: 'https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      description: "Classic White Sneakers",
      price: 5999,
      color: 'White',
      instock: false,
      imgUrl: 'https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      description: "Vintage Analog Watch",
      price: 34999,
      color: 'Brown/Gold',
      instock: true,
      imgUrl: 'https://images.pexels.com/photos/9799766/pexels-photo-9799766.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
  ];
  constructor() { }
  deleteItem(id: number | undefined){
    this.data = this.data.filter(v=> v.id !== id);
  }
  fetchData(): Item[] {
    return this.data;
  }
}
