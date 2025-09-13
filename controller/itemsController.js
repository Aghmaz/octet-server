import fs from "fs";
const data_file = "data.json";
// helper : file read
function readData() {
  const data = fs.readFileSync(data_file);
  return JSON.parse(data);
}
// helper : file write
function writeData(data) {
  fs.writeFileSync(data_file, JSON.stringify(data, null, 2));
}
export const getItembyId = (req, res) => {
  const items = readData();
  const item = items.find((i) => i.id == req.params.id);
  if (!item) {
    return res.status(404).json({ message: "item not found" });
  }
  res.status(200).json(item);
};

export const getItems = (req, res) => {
  const items = readData();
  res.status(200).json(items);
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
  const items = readData();
  const newItem = {
    id: Date.now(),
    name,
    age,
    university,
  };
  items.push(newItem);
  writeData(items);
  res.status(200).json(newItem);
};

export const updateItem = (req, res) => {
  const items = readData();
  const index = items.findIndex((i) => i.id == req.params.id);
  if (index == -1) {
    return res.status(404).json({ message: "item not found" });
  }
  items[index] = { ...items[index], ...req.body };
  writeData(items);
  res.status(200).json(items[index]);
};
export const deleteItem = (req, res) => {
  const items = readData();
  const index = items.findIndex((i) => i.id == req.params.id);
  if (index == -1) {
    return res.status(404).json({ message: "item not found" });
  }
  const deleted = items[index];
  items.splice(index, 1);
  writeData(items);
  res.status(200).json(deleted);
};
