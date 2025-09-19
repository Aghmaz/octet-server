import {
  getItemUsingId,
  getAllItem,
  createNewItem,
  updateNewItem,
  deleteNewItem,
} from "../services/itemService";
export const getItembyId = (req, res) => {
  const result = getItemUsingId({ id: req.param.id });
  if (!result) {
    return res.status(404).json({ message: "item not found" });
  }
  res.status(200).json(item);
};

export const getItems = (req, res) => {
  const result = getAllItem();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json("Data not Found");
  }
};

export const createItem = (req, res) => {
  const { name, age, university } = req.body;
  if (name && typeof name != String) {
    return res.status(400).json({ message: "Name should be string" });
  }
  if (age && typeof age != String) {
    return res.status(400).json({ message: "Age should be string" });
  }
  if (!name || !age || !university) {
    return res.status(400).json({ message: "please pass the correct payload" });
  }
  const result = createNewItem({ name, age, university });
  if (!result) {
    return res.status(400).json("item not found");
  }
  res.status(200).json(result);
};

export const updateItem = (req, res) => {
  const result = updateNewItem({ id: req.param.id });
  if (!result) {
    return res.status(400).json({ message: "item not found" });
  }
  res.status(200).json(result);
};
export const deleteItem = (req, res) => {
  const result = deleteNewItem({ id: req.param.id });
  if (!result) {
    return res.status(400).json({ message: "item not deleted" });
  }
  res.status(200).json(deleted);
};
