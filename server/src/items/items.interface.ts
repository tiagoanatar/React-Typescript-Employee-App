// src/items/items.interface.ts

import { Item, ItemReview } from "./item.interface";

export interface Items {
  [key: number]: Item;
}

export interface ItemsReview {
	length?: any;
  [key: number]: ItemReview;
}