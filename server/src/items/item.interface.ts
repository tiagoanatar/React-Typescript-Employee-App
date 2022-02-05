// src/items/item.interface.ts
import { Items, ItemsReview } from "./items.interface";

export interface ReviewArray {
	name?: string
	review?: string
	image?: string
}

export interface BaseItem {
	name: string
	role: string
	age: string
	image: string
	review: string
	assignedReviews: ItemsReview
	employeesReviews: ItemsReview
}

export interface Item extends BaseItem {
	id: number
}

export interface ItemReview extends ReviewArray {
	id: number
}