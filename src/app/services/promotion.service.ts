import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }
  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => {promo.id === id}) [0];
  }
  getFeaturedPromotion(): Promotion{
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }

  constructor() { }
}
