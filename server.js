import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`<a href='/login'>Login</a><a href='/signup'>Sign Up</a>`);
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("Running successfully at http://localhost:" + PORT);
});
