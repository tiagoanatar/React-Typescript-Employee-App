// src/items/items.service.ts

/**
* Data Model Interfaces
*/

import { BaseItem, Item, ReviewArray, ItemReview } from "./item.interface";
import { Items, ItemsReview } from "./items.interface";

/**
* In-Memory Store
*/

let items: Items = {
	0: {
		id: 0,
		name: 'Jon Doe',
		role: 'Designer',
		age: '1980-08-16',
		image: 'https://randomuser.me/api/portraits/men/71.jpg',
		review: 'Nullam sed tincidunt est. Sed condimtum erat quis fermecongue lorem sed, feugiat odio.',
		assignedReviews: [
			{
				id: 1
			},
			{
				id: 2
			},
		],
		employeesReviews: [
			{
				id: 1,
				name: 'Ted Doe',
				review: 'Praesent turpis quam, accumsan interdum pellentesque placerat, facilisis a mauris.',
				image: 'https://randomuser.me/api/portraits/men/1.jpg',
			},
			{
				id: 2,
				name: 'Bruce Spring',
				review: 'Octorpis quam, accumsan interdum pellentesque placerat, facilisis a mauris.',
				image: 'https://randomuser.me/api/portraits/men/72.jpg',
			},
			{
				id: 3,
				name: 'Joana Clark',
				review: 'Spis quam, accumsan interdum pellentesque placerat, facilisis a mauris.',
				image: 'https://randomuser.me/api/portraits/women/3.jpg',
			},
		]
	},
	1: {
		id: 1,
		name: 'Ted Doe',
		role: 'Designer',
		age: '1980-08-16',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
		review: 'Maecenas finiesque, ac posuere urna consectetur. Aliquam ac lacus felis. Cras tincibus.',
		assignedReviews: [
			{
				id: 0
			},
		],
		employeesReviews: [
			{
				id: 0,
				name: 'Jon Doe',
				review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
				image: 'https://randomuser.me/api/portraits/men/71.jpg',
			},
		]
	},
	2: {
		id: 2,
		name: 'Bruce Spring',
		role: 'Designer',
		age: '1980-08-16',
		image: 'https://randomuser.me/api/portraits/men/72.jpg',
		review: 'Curaidunt at, placerat ac orci. Nam et nisi mi. Etiam blor mauris vitae lobortis.',
		assignedReviews: [
			{
				id: 1
			},
		],
		employeesReviews: [
			{
				id: 0,
				name: 'Jon Doe',
				review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
				image: 'https://randomuser.me/api/portraits/men/71.jpg',
			},
		]
	},
	3: {
		id: 3,
		name: 'Joana Clark',
		role: 'Programmer',
		age: '1980-08-16',
		image: 'https://randomuser.me/api/portraits/women/3.jpg',
		review: 'Praesent turpis quam, accumsan interdum pell et, maximus feugiat nulla.s.',
		assignedReviews: [
			{
				id: 1
			},
		],
		employeesReviews: [
			{
				id: 0,
				name: 'Jon Doe',
				review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
				image: 'https://randomuser.me/api/portraits/men/71.jpg',
			},
		]
	},
	4: {
		id: 4,
		name: 'Susan Bold',
		role: 'Acconting',
		age: '1980-08-16',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
		review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
		assignedReviews: [
			{
				id: 1
			},
		],
		employeesReviews: [
			{
				id: 0,
				name: 'Jon Doe',
				review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
				image: 'https://randomuser.me/api/portraits/men/71.jpg',
			},
		]
	},
	5: {
		id: 5,
		name: 'Felip Shart',
		role: 'Builder',
		age: '1970-08-16',
		image: 'https://randomuser.me/api/portraits/men/66.jpg',
		review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
		assignedReviews: [
			{
				id: 1
			},
		],
		employeesReviews: [
			{
				id: 0,
				name: 'Jon Doe',
				review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
				image: 'https://randomuser.me/api/portraits/men/71.jpg',
			},
		]
	},
	6: {
		id: 6,
		name: 'Jack Rock',
		role: 'Builder',
		age: '1970-08-16',
		image: 'https://randomuser.me/api/portraits/men/6.jpg',
		review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
		assignedReviews: [
			{
				id: 1
			},
		],
		employeesReviews: [
			{
				id: 0,
				name: 'Jon Doe',
				review: 'Sed nulla nibh, consectetur sit amet lacus ac, euismod  dui quis arcu accumsan mollis.',
				image: 'https://randomuser.me/api/portraits/men/71.jpg',
			},
			{
				id: 4,
				name: 'Susan Bold',
				review: 'Praesent turpis quam, accumsan interdum pellentesque placerat, facilisis a mauris.',
				image: 'https://randomuser.me/api/portraits/women/4.jpg',
			},
		]
	},
};

/**
* Service Methods
*/

// Load all items
export const findAll = async (): Promise<Item[]> => Object.values(items);

// Load specific item by its ID
export const find = async (id: number): Promise<Item> => items[id];

// Load reviews
export const findReview = async (id: number): Promise<ItemsReview> => {
	const review = items[id].employeesReviews
  return review;
};

// Load review item
export const findSingleReview = async (id: number, index: number): Promise<ReviewArray> => {
	const review = items[id].employeesReviews[index]
  return review;
};

// Load asssign
export const findAssigned = async (id: number): Promise<ItemsReview> => {
	const review = items[id].assignedReviews
  return review;
};

// Load assign item
export const findSingleAssigned = async (id: number, index: number): Promise<ReviewArray> => {
	const review = items[id].assignedReviews[index]
  return review;
};

// Create a new item
export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

// Create new assigned
export const createAssigned = async (id: number, newItem: ItemReview): Promise<ItemReview> => {

  items[id].assignedReviews[items[id].assignedReviews.length]= {
    ...newItem
  };

  return items[id].assignedReviews[items[id].assignedReviews.length];
};

// Create new review
export const createReview = async (id: number, newItem: ItemReview): Promise<ItemReview> => {
	const reviewerId = { id: 0 }
  items[id].employeesReviews[items[id].employeesReviews.length]= {
		...reviewerId,
    ...newItem
  };

  return items[id].assignedReviews[items[id].assignedReviews.length];
};

// Update current item
export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

// Delete item
export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};

// Delete review item
export const removeReview = async (id: number, index: number): Promise<null | void> => {

	const item = await findSingleReview(id, index)

  if (!item) {
    return null;
  }

	// @ts-ignore
	items[id].employeesReviews.splice(index, 1)
};

// Delete assign item
export const removeAssign = async (id: number, index: number): Promise<null | void> => {

	const item = await findSingleAssigned(id, index)

  if (!item) {
    return null;
  }

	// @ts-ignore
	items[id].assignedReviews.splice(index, 1)
};