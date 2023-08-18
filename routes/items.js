import express from "express";
import auth from '../middleware/auth.js'

import { getItems, getItem, createItem, updateItem, deleteItem } from "../controllers/items.js"

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", auth, createItem);
router.patch("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

export default router;