import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Dish[] {
    return DISHES;
  }
  getDish(id: string): Dish {
    return DISHES.find(e => e.id === id);
  }
  getFeaturedDish(): Dish{
    return DISHES.filter((dish) => dish.featured)[0];
  }

  constructor() { }

}
