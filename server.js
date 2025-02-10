import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("Running successfully at http://localhost:" + PORT);
});
