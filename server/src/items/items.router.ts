/**
* Required External Modules and Interfaces
*/

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item, ItemReview, ReviewArray } from "./item.interface";
import { ItemsReview } from "./items.interface";

/**
* Router Definition
*/

export const itemsRouter = express.Router();

/**
* Controller Definitions
*/

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id/update

itemsRouter.get("/:id/update", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id/emploeesreview

itemsRouter.get("/:id/employeesreview", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item = await ItemService.findReview(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id/emploeesreview/:index

itemsRouter.get("/:id/employeesreview/:index", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const index: number = parseInt(req.params.index, 10);

  try {
    const item = await ItemService.findSingleReview(id, index);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id/assignedreviews

itemsRouter.get("/:id/assignedreviews", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item = await ItemService.findAssigned(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id/assignedreviews/:index

itemsRouter.get("/:id/assignedreviews/:index", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const index: number = parseInt(req.params.index, 10);

  try {
    const item = await ItemService.findSingleAssigned(id, index);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items//:id/employeesreview 
// NOT DONE YET ************************
itemsRouter.post("/:id/employeesreview", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const item: ItemReview = req.body;

    const newItem = await ItemService.createReview(id, item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items//:id/assignedreviews

itemsRouter.post("/:id/assignedreviews", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const item: ItemReview = req.body;

    const newItem = await ItemService.createAssigned(id, item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id/emploeesreview/:index

itemsRouter.delete("/:id/employeesreview/:index", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const index: number = parseInt(req.params.index, 10);

    await ItemService.removeReview(id, index);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id/assignedreviews/:index

itemsRouter.delete("/:id/assignedreviews/:index", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const index: number = parseInt(req.params.index, 10);

    await ItemService.removeAssign(id, index);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});