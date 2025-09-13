import express from "express";
import {
  getItems,
  getItembyId,
  createItem,
  updateItem,
  deleteItem,
} from "../controller/itemsController.js";
const router = express.Router();

router.get("/", getItems);
router.get("/items/:id", getItembyId);
router.post("/items", createItem);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

export default router;
