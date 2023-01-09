console.log("Hello budy");
import express from "express";
const app = express();
app.listen(8000, (error) => {
    error && console.log(error);
    console.log(`server running at http://localhost:8000`)
})