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
	assignedReviews: Array<Item>
	employeesReviews: Array<ItemReview>
}

export interface Item extends BaseItem {
	id: number
}

export interface ItemReview extends ReviewArray {
	id: number
}

export interface Items {
  [key: number]: Item
}

export interface ItemsReview {
  [key: number]: ItemReview
}