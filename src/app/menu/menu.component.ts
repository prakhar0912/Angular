import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

 const okayy : number[] = [1,2,3,4,5,6];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;
  okay = okayy;
  selectedDish: Dish;

  

  constructor() { }

  ngOnInit() {
  }
  onSelect(dish: Dish){
    this.selectedDish=dish;
  }

}
