import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();
app.use("/", (req, res) => {
  res.sendFile(__dirname+"/src/form.html");
});
app.listen(8000, (error) => {
  error && console.log(error);
  console.log(`server running at http://localhost:8000`);
});
