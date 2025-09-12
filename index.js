const fs = require("fs"); // node file system
const express = require("express"); //import express module
const app = express(); // invoke method
//   app.get   which get end point

// built in middleware
app.use(express.json()); // JSON body parse krny ka liye

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

// get API call / get route , get end point - Read operation in crud

app.get("/", (req, res) => {
  const items = readData();
  res.status(200).json(items);
});

// post request - Create Data - add new items
app.post("/items", (req, res) => {
  const items = readData();
  const newItem = {
    id: Date.now(),
    ...req.body,
  };
  items.push(newItem);
  writeData(items);
  res.status(200).json(newItem);
});

// Read (GET) - Single item by id
app.get("/items/:id", (req, res) => {
  const items = readData();
  const item = items.find((i) => i.id == req.params.id);
  if (!item) {
    return res.status(404).json({ message: "item not found" });
  }
  res.status(200).json(item);
});

// update (PUT) update item by ID
app.put("/items/:id", (req, res) => {
  const items = readData();
  const index = items.findIndex((i) => i.id == req.params.id);
  if (!index) {
    return res.status(404).json({ message: "item not found" });
  }
  items[index] = { ...items[index], ...req.body };
  writeData(items);
  res.status(200).json(items[index]);
});

// delete - delete item by id
app.delete("/items/:id", (req, res) => {
  const items = readData();
  const index = items.findIndex((i) => i.id == req.params.id);
  if (index == -1) {
    return res.status(404).json({ message: "item not found" });
  }
  const deleted = items[index];
  items.splice(index, 1);
  writeData(items);
  res.status(200).json(deleted);
});

// backend port defined.
let port = 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
