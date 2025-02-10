import express from "express";
import path from "path";

const app = express();
const PORT = 3000;
const _dirname = path.resolve();

app.get("/", (req, res) => {
  res.send(`<a href='/login'>Login</a><a href='/signup'>Sign Up</a>`);
});

app.get("/signup", (req, res) => {
  res.sendFile(`${_dirname}/signup.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${_dirname}/login.html`);
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("Running successfully at http://localhost:" + PORT);
});
