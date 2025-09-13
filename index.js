import express from "express"; //import express module
import router from "./routes/itemsRoute.js";
const app = express(); // app instance
app.use(express.json()); // JSON body parse krny ka liye
app.use("/", router);

let port = 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
