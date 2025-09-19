import fs from "fs";
const data_file = "data.json";
// helper : file read

export function readData() {
  const data = fs.readFileSync(data_file);
  return JSON.parse(data);
}
// helper : file write
export function writeData(data) {
  fs.writeFileSync(data_file, JSON.stringify(data, null, 2));
}
export const getItemUsingId = ({ id }) => {
  const items = readData();
  const item = items.find((i) => i.id == id);
  return item;
};

export const getAllItem = () => {
  const items = readData();
  return items;
};

export const createNewItem = ({ name, age, university }) => {
  const items = readData();
  const newItem = {
    id: Date.now(),
    name,
    age,
    university,
  };
  items.push(newItem);
  writeData(items);
  return newItem;
};

export const updateNewItem = (id) => {
  const items = readData();
  const index = items.findIndex((i) => i.id == id);
  if (index == -1) {
    return res.status(404).json({ message: "item not found" });
  }
  items[index] = { ...items[index], ...req.body };
  writeData(items);
  return items[index];
};

export const deleteNewItem = (id) => {
  const items = readData();
  const index = items.findIndex((i) => i.id == id);
  if (index == -1) {
    return res.status(404).json({ message: "item not found" });
  }
  const deleted = items[index];
  items.splice(index, 1);
  writeData(items);
  return deleted;
};
